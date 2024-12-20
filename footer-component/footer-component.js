class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="row footer-component mt-5">
        <div class="col-12 col-sm-6 col-lg-6 f-400 footer-left-side d-flex flex-column justify-content-between">
            <div>
                <img src="../images/thumbnail.svg" height="40" />
            </div>
            <div class="footer-left">
                Let’s Collaborate!
            </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-6 f-400 footer-right-side">
            <div class="row">
                <div class="col-12 col-xl-3">
                    <div class="d-flex flex-column">
                        <span>Pages</span>
                        <span>
                            <a href="/index.html"> Home</a>
                        </span>
                        <span>
                            <a href="../case-study/case-study.html"> Work</a>
                        </span>
                        <span>
                            <a href="../work/work.html"> What we do</a>
                        </span>
                    </div>
                </div>
                <div class="col-12 col-xl-4">
                    <div class="d-flex flex-column">
                        <span>Services</span>
                        <span>
                            <a href="../work/work.html">Product Design</a>
                        </span>
                        <span>
                            <a href="../work/work.html">UX Design</a>
                        </span>
                        <span>
                            <a href="../work/work.html">UI Design</a>
                        </span>
                        <span>
                            <a href="../work/work.html">Wireframing & Prototyping</a>
                        </span>
                        <span>
                            <a href="../work/work.html">Brand design</a>
                        </span>
                    </div>
                </div>
                <div class="col-12 col-xl-5">
                    <div class="d-flex flex-column">
                    <span>Contact</span>
                        <a href="tel:+919173877067">
                            <img src="../images/down-right-arrow-black.svg" height="20px" />
                            +91 91738 77067
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&to=pavan@woblio.com&su=Hello&body=I%20would%20like%20to%20know%20more">
                            <img src="../images/down-right-arrow-black.svg" height="20px" />
                            pavan@woblio.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      `;
  }
}

customElements.define("footer-component", Footer);
