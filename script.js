
/* =========================================================
   OUR FIRST ANNIVERSARY — JAVASCRIPT
   Works with the supplied index.html and style.css.

   Before publishing:
   1. Add your song at assets/our-song.mp3
   2. Add your 12 photos in assets/memories/
   3. Personalize the letters, memories and promises below.
   ========================================================= */

"use strict";

/* ---------- 1. PERSONALIZE YOUR WEBSITE HERE ---------- */

const CONFIG = {
  names: {
    sender: "Papan",
    recipient: "Piya"
  },

  // Relationship start date: 18 October 2025.
  // Change the time if you know the exact starting time.
  relationshipDate: "2025-10-18T00:00:00",

  // Change this to the actual date/time of your confession.
  confessionDate: "2025-10-18T00:00:00",

  // Place your audio file at this path.
  song: "assets/our-song.mp3",

  letter: {
    salutation: "My dearest Piya,",

    paragraphs: [
      "One year ago, an ordinary day became the beginning of a story that means so much to me. I could never have imagined all the memories, conversations, laughter and lessons that would follow.",
      "What makes our story special isn't that every day has been perfect. It's that we have had the chance to learn about each other, understand each other and keep growing through the little moments that make life meaningful.",
      "You have become an important part of my world. The smallest conversations can become favourite memories, and ordinary moments can mean more than the grandest plans.",
      "We both have dreams to chase, responsibilities to fulfil and so much to learn. I want us to keep becoming better versions of ourselves while appreciating the journey we share.",
      "Today, I wanted to create something that would hold a little piece of this year—a place where our memories, our story and our hopes for the future could live together."
    ],

    highlight:
      "One year is a beautiful beginning. Our story still has so many pages left to write.",

    sign: "With all my heart, Papan ❤️"
  },

  confession: {
    story:
      "Some moments seem small when they happen, but they become important chapters in our lives. This is where our story began to take a different shape.",
    quote:
      "Sometimes, a single moment becomes a memory we carry for years."
  },

  relationship: {
    story:
      "From the first conversations to the memories we have made since, every chapter has added something new to our story.",
    quote:
      "We don't need to know every chapter ahead. We just need to keep making each page meaningful."
  },

  // Replace these sample captions with your actual memories.
  memories: [
    {
      month: "Month One",
      caption: "The beginning of something special.",
      image: "assets/memories/month-01.jpg"
    },
    {
      month: "Month Two",
      caption: "Little moments worth remembering.",
      image: "assets/memories/month-02.jpg"
    },
    {
      month: "Month Three",
      caption: "Another chapter in our story.",
      image: "assets/memories/month-03.jpg"
    },
    {
      month: "Month Four",
      caption: "Conversations that became memories.",
      image: "assets/memories/month-04.jpg"
    },
    {
      month: "Month Five",
      caption: "Growing, learning and understanding.",
      image: "assets/memories/month-05.jpg"
    },
    {
      month: "Month Six",
      caption: "Half a year of shared memories.",
      image: "assets/memories/month-06.jpg"
    },
    {
      month: "Month Seven",
      caption: "The little things still matter most.",
      image: "assets/memories/month-07.jpg"
    },
    {
      month: "Month Eight",
      caption: "Another month, another page.",
      image: "assets/memories/month-08.jpg"
    },
    {
      month: "Month Nine",
      caption: "Memories we will always treasure.",
      image: "assets/memories/month-09.jpg"
    },
    {
      month: "Month Ten",
      caption: "A journey made of countless moments.",
      image: "assets/memories/month-10.jpg"
    },
    {
      month: "Month Eleven",
      caption: "Almost a year of our story.",
      image: "assets/memories/month-11.jpg"
    },
    {
      month: "Month Twelve",
      caption: "One year down, so much life ahead.",
      image: "assets/memories/month-12.jpg"
    }
  ],

  littleThings: [
    {
      title: "The Conversations",
      text: "The random talks, the meaningful discussions and the ordinary conversations that somehow became special."
    },
    {
      title: "The Laughter",
      text: "The silly moments, the unexpected jokes and the memories that make us smile again."
    },
    {
      title: "The Small Details",
      text: "The little things we remember about each other that make our story uniquely ours."
    },
    {
      title: "Learning Together",
      text: "Understanding each other better, listening more carefully and learning from our differences."
    },
    {
      title: "The Difficult Days",
      text: "Remembering that patience, honesty and a willingness to understand matter most when things are not easy."
    },
    {
      title: "Our Dreams",
      text: "The ambitions we carry, the goals we work towards and the future we hope to build through our own efforts."
    }
  ],

  promises: [
    "I will try to listen with patience instead of making assumptions.",
    "I will respect your individuality, your boundaries and your dreams.",
    "I will communicate honestly, even when a conversation is difficult.",
    "I will celebrate your achievements and encourage your growth.",
    "I will remember that we are both learning and that mistakes deserve thoughtful conversations.",
    "I will keep working towards my own goals while making time for the people and moments that matter.",
    "I will never expect perfection from either of us; I will value sincerity, effort and mutual respect."
  ],

  future: {
    paragraphs: [
      "There is so much ahead of us: exams, ambitions, new experiences, challenges and dreams that we have not even imagined yet.",
      "I want to work hard, build a future through my own efforts and see both of us grow into people we are proud to become. I hope we keep supporting each other's ambitions without losing sight of who we are as individuals.",
      "I don't know exactly where life will take us or how every chapter will unfold. What I do know is that the future deserves our patience, maturity, honesty and effort—not just beautiful words today.",
      "Perhaps one day we will look back at this little website and laugh at how we celebrated our first year. I hope we will also remember the excitement, the hope and the sincerity with which it was made."
    ],

    coda:
      "The future is unwritten. Let's make it meaningful, one day at a time."
  },

  closing: {
    paragraphs: [
      "Thank you for being part of this first chapter. Thank you for the memories, the conversations, the lessons and all the little moments that have become part of our story.",
      "This website may end on its final page, but it cannot contain everything this year has meant. Some memories live in photographs, some in words and some simply in the way we remember a moment.",
      "As we step into another year, I hope we keep choosing kindness, understanding, personal growth and honesty. May we continue to learn, pursue our dreams and appreciate the journey rather than rushing through it."
    ],

    happy: "Happy First Anniversary, Piya! ❤️"
  }
};


/* ---------- 2. SHARED ELEMENTS AND STATE ---------- */

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

const scenes = $$(".scene");
const audio = $("#bgAudio");

let currentScene = 1;
let songStarted = false;
let lightboxIndex = 0;
let timerInterval = null;

const totalScenes = scenes.length;

if (audio) {
  audio.src = CONFIG.song;
  audio.loop = true;
  audio.preload = "auto";

  // Prevent the context menu from offering the usual audio controls.
  audio.controls = false;

  // Prevent accidental keyboard shortcuts from pausing the song
  // while the page itself has focus.
  document.addEventListener("keydown", (event) => {
    if (
      songStarted &&
      (event.code === "Space" || event.key.toLowerCase() === "k") &&
      !["INPUT", "TEXTAREA"].includes(
        document.activeElement?.tagName
      )
    ) {
      event.preventDefault();
    }
  });
}


/* ---------- 3. SMALL HELPER FUNCTIONS ---------- */

function setText(selector, value) {
  const element = $(selector);
  if (element) element.textContent = value;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function validDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(value) {
  const date = validDate(value);
  if (!date) return "A special day";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
}

function addParagraphs(container, paragraphs) {
  if (!container) return;

  container.replaceChildren();

  paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    container.appendChild(p);
  });
}


/* ---------- 4. POPULATE THE LETTERS ---------- */

function populateContent() {
  setText(
    '[data-letter="salutation"]',
    CONFIG.letter.salutation
  );

  addParagraphs(
    $('[data-letter="body"]'),
    CONFIG.letter.paragraphs
  );

  setText(
    '[data-letter="highlight"]',
    CONFIG.letter.highlight
  );

  setText(
    '[data-letter="sign"]',
    CONFIG.letter.sign
  );

  setText(
    "[data-confession-date]",
    formatDate(CONFIG.confessionDate)
  );

  setText(
    "[data-confession-story]",
    CONFIG.confession.story
  );

  setText(
    "[data-confession-quote]",
    CONFIG.confession.quote
  );

  setText(
    "[data-relationship-date]",
    formatDate(CONFIG.relationshipDate)
  );

  setText(
    "[data-relationship-story]",
    CONFIG.relationship.story
  );

  setText(
    "[data-relationship-quote]",
    CONFIG.relationship.quote
  );

  const futureLetter = $("[data-future-letter]");
  addParagraphs(futureLetter, CONFIG.future.paragraphs);

  setText("[data-future-coda]", CONFIG.future.coda);

  const closingLetter = $("[data-closing-letter]");
  addParagraphs(closingLetter, CONFIG.closing.paragraphs);

  setText("[data-closing-happy]", CONFIG.closing.happy);
  setText("[data-closing-name-1]", CONFIG.names.sender);
  setText("[data-closing-name-2]", CONFIG.names.recipient);
}


/* ---------- 5. LIVE RELATIONSHIP TIMERS ---------- */

// Calculate elapsed calendar years, months and days rather than
// dividing all elapsed time into approximate month lengths.

function getElapsedParts(startValue, now = new Date()) {
  const start = validDate(startValue);

  if (!start || now < start) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (now.getDate() < start.getDate()) {
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Find the most recent anniversary date, handling months with
  // different lengths and leap years.
  let anchor = new Date(start);
  anchor.setFullYear(start.getFullYear() + years);

  const monthAnchor = new Date(anchor);
  monthAnchor.setMonth(monthAnchor.getMonth() + months);

  // Correct JavaScript's automatic rollover for dates such as
  // the 31st when the destination month is shorter.
  function addCalendarMonthsClamped(date, amount) {
    const result = new Date(date);
    const day = result.getDate();

    result.setDate(1);
    result.setMonth(result.getMonth() + amount);

    const lastDay = new Date(
      result.getFullYear(),
      result.getMonth() + 1,
      0
    ).getDate();

    result.setDate(Math.min(day, lastDay));
    return result;
  }

  anchor = addCalendarMonthsClamped(start, years * 12 + months);

  if (anchor > now) {
    months--;
    if (months < 0) {
      years--;
      months = 11;
    }
    anchor = addCalendarMonthsClamped(start, years * 12 + months);
  }

  let remaining = Math.max(0, now.getTime() - anchor.getTime());

  const days = Math.floor(remaining / 86400000);
  remaining %= 86400000;

  const hours = Math.floor(remaining / 3600000);
  remaining %= 3600000;

  const minutes = Math.floor(remaining / 60000);
  remaining %= 60000;

  const seconds = Math.floor(remaining / 1000);

  return { years, months, days, hours, minutes, seconds };
}

function updateTimer(timerElement, startDate) {
  if (!timerElement) return;

  const parts = getElapsedParts(startDate);

  Object.entries(parts).forEach(([unit, value]) => {
    const element = $(`[data-unit="${unit}"]`, timerElement);
    if (element) element.textContent = String(value);
  });
}

function updateAllTimers() {
  updateTimer($("#confessionTimer"), CONFIG.confessionDate);
  updateTimer($("#relationshipTimer"), CONFIG.relationshipDate);
}


/* ---------- 6. AMBIENT STARS ---------- */

function createStars() {
  const container = $("#stars");
  if (!container) return;

  container.replaceChildren();

  const count = Math.min(
    110,
    Math.max(35, Math.floor(window.innerWidth / 7))
  );

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "star";

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty(
      "--dur",
      `${4 + Math.random() * 6}s`
    );
    star.style.setProperty(
      "--delay",
      `${-Math.random() * 8}s`
    );

    if (Math.random() > 0.8) {
      star.style.width = "3px";
      star.style.height = "3px";
    }

    fragment.appendChild(star);
  }

  container.appendChild(fragment);
}


/* ---------- 7. SCENE NAVIGATION ---------- */

function showScene(sceneNumber, options = {}) {
  const target = Math.min(
    totalScenes,
    Math.max(1, Number(sceneNumber) || 1)
  );

  currentScene = target;

  scenes.forEach((scene, index) => {
    const isActive = index + 1 === target;

    scene.classList.toggle("active", isActive);
    scene.setAttribute("aria-hidden", String(!isActive));

    if (isActive) {
      scene.scrollTop = 0;
    }
  });

  // Close the photo viewer if navigating to another scene.
  if (!options.keepLightbox) closeLightbox();

  // Reveal promise cards when that scene is reached.
  if (target === 7) revealPromises();

  // Update accessible page title.
  document.title =
    `${target} / ${totalScenes} — Our First Anniversary`;

  // Update timers whenever a scene becomes visible.
  updateAllTimers();
}

function nextScene() {
  if (currentScene < totalScenes) {
    showScene(currentScene + 1);
  }
}

function previousScene() {
  if (currentScene > 1) {
    showScene(currentScene - 1);
  }
}

$$("[data-nav='next']").forEach((button) => {
  button.addEventListener("click", nextScene);
});

$$("[data-nav='prev']").forEach((button) => {
  button.addEventListener("click", previousScene);
});


/* ---------- 8. MUSIC: START ONCE, KEEP PLAYING ---------- */

async function startMusicOnce() {
  if (!audio || songStarted) return;

  // Set this before awaiting play(), so rapid taps cannot start
  // multiple playback attempts.
  songStarted = true;

  audio.loop = true;
  audio.controls = false;

  try {
    await audio.play();
  } catch (error) {
    // Playback may be blocked or the file may be missing.
    // Allow another explicit tap to retry if playback never began.
    if (audio.paused) {
      songStarted = false;
      console.warn(
        "Music could not start. Check the song path and browser permissions.",
        error
      );
    }
  }
}

const openStoryButton = $("#openStoryBtn");

if (openStoryButton) {
  openStoryButton.addEventListener("click", async () => {
    const envelopeScene = $("#scene-1");

    if (envelopeScene) {
      envelopeScene.classList.add("opening");
    }

    // Playback begins only from the visitor's first interaction.
    await startMusicOnce();

    // Give the envelope animation a moment before turning the page.
    window.setTimeout(() => {
      showScene(2);
    }, 650);
  });
}

// Keep the same audio element alive across every scene.
// Do not set currentTime during navigation or restart.
if (audio) {
  audio.addEventListener("ended", () => {
    // loop=true normally handles this automatically.
    // This fallback supports browsers that dispatch ended anyway.
    if (songStarted && audio.paused) {
      audio.play().catch(() => {});
    }
  });
}

// A visibility change must not reset or recreate the audio element.
// Browsers/operating systems may still suspend playback themselves.


/* ---------- 9. TWELVE-MONTH PHOTO GALLERY ---------- */

function buildGallery() {
  const gallery = $("#gallery");
  if (!gallery) return;

  gallery.replaceChildren();

  CONFIG.memories.forEach((memory, index) => {
    const card = document.createElement("article");
    card.className = "month-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute(
      "aria-label",
      `View ${memory.month}: ${memory.caption}`
    );

    const photo = document.createElement("div");
    photo.className = "photo";

    const image = document.createElement("img");
    image.src = memory.image;
    image.alt = `${memory.month} memory`;
    image.loading = "lazy";
    image.decoding = "async";
    image.style.width = "100%";
    image.style.height = "100%";
    image.style.objectFit = "cover";

    image.addEventListener("error", () => {
      image.remove();
      photo.classList.add("placeholder");
      photo.textContent = "Your memory goes here ❤️";
    }, { once: true });

    photo.appendChild(image);

    const meta = document.createElement("div");
    meta.className = "meta";

    const month = document.createElement("span");
    month.className = "month-label";
    month.textContent = memory.month;

    const sequence = document.createElement("span");
    sequence.className = "seq";
    sequence.textContent = `${String(index + 1).padStart(2, "0")} / 12`;

    meta.append(month, sequence);

    const caption = document.createElement("p");
    caption.className = "caption";
    caption.textContent = memory.caption;

    card.append(photo, meta, caption);

    card.addEventListener("click", () => {
      openLightbox(index);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });

    gallery.appendChild(card);
  });
}


/* ---------- 10. PHOTO LIGHTBOX ---------- */

const lightbox = $("#lightbox");
const lightboxImage = $("#lbImg");
const lightboxMonth = $("#lbMonth");
const lightboxCaption = $("#lbCaption");

function renderLightboxPhoto() {
  if (!lightbox || !CONFIG.memories.length) return;

  const memory = CONFIG.memories[lightboxIndex];
  if (!memory) return;

  lightboxImage.src = memory.image;
  lightboxImage.alt = `${memory.month}: ${memory.caption}`;
  lightboxMonth.textContent = memory.month;
  lightboxCaption.textContent = memory.caption;
}

function openLightbox(index) {
  if (!lightbox || !CONFIG.memories.length) return;

  lightboxIndex =
    (index + CONFIG.memories.length) % CONFIG.memories.length;

  renderLightboxPhoto();

  lightbox.hidden = false;
  document.body.classList.add("no-scroll");

  requestAnimationFrame(() => {
    lightbox.classList.add("open");
    $("#lbClose")?.focus();
  });
}

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;

  lightbox.classList.remove("open");
  document.body.classList.remove("no-scroll");

  // Wait for the opacity transition before hiding the dialog.
  window.setTimeout(() => {
    if (!lightbox.classList.contains("open")) {
      lightbox.hidden = true;
    }
  }, 420);
}

function changeLightboxPhoto(direction) {
  if (!CONFIG.memories.length) return;

  lightboxIndex =
    (lightboxIndex + direction + CONFIG.memories.length) %
    CONFIG.memories.length;

  renderLightboxPhoto();
}

$("#lbClose")?.addEventListener("click", closeLightbox);

$("#lbPrev")?.addEventListener("click", () => {
  changeLightboxPhoto(-1);
});

$("#lbNext")?.addEventListener("click", () => {
  changeLightboxPhoto(1);
});

// Clicking the backdrop closes the photo viewer.
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});


/* ---------- 11. LITTLE THINGS CARDS ---------- */

function buildNotes() {
  const grid = $("#notesGrid");
  if (!grid) return;

  grid.replaceChildren();

  CONFIG.littleThings.forEach((note) => {
    const article = document.createElement("article");
    article.className = "note";

    const heading = document.createElement("h3");
    heading.textContent = note.title;

    const paragraph = document.createElement("p");
    paragraph.textContent = note.text;

    article.append(heading, paragraph);
    grid.appendChild(article);
  });
}


/* ---------- 12. PROMISES WITH REVEAL ANIMATION ---------- */

function buildPromises() {
  const list = $("#promisesList");
  if (!list) return;

  list.replaceChildren();

  CONFIG.promises.forEach((promise) => {
    const item = document.createElement("li");
    item.textContent = promise;
    list.appendChild(item);
  });
}

function revealPromises() {
  const items = $$("#promisesList li");

  items.forEach((item, index) => {
    window.setTimeout(() => {
      item.classList.add("reveal");
    }, index * 160);
  });
}


/* ---------- 13. RESTART THE EXPERIENCE ---------- */

// Restart the visual story without restarting the song.
// Music continues from its current position.
$("#restartBtn")?.addEventListener("click", () => {
  closeLightbox();

  const envelopeScene = $("#scene-1");
  if (envelopeScene) {
    envelopeScene.classList.remove("opening");
  }

  $$("#promisesList li").forEach((item) => {
    item.classList.remove("reveal");
  });

  showScene(1);
});


/* ---------- 14. KEYBOARD NAVIGATION ---------- */

document.addEventListener("keydown", (event) => {
  if (lightbox && !lightbox.hidden) {
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      changeLightboxPhoto(-1);
    } else if (event.key === "ArrowRight") {
      changeLightboxPhoto(1);
    }
    return;
  }

  // Do not interfere with text entry.
  if (
    ["INPUT", "TEXTAREA", "SELECT"].includes(
      document.activeElement?.tagName
    )
  ) {
    return;
  }

  if (event.key === "ArrowRight") nextScene();
  if (event.key === "ArrowLeft") previousScene();
});


/* ---------- 15. MOBILE SWIPE NAVIGATION ---------- */

let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", (event) => {
  if (!event.changedTouches.length) return;

  touchStartX = event.changedTouches[0].clientX;
  touchStartY = event.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  if (!event.changedTouches.length) return;
  if (lightbox && !lightbox.hidden) return;

  const touchEndX = event.changedTouches[0].clientX;
  const touchEndY = event.changedTouches[0].clientY;

  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;

  // Only treat a clearly horizontal gesture as a page swipe.
  // Vertical swipes remain available for scrolling long scenes.
  if (
    Math.abs(deltaX) > 90 &&
    Math.abs(deltaX) > Math.abs(deltaY) * 1.4
  ) {
    if (deltaX < 0) nextScene();
    else previousScene();
  }
}, { passive: true });


/* ---------- 16. INITIALIZE THE WEBSITE ---------- */

function initializeWebsite() {
  populateContent();
  buildGallery();
  buildNotes();
  buildPromises();
  createStars();

  // Show the opening envelope and hide all other scenes.
  showScene(1);

  updateAllTimers();

  // Update the clocks every second without recreating any scene.
  timerInterval = window.setInterval(updateAllTimers, 1000);
}

initializeWebsite();

// Recreate the ambient stars when screen dimensions change.
let resizeTimeout;

window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimeout);

  resizeTimeout = window.setTimeout(() => {
    createStars();
  }, 200);
});

// Respect reduced-motion preferences for the JavaScript animations.
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("reduce-motion");
}
