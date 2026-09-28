/* Jocelyn High School - links.js
   Builds the navigation menu and footer links on every page.
   Keep this file in the SAME folder as all the .html files. */
(function () {
  var pages = [
    { file: "index.html", label: "Home" },
    { file: "about.html", label: "About" },
    { file: "academics.html", label: "Academics" },
    { file: "admissions.html", label: "Admissions" },
    { file: "students.html", label: "Student Life" },
    { file: "news.html", label: "News" },
    { file: "gallery.html", label: "Gallery" },
    { file: "contact.html", label: "Contact" }
  ];

  // Work out which page we are on (GitHub Pages may show just "/repo/")
  var current = location.pathname.split("/").pop();
  if (!current) current = "index.html";

  // Top menu
  var nav = document.querySelector("header nav");
  if (nav) {
    nav.innerHTML = "";
    pages.forEach(function (p) {
      var a = document.createElement("a");
      a.href = p.file;
      a.textContent = p.label;
      if (p.file === current) a.className = "active";
      nav.appendChild(a);
    });
  }

  // Logo goes to Home
  var brand = document.querySelector("header .brand");
  if (brand) brand.setAttribute("href", "index.html");

  // Footer quick links
  var quick = document.querySelector("footer .foot-grid > div:nth-child(2)");
  if (quick) {
    quick.innerHTML = "<h3>Quick Links</h3>";
    pages.slice(1).forEach(function (p) {
      var a = document.createElement("a");
      a.href = p.file;
      a.textContent = p.label;
      quick.appendChild(a);
    });
  }
})();
