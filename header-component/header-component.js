class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="header-component row f-300">
        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6">
            <a href="../index.html">
                <img src="../images/thumbnail.svg" height="48" />
            </a>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex justify-content-end">
            <div class="row">
                <div class="col-12 col-xl-6 col-lg-6 col-md-12" style="width: fit-content;">
                    <span class="header-navigation">
                        <a href="../case-study/">
                            <img src="../images/down-right-arrow-black.svg" />
                            Work
                        </a>
                    </span>
                </div>
                <div class="col-12 col-xl-6 col-lg-6 col-md-12" style="width: fit-content;">
                    <span class="header-navigation">
                        <a href="../work/">
                            <img src="../images/down-right-arrow-black.svg" />
                            What we do
                        </a>
                    </span>
                </div>
                <div class="col-12 col-xl-6 col-lg-6 col-md-12" style="width: fit-content;">
                    <span class="f-300 header-navigation contact-button">
                        <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__k6uye5UQzVBTjhJSVNPVURPS0c1WUpBNlNOOEpMQS4u" target="_blank">
                            <img src="../images/down-right-arrow-black.svg" />
                            Contact
                        </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
      `;
  }
}

customElements.define("header-component", Header);
