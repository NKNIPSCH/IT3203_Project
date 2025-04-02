// menu.js
// Adds site-wide menu to #menu element (the HTML element on each page)
// this makes updating nav way easier and saves tyme ;)
document.addEventListener("DOMContentLoaded", () => {
    const menu = `
      <nav class="sidebar">
        <h3 class="sidebar-title">Menu</h3>
        <a href="index.html" class="sidebar-item button">Home</a>
        <a href="android.html" class="sidebar-item button">Android</a>
        <a href="googleapps.html" class="sidebar-item button">Google Apps</a>
        <a href="browser.html" class="sidebar-item button">Browser</a>
        <a href="search.html" class="sidebar-item button">Search</a>
        <a href="references.html" class="sidebar-item button">References</a>
        <a href="quiz.html" class="sidebar-item button">Quiz</a>
      </nav>
    `;
    document.getElementById("menu").innerHTML = menu;
  });