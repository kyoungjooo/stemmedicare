(() => {
  const template = `
 <footer class="footer">
      <div class="footer__inner">
        <ul class="footer__nav">
          <li class="footer__nav-item">
            <a href="/">Who We are</a>
          </li>
          <li class="footer__nav-item"><a href="/">What We Do</a></li>
          <li class="footer__nav-item"><a href="/">Core Technology</a></li>
          <li class="footer__nav-item"><a href="/">Pipelines</a></li>
          <li class="footer__nav-item"><a href="/">Achievements</a></li>
          <li class="footer__nav-item"><a href="/">Contact Us</a></li>
        </ul>
        <div class="footer__contents container--xl container">
          <div class="footer__contents-aside">
            <p>
              REALIZING A HEALTHY LIFE,<br> THE ETERNAL ASPIRATION OF
              HUMANKIND.
            </p>
            <div class="footer__info">
              <div class="footer__name font-poppins">STEMMedicare</div>

              <div class="footer__info-brand">
                <address class="footer__address">
                  3F, Chung Song Bldg, 605, Samseong-ro, Gangnam-gu, Seoul,
                  Korea
                </address>
                <div class="footer__contact">
                  <div class="footer__contact-item">
                    <span class="footer__contact-label">TEL</span>
                    <span class="footer__contact-number">+82-2-547-1030</span>
                  </div>
                  <div class="footer__contact-item">
                    <span class="footer__contact-label">FAX</span>
                    <span class="footer__contact-number">+82-2-547-1033</span>
                  </div>
                </div>
              </div>

              <div class="footer__copyright">
                COPYRIGHT© STEMMedicare.All RIGHT RESERVED.
              </div>
            </div>
          </div>
          <h2 class="footer__logo background"></h2>
        </div>
      </div>
    </footer>
`;

  class SiteFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = template;
    }
  }
  customElements.define("site-footer", SiteFooter);
})();
