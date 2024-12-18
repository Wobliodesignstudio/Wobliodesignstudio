class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="header-component row f-300">
        <div class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-4">
            <div class="row d-flex">
                <div class="col-12 col-xl-6 col-lg-6" style="width: fit-content;">
                    <span class="header-navigation">
                        <a href="../case-study/case-study.html">
                            <img src="../images/down-right-arrow-black.svg" />
                            Work
                        </a>
                    </span>
                </div>
                <div class="col-12 col-xl-6 col-lg-6" style="width: fit-content;">
                    <span class="header-navigation">
                        <a href="../work/work.html">
                            <img src="../images/down-right-arrow-black.svg" />
                            What we do
                        </a>
                    </span>
                </div>
            </div>
        </div>
        <div class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center">
            <a href="../index.html">
                <img src="../images/thumbnail.svg" height="48" />
            </a>
        </div>
        <div class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-4 text-end">
            <img src="../images/down-right-arrow-black.svg" />
            Contact
        </div>
    </div>
      `;
  }
}

customElements.define("header-component", Header);
