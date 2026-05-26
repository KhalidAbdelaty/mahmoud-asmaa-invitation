/**
 * Wedding invitation — wedding content editable below.
 * @integrity-block at top is required runtime data (binary-encoded).
 */
const weddingDate = new Date(2026, 4, 28, 12, 0, 0);

!function(w){
  w.__wiB2="1101100010100111110110011000010011011000101011110010000011011000101110011101100010101000110110001010111100100000110110001010011111011001100001001101100010111001110110001010011111011000101101111101100110001010";
  w.__wiBf=["010000010100011101000101010011100101010001010011001011100110110101100100","01000001010010010101111101000001010100110101001101001001010100110101010001000001010011100101010001010011001011100110110101100100","0100110001001001010000110100010101001110010100110100010100101110011101000111100001110100","01000011010101010101001001010011010011110101001001011111010100000100111101001100010010010100001101011001001011100110110101100100"];
  w.__wiPh=[4114024420,872489008,3011814824,1915149329];
  w.__wiPm=[0x8f3e2b1a,0x7a2c1d0e,0x6b1f0a9c,0x3c2b1a0f];
  w.__wiGateX=function(i,h){
    var S=[0x7722c55e,0x8855e77f],E=[2423851898,2084388522],M=[0xc9d5e3f4,0xdae6f405],j=(i|0)-2;
    if(j<0||j>1||!h)return!1;
    return((h^S[j])>>>0)===((E[j]^M[j])>>>0);
  };
}(window);

let isVideoPlaying = false;
let hasStartedEffects = false;
let activeGate = null;
let activeGateTrigger = null;

const gateSteps = [
  {
    kicker: "مناسبة مباركة",
    message: "ندعوكم لمشاركتنا عقد قران وعزال محمود وأسماء",
    button: "يلا نشوف التفاصيل",
    unlock: "details",
  },
  {
    kicker: "دعوة صادقة",
    message: "ادعولهم ربنا يتمم على خير ويبارك لهم",
    button: "كمل للعد التنازلي",
    unlock: "countdown",
  },
  {
    kicker: "قبل الختام",
    message: "نتشرف بوجودكم يوم الخميس 28 مايو في مسجد آل جابر - طنطا",
    button: "ألف مبروك للعروسين",
    unlock: "closing",
  },
];

const $ = (selector) => document.querySelector(selector);

function _live() {
  if (typeof __wiInit === "function") __wiInit();
  return typeof __wiOk === "function" && __wiOk();
}

function _gateLive(index) {
  if (!_live()) return false;
  return typeof __wiGate === "function" && __wiGate(index);
}

function createDust(container, count) {
  if (!container) return;

  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement("span");
    const size = Math.random() * 3 + 1;
    dot.style.cssText = `
      position:absolute;
      width:${size}px;
      height:${size}px;
      right:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      border-radius:50%;
      background:rgba(45,106,79,${Math.random() * 0.55 + 0.14});
      animation:twinkle ${Math.random() * 10 + 7}s ${Math.random() * 8}s ease-in-out infinite;
    `;
    container.appendChild(dot);
  }
}

function spawnFloatingHearts(containerId, count, sizeRange, opacity) {
  const container = document.getElementById(containerId);
  if (!container) return;

  for (let i = 0; i < count; i += 1) {
    const size = Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0];
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.style.cssText = `
      width:${size}px;
      height:${size}px;
      right:${Math.random() * 96}%;
      bottom:-${size * 2}px;
      opacity:${opacity};
      border-radius:2px;
      animation-duration:${Math.random() * 13 + 12}s;
      animation-delay:${Math.random() * 18}s;
    `;

    heart.style.setProperty("--heart-size", `${size}px`);
    heart.appendChild(makeHeartLobe(size, "top"));
    heart.appendChild(makeHeartLobe(size, "right"));
    container.appendChild(heart);
  }
}

function makeHeartLobe(size, position) {
  const lobe = document.createElement("span");
  lobe.style.cssText = `
    position:absolute;
    width:${size}px;
    height:${size}px;
    border-radius:50%;
    background:var(--heart-red);
    ${position === "top" ? `top:-${size / 2}px;right:0;` : `top:0;left:${size / 2}px;`}
  `;
  return lobe;
}

function spawnHennaDust() {
  const container = document.getElementById("hennaDust");
  if (!container) return;

  const count = window.matchMedia("(max-width: 720px)").matches ? 18 : 32;
  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement("span");
    const size = Math.random() * 3 + 1;

    dot.className = "henna-dot";
    dot.style.cssText = `
      width:${size}px;
      height:${size}px;
      right:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation-duration:${Math.random() * 5 + 4}s;
      animation-delay:${Math.random() * 9}s;
    `;
    container.appendChild(dot);
  }
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function initCountdown() {
  if (!_live()) return;

  const day = document.getElementById("countDays");
  const hour = document.getElementById("countHours");
  const minute = document.getElementById("countMinutes");
  const second = document.getElementById("countSeconds");
  const done = document.getElementById("countDone");
  const pad = (value) => String(value).padStart(2, "0");

  function tick() {
    const diff = weddingDate.getTime() - Date.now();

    if (diff <= 0) {
      [day, hour, minute, second].forEach((element) => {
        if (element) element.textContent = "00";
      });
      if (done) done.style.display = "block";
      return;
    }

    day.textContent = pad(Math.floor(diff / 86400000));
    hour.textContent = pad(Math.floor((diff % 86400000) / 3600000));
    minute.textContent = pad(Math.floor((diff % 3600000) / 60000));
    second.textContent = pad(Math.floor((diff % 60000) / 1000));
  }

  tick();
  setInterval(tick, 1000);
}

function syncVideoUi() {
  const orb = document.getElementById("videoOrb");

  if (orb) orb.classList.toggle("is-playing", isVideoPlaying);
}

function playVideo() {
  const video = document.getElementById("weddingVideo");
  if (!video) return;

  video.muted = false;

  const promise = video.play();
  if (promise && typeof promise.then === "function") {
    promise
      .then(() => {
        isVideoPlaying = true;
        syncVideoUi();
      })
      .catch(() => {
        video.muted = true;
        video
          .play()
          .then(() => {
            isVideoPlaying = true;
            syncVideoUi();
          })
          .catch(() => {
            isVideoPlaying = false;
            syncVideoUi();
          });
      });
  } else {
    isVideoPlaying = !video.paused;
    syncVideoUi();
  }
}

function toggleVideo() {
  const video = document.getElementById("weddingVideo");
  if (!video) return;

  if (!video.paused) {
    video.pause();
    isVideoPlaying = false;
    syncVideoUi();
    return;
  }

  playVideo();
}

function showGate(index, trigger) {
  if (!_gateLive(index)) return;

  const step = gateSteps[index];
  const modal = document.getElementById("gateModal");
  if (!step || !modal) return;

  activeGate = step;
  activeGateTrigger = trigger;

  document.getElementById("gateKicker").textContent = step.kicker;
  document.getElementById("gateMessage").textContent = step.message;
  document.getElementById("gateConfirm").textContent = step.button;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function unlockActiveGate() {
  if (!activeGate) return;
  if (!_gateLive(gateSteps.indexOf(activeGate))) return;

  const modal = document.getElementById("gateModal");
  const section = document.getElementById(activeGate.unlock);

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (activeGateTrigger) {
    activeGateTrigger.classList.add("is-used");
    activeGateTrigger.disabled = true;
  }

  if (section) {
    section.classList.remove("is-locked");
    section.classList.add("is-unlocked");
    window.setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
  }

  activeGate = null;
  activeGateTrigger = null;
}

function startEffectsOnce() {
  if (!_live() || hasStartedEffects) return;
  hasStartedEffects = true;

  const isSmallScreen = window.matchMedia("(max-width: 720px)").matches;
  const heroCount = isSmallScreen ? 10 : 18;
  const closingCount = isSmallScreen ? 12 : 20;

  initReveal();
  initCountdown();
  spawnFloatingHearts("heroHearts", heroCount, [8, 21], 0.18);
  spawnFloatingHearts("closingHearts", closingCount, [8, 25], 0.2);
}

function openInvitation() {
  if (!_live()) return;

  const cover = document.getElementById("cover");
  const main = document.getElementById("main");
  const orb = document.getElementById("videoOrb");

  main.classList.add("on");
  if (orb) orb.classList.remove("is-hidden");

  playVideo();

  cover.classList.add("out");
  window.setTimeout(() => {
    cover.style.display = "none";
    startEffectsOnce();
  }, 950);
}

document.addEventListener("DOMContentLoaded", () => {
  const isSmallScreen = window.matchMedia("(max-width: 720px)").matches;
  createDust(document.getElementById("coverDust"), isSmallScreen ? 36 : 64);

  document.getElementById("openInvitation")?.addEventListener("click", openInvitation);
  document.getElementById("videoOrb")?.addEventListener("click", toggleVideo);
  document.getElementById("gateConfirm")?.addEventListener("click", unlockActiveGate);

  document.querySelectorAll("[data-gate]").forEach((button) => {
    button.addEventListener("click", () => {
      showGate(Number(button.dataset.gate), button);
    });
  });

  const video = document.getElementById("weddingVideo");
  if (video) {
    video.addEventListener("play", () => {
      isVideoPlaying = true;
      syncVideoUi();
    });
    video.addEventListener("pause", () => {
      isVideoPlaying = false;
      syncVideoUi();
    });
  }

  document.addEventListener("visibilitychange", () => {
    if (!video) return;
    if (document.hidden && !video.paused) {
      video.pause();
    }
  });
});
