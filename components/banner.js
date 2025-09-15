(() => {
  const template = ({ title, descHtml, sectionClass = "" }) => `
    <section class="page-banner background ${sectionClass}">
      <div class="page-banner__inner container--md container">
        <div class="page-banner__content">
          <h2 class="page-banner__title font-teko">${title}</h2>
          <p class="page-banner__desc">
           ${descHtml}
          </p>
        </div>
      </div>
    </section>`;

  class PageBanner extends HTMLElement {
    static get observedAttributes() {
      return ["title", "desc", "section-class"];
    }

    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }

    render() {
      const title = this.getAttribute("title") || "";
      const desc = this.getAttribute("desc") || "";
      const descHtml = desc.replace(/\\n|\n/g, "<br>");
      const sectionClass = this.getAttribute("section-class") || "";
      this.innerHTML = template({ title, descHtml, sectionClass });
    }
  }

  customElements.define("page-banner", PageBanner);
})();
