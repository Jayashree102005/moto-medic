document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="bg-[#F8FAFC] text-[#1E293B] w-full border-t border-[#E2E8F0]">

  <div class="max-w-7xl mx-auto px-6 py-14">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

      <!-- Brand Info Column -->
      <div>
        <h1 class="text-2xl font-black text-[#0F172A]">
          <a href="index.html" class="flex items-center gap-2 group transition">
            <i class="bi bi-wrench-adjustable-circle text-[#F97316] transition-transform group-hover:rotate-12 duration-300"></i>
            <span class="tracking-wider uppercase">MOTO<span class="text-[#F97316]">MEDIC</span></span>
          </a>
        </h1>
        <p class="mt-4 text-[#475569] text-sm leading-relaxed font-medium">
          Professional, on-demand mobile motorcycle maintenance and repairs. We bring garage-grade service directly to your doorstep, keeping your ride safe and your engine roaring.
        </p>

        <div class="flex gap-4 mt-6 text-xl">
          <a href="#" class="text-[#475569] hover:text-[#F97316] transition"><i class="bi bi-instagram"></i></a>
          <a href="#" class="text-[#475569] hover:text-[#F97316] transition"><i class="bi bi-youtube"></i></a>
          <a href="#" class="text-[#475569] hover:text-[#F97316] transition"><i class="bi bi-facebook"></i></a>
          <a href="#" class="text-[#475569] hover:text-[#F97316] transition"><i class="bi bi-twitter-x"></i></a>
        </div>
      </div>

      <!-- Services List Column -->
      <div>
        <h3 class="text-xs font-bold mb-4 text-[#0F172A] uppercase tracking-widest">
          Our Services
        </h3>
        <ul class="space-y-2 text-[#475569] text-sm font-semibold">
          <li><a href="packages.html" class="hover:text-[#F97316] transition">General Tuning</a></li>
          <li><a href="packages.html" class="hover:text-[#F97316] transition">Brake & Oil Service</a></li>
          <li><a href="tires.html" class="hover:text-[#F97316] transition">Tire Replacement</a></li>
          <li><a href="gallery.html" class="hover:text-[#F97316] transition">Vintage Restorations</a></li>
        </ul>
      </div>

      <!-- Quick Navigation Column -->
      <div>
        <h3 class="text-xs font-bold mb-4 text-[#0F172A] uppercase tracking-widest">
          Quick Links
        </h3>
        <ul class="space-y-2 text-[#475569] text-sm font-semibold">
          <li><a href="about.html" class="hover:text-[#F97316] transition">About Us</a></li>
          <li><a href="packages.html" class="hover:text-[#F97316] transition">Packages</a></li>
          <li><a href="zone.html" class="hover:text-[#F97316] transition">Service Zones</a></li>
          <li><a href="contact.html" class="hover:text-[#F97316] transition">Contact Support</a></li>
        </ul>
      </div>

      <!-- Emergency/Contact Details Column -->
      <div>
        <h3 class="text-xs font-bold mb-4 text-[#0F172A] uppercase tracking-widest">
          Get In Touch
        </h3>

        <ul class="space-y-3 text-[#475569] text-sm font-semibold">
          <li class="flex items-start gap-2">
            <i class="bi bi-geo-alt-fill text-[#F97316] mt-0.5"></i>
            <span>Hosur & Surrounding Zones,<br>Tamil Nadu, India</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-telephone-fill text-[#F97316]"></i>
            <span>+91 98765 43210</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="bi bi-envelope-fill text-[#F97316]"></i>
            <span>support@motomedic.in</span>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <!-- Copyright Sub-Footer Bar -->
  <div class="footer border-t border-[#E2E8F0] py-6 text-center text-[#64748B] text-xs px-4 bg-[#F1F5F9] font-bold">
    <p class="tracking-widest uppercase">
      © ${new Date().getFullYear()} MotoMedic Mechanical Services. All Rights Reserved.
    </p>
  </div>

</footer>
`;
});