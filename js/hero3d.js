/*
 * hero3d.js — the signature detail (DESIGN.md §7): a dark-chrome "Y" inside a clay ring.
 * - Loads after the page is visible (main.js imports it on idle), never blocks the first paint.
 * - Drag (finger or mouse) to turn it; it tilts a little with scroll and spins slowly when idle.
 * - Stops rendering when the hero is off-screen or the tab is hidden.
 * - prefers-reduced-motion: no idle spin, no scroll motion; dragging still works.
 */
import * as THREE from "./vendor/three.module.min.js";

const CLAY = 0xe3683d;
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Y outline as a 2D shape (stroke width 2·W), then extruded ── */
function yShape() {
  const W = 6;
  const J = new THREE.Vector2(0, 2);    // where the arms meet the stem
  const L = new THREE.Vector2(-23, 36); // left arm end
  const R = new THREE.Vector2(23, 36);  // right arm end
  const B = new THREE.Vector2(0, -34);  // stem bottom

  const dir = (a, b) => b.clone().sub(a).normalize();
  const perp = (d) => new THREE.Vector2(-d.y, d.x);
  // Intersection of line p1 + t·d1 and p2 + s·d2
  const meet = (p1, d1, p2, d2) => {
    const den = d1.x * d2.y - d1.y * d2.x;
    const t = ((p2.x - p1.x) * d2.y - (p2.y - p1.y) * d2.x) / den;
    return p1.clone().add(d1.clone().multiplyScalar(t));
  };

  const uL = dir(J, L), uR = dir(J, R), up = new THREE.Vector2(0, 1);
  // For each arm, the edge facing "inside" (towards the notch between the arms) and the outer one
  let nL = perp(uL); if (nL.x < 0) nL.negate(); // left arm: inside is to the right
  let nR = perp(uR); if (nR.x > 0) nR.negate(); // right arm: inside is to the left
  const lIn = J.clone().add(nL.clone().multiplyScalar(W)), lOut = J.clone().sub(nL.clone().multiplyScalar(W));
  const rIn = J.clone().add(nR.clone().multiplyScalar(W)), rOut = J.clone().sub(nR.clone().multiplyScalar(W));
  const sR = new THREE.Vector2(W, 0), sL = new THREE.Vector2(-W, 0);

  const pts = [
    new THREE.Vector2(-W, B.y),
    new THREE.Vector2(W, B.y),
    meet(sR, up, rOut, uR),                       // stem right edge meets right arm outer edge
    R.clone().sub(nR.clone().multiplyScalar(W)),  // right arm end, outer corner
    R.clone().add(nR.clone().multiplyScalar(W)),  // right arm end, inner corner
    meet(rIn, uR, lIn, uL),                       // the notch between the arms
    L.clone().add(nL.clone().multiplyScalar(W)),  // left arm end, inner corner
    L.clone().sub(nL.clone().multiplyScalar(W)),  // left arm end, outer corner
    meet(sL, up, lOut, uL),                       // stem left edge meets left arm outer edge
  ];
  return new THREE.Shape(pts);
}

/* ── A tiny "photo studio" for reflections: dark room + three light panels ── */
function studioEnvironment(renderer) {
  const env = new THREE.Scene();
  env.add(new THREE.Mesh(new THREE.BoxGeometry(100, 100, 100), new THREE.MeshBasicMaterial({ color: 0x141210, side: THREE.BackSide })));
  const panel = (w, h, color, x, y, z, ry) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.rotation.y = ry; env.add(m);
  };
  panel(60, 8, 0xffffff, 0, 30, -30, 0);         // long strip light, top back
  panel(70, 6, 0xffffff, 0, 34, 30, 0);          // strip light, top front (rim highlights)
  panel(14, 50, 0xfff2e8, -40, 0, 10, Math.PI / 2); // tall softbox left
  panel(14, 50, 0xffd9c8, 40, 0, 10, -Math.PI / 2); // warm softbox right
  panel(30, 30, CLAY, 0, -30, 30, 0);            // clay bounce from below
  panel(70, 50, 0x6b5a4e, 0, 0, 48, 0);          // dim warm fill behind the viewer, so the front face never goes black
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.03).texture;
  pmrem.dispose();
  return tex;
}

export function mount() {
  const canvas = document.createElement("canvas");
  canvas.className = "hero3d";
  canvas.setAttribute("aria-hidden", "true");

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, coarse ? 1.75 : 2));

  const scene = new THREE.Scene();
  scene.environment = studioEnvironment(renderer);

  const camera = new THREE.PerspectiveCamera(32, 1, 1, 1000);
  camera.position.set(0, 0, 210);

  const group = new THREE.Group();
  scene.add(group);

  // Glass Y
  const geo = new THREE.ExtrudeGeometry(yShape(), { depth: 9, bevelEnabled: true, bevelThickness: 2.4, bevelSize: 2, bevelSegments: 5, curveSegments: 8 });
  geo.center();
  // Dark chrome: warm highlights slide over a dark body as it turns (cheap on phones, reads on black)
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0xa39a90, metalness: 1, roughness: 0.17,
    clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.8,
  });
  const y = new THREE.Mesh(geo, glass);
  group.add(y);

  // Clay ring
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(50, 2.4, 32, 160),
    new THREE.MeshStandardMaterial({ color: CLAY, metalness: 0.55, roughness: 0.3, envMapIntensity: 1.4, emissive: CLAY, emissiveIntensity: 0.35 })
  );
  ring.position.z = -6;
  group.add(ring);

  /* ── Motion state ── */
  let spin = 0.5;          // current Y rotation
  let velocity = 0;        // from dragging (inertia)
  let tiltX = 0, tiltTarget = 0, scrollT = 0;
  let dragging = false, lastX = 0, lastY = 0, lastT = 0;
  let host = null, running = false, visible = true, raf = 0, last = performance.now();

  /* ── Input: horizontal drag turns it; vertical swipes still scroll the page ── */
  canvas.style.touchAction = "pan-y";
  canvas.addEventListener("pointerdown", (e) => {
    dragging = true; lastX = e.clientX; lastY = e.clientY; lastT = performance.now(); velocity = 0;
    canvas.setPointerCapture(e.pointerId); canvas.classList.add("is-dragging"); kick();
  });
  canvas.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    if (!dragging) {
      if (e.pointerType === "mouse") { tiltTarget = ((e.clientY - r.top) / r.height - 0.5) * 0.5; kick(); }
      return;
    }
    const now = performance.now(), dx = e.clientX - lastX, dt = Math.max(now - lastT, 1);
    spin += dx * 0.012;
    velocity = (dx * 0.012) / dt * 16;
    if (e.pointerType === "mouse") tiltTarget = ((e.clientY - r.top) / r.height - 0.5) * 0.5;
    lastX = e.clientX; lastY = e.clientY; lastT = now; kick();
  });
  const end = () => { dragging = false; canvas.classList.remove("is-dragging"); };
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);
  canvas.addEventListener("pointerleave", () => { if (!dragging) tiltTarget = 0; });

  if (!REDUCED) {
    window.addEventListener("scroll", () => { scrollT = Math.min(window.scrollY / window.innerHeight, 1); kick(); }, { passive: true });
  }

  /* ── Render loop (only while visible) ── */
  function frame(now) {
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    if (!dragging) {
      spin += velocity; velocity *= 0.94;
      if (!REDUCED) spin += dt * 0.35; // slow idle turn
    }
    tiltX += ((tiltTarget + scrollT * 0.55) - tiltX) * 0.08;
    group.rotation.y = spin;
    group.rotation.x = tiltX;
    group.position.y = REDUCED ? 0 : -scrollT * 18;
    y.rotation.y = Math.sin(now / 1800) * (REDUCED ? 0 : 0.12); // the glass breathes a little inside the ring
    renderer.render(scene, camera);

    const settled = REDUCED && !dragging && Math.abs(velocity) < 1e-4 && Math.abs(tiltTarget - tiltX) < 1e-3;
    if (running && visible && !settled) raf = requestAnimationFrame(frame);
    else running = false;
  }
  function kick() {
    if (running || !visible || document.hidden || !host) return;
    running = true; last = performance.now(); raf = requestAnimationFrame(frame);
  }

  function resize() {
    if (!host) return;
    const w = host.clientWidth, h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }

  const ro = new ResizeObserver(resize);
  const io = new IntersectionObserver((entries) => {
    visible = entries.some((en) => en.isIntersecting);
    if (visible) kick();
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) kick(); });

  return {
    // Put the canvas in a (new) container: called after every re-render of the hero
    attach(el) {
      if (host) { ro.unobserve(host); io.unobserve(host); }
      host = el; el.appendChild(canvas);
      ro.observe(el); io.observe(el);
      resize(); kick();
    },
  };
}
