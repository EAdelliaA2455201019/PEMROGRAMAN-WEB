// ===== SLIDER =====
const slides = document.querySelectorAll('.slide');
let slideIndex = 0;

function nextSlide() {
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}

setInterval(nextSlide, 4000);

// ===== NAV SCROLL =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== MOBILE MENU =====
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
    nav.classList.remove("show");
  }
});

// ===== SEARCH FUNCTIONALITY =====
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('#destinasiGrid .card');
const viewAllBtn = document.getElementById('viewAllBtn');

const searchKuliner = document.getElementById('searchKuliner');
const kulinerCards = document.querySelectorAll('#kulinerGrid .card');
const viewAllKulinerBtn = document.getElementById('viewAllKulinerBtn');

const allowed = [
  "blitar",
  "pantai serang", "pantai tambakrejo", "pantai pangi", "pantai peh pulo",
  "pantai jolosutro", "pantai gondo mayit", "pantai pasetran gondomayit",
  "pantai gayasan", "pantai bukit indah", "pantai banteng mati", "pantai pudak",
  "pantai serit", "pantai jebring", "pantai sumur gemuling", "pantai umbuk",
  "pantai tambak sari", "pantai wedi ireng", "pantai sine", "pantai goren",
  "pantai pacenan", "pantai tumpak kepuh",
  "candi penataran", "candi palah", "candi sawentar", "candi simping",
  "candi bacem", "candi gambar wetan",
  "makam bung karno", "museum bung karno", "museum penataran",
  "istana gebang", "perpustakaan bung karno",
  "monumen peta", "monumen trisula",
  "gunung kelud", "sirah kencong", "kebun teh sirah kencong",
  "perkebunan teh sirah kencong", "rambut monte", "hutan pinus gogoniti",
  "taman cinta gogoniti", "taman ayu gogoniti", "puncak sekawan",
  "puncak langit tunggorono", "air terjun tirto galuh", "air terjun lahar",
  "air terjun grojogan sewu", "air terjun jurug", "air terjun kandang",
  "sumber bon", "sumur amber", "kali ganter", "kesambi trees park",
  "songgo langit camping ground", "pendakian gunung butak",
  "gunung butak via sirah kencong",
  "waduk jegu", "bendungan jegu", "waduk wonorejo", "waduk wlingi",
  "bendungan wlingi", "sumber udel", "sumber kali maron", "sumberasri",
  "kampung coklat", "blitar park", "wahana blitar park", "blitar fantasy world",
  "fish garden", "kali gajah waterpark", "kolam renang penataran",
  "kebun rojo", "kebon rojo", "taman pecut", "alun alun blitar",
  "aloon aloon blitar", "agrowisata belimbing", "istana sakura",
  "de karanganjar koffieplantage", "karanganjar", "kampung 1001",
  "wisata kampung 1001", "jati park", "taman wisata bendungan wlingi",
  "masjid ar rahman", "masjid ar rahman blitar", "gereja pohsarang",
  "candi pohsarang", "kebon sari", "desa semen", "desa wisata",
  "konservasi ikan badher bang", "gua jedog", "goa jedog",
  "goa luweng prodo", "jurug goa luweng prodo", "rumah joglo",
  "terminal patria", "stasiun blitar",
  "pantai", "candi", "gunung", "air terjun", "kebun teh", "wisata",
  "taman", "museum", "makam", "goa", "waduk", "bendungan", "camping", "kolam renang"
];

const kulinerAllowed = [
  "es pleret","rawon","getuk pisang","bakso","tahu lontong", "bakso blitar", "sate kambing blitar", "nasi pecel blitar", "ayam lodho blitar",
  "rawon blitar", "soto daging blitar", "nasi ampok blitar",
  "tahu bumbu lawu blitar", "rujak cingur blitar", "sego uceng blitar",
  "getuk pisang blitar", "jenang blitar", "wajik kletik blitar",
  "geti blitar", "opak gambir blitar", "peyek uceng blitar",
  "keripik tempe blitar", "es pleret blitar", "es drop blitar",
  "kopi blitar", "susu jahe blitar", "kuliner blitar",
  "makanan khas blitar", "jajanan blitar"
];

searchInput.addEventListener('keyup', function(e) {
  const filter = searchInput.value.toLowerCase().trim();
  let found = false;

  viewAllBtn.style.display = (filter !== "") ? "none" : "inline-block";

  cards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();

    if (title.includes(filter)) {
      card.style.display = "flex";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  if (filter === "") {
    cards.forEach(card => {
      card.style.display = "flex";
    });
  }

  if (e.key === "Enter" && filter !== "" && !found) {
    if (allowed.some(k => filter.includes(k))) {
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(filter)}+Blitar`, "_blank");
    } else {
      alert("Wisata tidak tersedia di database Blitar");
    }
  }
});

searchKuliner.addEventListener('keyup', function(e) {
  const filter = searchKuliner.value.toLowerCase().trim();
  let found = false;

  kulinerCards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();

    if (title.includes(filter)) {
      card.style.display = "flex";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  if (filter === "") {
    kulinerCards.forEach(card => {
      card.style.display = "flex";
    });
  }

  if (e.key === "Enter" && filter !== "" && !found) {
    if (kulinerAllowed.some(k => filter.includes(k))) {
      window.open(`https://www.google.com/maps/search/${encodeURIComponent(filter)}+Blitar+kuliner`, "_blank");
    } else {
      alert("Kuliner tidak tersedia di database Blitar");
    }
  }
});

viewAllBtn.addEventListener("click", () => {
  window.open("https://www.google.com/maps/search/tourist+attractions+in+Blitar", "_blank");
});

viewAllKulinerBtn.addEventListener("click", () => {
  window.open("https://www.google.com/maps/search/kuliner+di+Blitar", "_blank");
});

window.addEventListener("scroll", () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
});

const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const icon = darkToggle.querySelector('.icon');
  const label = darkToggle.querySelector('.label');

  if (document.body.classList.contains("dark")) {
    icon.textContent = "☀️";
    label.textContent = "Light Mode";
  } else {
    icon.textContent = "🌙";
    label.textContent = "Dark Mode";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(el => observer.observe(el));
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.5s ease";
    
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 800);
});