document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  navbar.innerHTML = `
<header id="mainNavbar"
  class="fixed top-0 left-0 w-full z-50 bg-[#F8FAFC] text-[#1E293B] shadow-[0_4px_12px_rgba(15,23,42,0.15)] transition-all duration-300">

  <div class="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

    <h1 class="text-2xl font-black text-[#0F172A]">
      <a href="index.html" class="flex items-center gap-2 group">
        <i class="bi bi-wrench-adjustable-circle text-[#F97316] transition-transform group-hover:rotate-12 duration-300"></i>
        <span class="tracking-wider uppercase">MOTO<span class="text-[#F97316]">MEDIC</span></span>
      </a>
    </h1>

    <div id="centerLinksWrapper" class="hidden lg:flex flex-1 justify-center">
      <ul class="flex items-center lg:gap-5 xl:gap-8 font-semibold text-xs uppercase tracking-wider" id="navLinks">

        <li class="relative">
          <button id="homeDropdownBtn"
            class="flex items-center gap-1 transition hover:text-[#F97316]">
            HOME <i class="bi bi-chevron-down text-xs"></i>
          </button>

          <ul id="homeDropdownMenu"
            class="absolute left-0 mt-3 w-44 bg-white text-[#0F172A] rounded-xl shadow-xl hidden z-50 border border-[#E2E8F0]">
            <li>
              <a href="index.html" class="block px-4 py-2 rounded-t-xl transition hover:bg-[#F1F5F9]">HOME 1</a>
            </li>
            <li>
              <a href="home2.html" class="block px-4 py-2 rounded-b-xl transition hover:bg-[#F1F5F9]">HOME 2</a>
            </li>
          </ul>
        </li>

        <li><a href="about.html" class="transition hover:text-[#F97316]">About</a></li>
        <li><a href="packages.html" class="transition hover:text-[#F97316]">Packages</a></li>
        <li><a href="tires.html" class="transition hover:text-[#F97316]">Tires</a></li>
        <li><a href="zone.html" class="transition hover:text-[#F97316]">Zones</a></li>
        <li><a href="restorations.html" class="transition hover:text-[#F97316]">Restorations</a></li>
        <li><a href="contact.html" class="transition hover:text-[#F97316]">Contact</a></li>
      </ul>
    </div>

    <div id="rightButtons" class="hidden lg:flex items-center lg:gap-3 xl:gap-5">

      <button id="theme-toggle" class="text-xl hover:text-[#F97316] transition">
        <i class="bi bi-moon-fill"></i>
      </button>

      <button id="rtlToggle" class="text-2xl hover:text-[#F97316] transition">
        ⇄
      </button>

      <div class="flex items-center gap-3 ml-1">
        <a href="login.html" 
           class="lg:px-4 lg:py-2 xl:px-5 xl:py-2 rounded-lg border border-[#1E293B] font-bold text-xs uppercase tracking-wider transition hover:bg-[#1E293B] hover:text-white">
           Login
        </a>
        <a href="Sign.html" 
           class="lg:px-4 lg:py-2 xl:px-5 xl:py-2 rounded-lg bg-[#F97316] text-white font-bold text-xs uppercase tracking-wider transition hover:bg-[#EA580C] shadow-md shadow-orange-500/20">
          Sign Up
        </a>
      </div>
      
      <button id="profileBtn" class="hidden"></button>
      <ul id="profileMenu" class="hidden"></ul>
    </div>

    <button id="hamburgerBtn"
      class="lg:hidden text-3xl text-[#1E293B] hover:text-[#F97316] transition">
      <i class="bi bi-list"></i>
    </button>

  </div>
</header>

<div id="mobileMenuOverlay"
  class="fixed inset-0 bg-[#0F172A] bg-opacity-50 hidden lg:hidden z-40"></div>

<div id="mobileMenu"
  class="fixed top-0 right-0 h-full w-72 bg-[#0F172A] text-[#F8FAFC] z-50
         transform translate-x-full transition-transform duration-300 lg:hidden shadow-2xl">

  <div class="flex items-center justify-between p-5 border-b border-[#1E293B]">
    <h2 class="text-lg font-bold uppercase tracking-widest text-[#F8FAFC]">Menu</h2>
    <button id="closeMenuBtn" class="text-3xl hover:text-[#F97316] transition">
      <i class="bi bi-x-lg"></i>
    </button>
  </div>

  <div class="p-6 overflow-y-auto h-full">
    <ul class="space-y-4 font-medium uppercase tracking-wide text-sm">
      <li>
        <button id="mobileDropdownBtn"
          class="w-full flex items-center justify-between py-2 hover:text-[#F97316] transition">
          <span>HOME</span>
          <i id="mobileHomeChevron" class="bi bi-chevron-down transition-transform duration-300"></i>
        </button>
        <ul id="mobileDropdownMenu" class="hidden mt-2 ml-4 space-y-2 normal-case tracking-normal">
          <li><a href="index.html" class="block py-1 text-gray-400 hover:text-white">HOME 1</a></li>
          <li><a href="home2.html" class="block py-1 text-gray-400 hover:text-white">HOME 2</a></li>
        </ul>
      </li>

      <li><a href="about.html" class="block py-2 hover:text-[#F97316] transition">About</a></li>
      <li><a href="packages.html" class="block py-2 hover:text-[#F97316] transition">Packages</a></li>
      <li><a href="tires.html" class="block py-2 hover:text-[#F97316] transition">Tires</a></li>
      <li><a href="zone.html" class="block py-2 hover:text-[#F97316] transition">Zones</a></li>
      <li><a href="restorations.html" class="block py-2 hover:text-[#F97316] transition">Restorations</a></li>
      <li><a href="contact.html" class="block py-2 hover:text-[#F97316] transition">Contact</a></li>

      <li class="pt-4 space-y-3">
         <a href="login.html" class="block w-full text-center py-2.5 border border-[#F8FAFC] rounded-lg font-bold text-xs">Login</a>
         <a href="Sign.html" class="block w-full text-center py-2.5 bg-[#F97316] text-white rounded-lg font-black text-xs shadow-lg shadow-orange-600/30">Sign Up</a>
      </li>

      <li class="pt-6 border-t border-[#1E293B] flex justify-around">
        <button id="mobile-theme-toggle" class="text-2xl hover:text-[#F97316] transition">
          <i class="bi bi-moon-fill"></i>
        </button>
        <button id="mobile-rtl-toggle" class="text-2xl hover:text-[#F97316] transition">
          ⇄
        </button>
        <button id="mobileProfileBtn" class="hidden"></button>
        <ul id="mobileProfileMenu" class="hidden"></ul>
      </li>
    </ul>
  </div>
</div>
`;

  // Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const body = document.body;

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.toggle('active');
    body.classList.toggle('mobile-menu-open');
    if (!mobileMenu.classList.contains('active')) {
      mobileDropdownMenu.classList.remove('show');
    }
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);
  closeMenuBtn.addEventListener('click', toggleMobileMenu);
  mobileMenuOverlay.addEventListener('click', toggleMobileMenu);

  const mobileLinks = mobileMenu.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });

  const mobileDropdownBtn = document.getElementById('mobileDropdownBtn');
  const mobileDropdownMenu = document.getElementById('mobileDropdownMenu');

  if (mobileDropdownBtn) {
    mobileDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDropdownMenu.classList.toggle('show');
    });
  }

  document.addEventListener('click', (e) => {
    if (mobileDropdownBtn && mobileDropdownMenu &&
      !mobileDropdownBtn.contains(e.target) &&
      !mobileDropdownMenu.contains(e.target)) {
      mobileDropdownMenu.classList.remove('show');
    }
  });

  const homeDropdownBtn = document.getElementById('homeDropdownBtn');
  const homeDropdownMenu = document.getElementById('homeDropdownMenu');

  if (homeDropdownBtn) {
    homeDropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      homeDropdownMenu.classList.toggle('hidden');
    });

    document.addEventListener('click', (e) => {
      if (!homeDropdownBtn.contains(e.target) && !homeDropdownMenu.contains(e.target)) {
        homeDropdownMenu.classList.add('hidden');
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1023) {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      body.classList.remove('mobile-menu-open');
      if (mobileDropdownMenu) {
        mobileDropdownMenu.classList.remove('show');
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (mobileDropdownMenu) mobileDropdownMenu.classList.remove('show');
      if (homeDropdownMenu) homeDropdownMenu.classList.add('hidden');
      if (window.innerWidth <= 1023 && mobileMenu.classList.contains('active')) {
        toggleMobileMenu();
      }
    }
  });

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        if (body.classList.contains('mobile-menu-open')) {
          document.documentElement.style.overflow = 'hidden';
        } else {
          document.documentElement.style.overflow = '';
        }
      }
    });
  });

  observer.observe(body, { attributes: true });

  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    toggleBtn.innerHTML = savedTheme === "dark"
      ? `<i class="bi bi-brightness-high-fill"></i>`
      : `<i class="bi bi-moon-fill"></i>`;
  }

  toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  const rtlToggle = document.getElementById("rtlToggle");
  rtlToggle.onclick = () => {
    const html = document.documentElement;
    html.getAttribute("dir") === "rtl" ? html.setAttribute("dir", "ltr") : html.setAttribute("dir", "rtl");
  };

  const currentPath = window.location.pathname.split("/").pop();
  const allNavLinks = document.querySelectorAll('#navLinks > li > a, #mobileMenu > ul > li > a');

  allNavLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) link.classList.add("nav-active");
  });

  if (currentPath === "index.html" || currentPath === "home2.html") {
    document.getElementById("homeDropdownBtn")?.classList.add("home-active");
    document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#navLinks a").forEach(link => {
    if (link.getAttribute("href") === currentPage) link.classList.add("nav-active");
  });

  document.querySelectorAll("#mobileMenu a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("nav-active");
      if (link.closest("#mobileDropdownMenu")) {
        document.getElementById("mobileDropdownMenu")?.classList.add("show");
        document.getElementById("mobileDropdownBtn")?.classList.add("home-active");
      }
    }
  });

  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");
  if (profileBtn && profileMenu) {
    profileBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      document.getElementById("homeDropdownMenu")?.classList.add("hidden");
      profileMenu.classList.toggle("hidden");
    });
    document.addEventListener("click", (e) => {
      if (!profileBtn.contains(e.target) && !profileMenu.contains(e.target)) profileMenu.classList.add("hidden");
    });
  }

  const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
  mobileThemeToggle?.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      mobileThemeToggle.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      mobileThemeToggle.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
  });

  const mobileRtlToggle = document.getElementById("mobile-rtl-toggle");
  mobileRtlToggle?.addEventListener("click", () => {
    const html = document.documentElement;
    html.getAttribute("dir") === "rtl" ? html.setAttribute("dir", "ltr") : html.setAttribute("dir", "rtl");
  });

  const mobileProfileBtn = document.getElementById("mobileProfileBtn");
  const mobileProfileMenu = document.getElementById("mobileProfileMenu");
  mobileProfileBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileProfileMenu.classList.toggle("hidden");
  });
});