(() => {
  const template = `
<header class="header header--sticky">
  <div class="header__inner container--xl container">
    <a href="./index.html" class="header__logo background"><h1 class="hidden">logo</h1></a>
    <nav class="header__nav" aria-label="Main">
      <a href="./core-overview.html" class="header__link">Who We are</a>
      <a href="./core-overview.html" class="header__link">What We Do</a>
      <a href="./core-overview.html" class="header__link">Core Technology</a>
      <a href="./core-overview.html" class="header__link">Pipelines</a>
      <a href="./core-overview.html" class="header__link">Achievements</a>
      <a href="./core-overview.html" class="header__link">Contact Us</a>
    </nav>
  </div>
</header>`;

  class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = template;
    }
  }
  customElements.define("site-header", SiteHeader);
})();
