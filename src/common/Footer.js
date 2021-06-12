export function Footer() {
  return (
    <div Class="footer-section" id="footer-control">
      <div Class="container">
        <div Class="row">
          <div Class="col-lg-4 col-md-6 col-12 footer-div">
            <div>
              <h3>ABOUT ABCBANK</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div Class="col-lg-4 col-md-6 col-12 footer-div text-center">
            <div>
              <h3>NAVIGATIONl LINK</h3>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">LAD</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              <li>
                <a href="#">ADMIN</a>
              </li>
            </div>
          </div>

          <div Class="col-lg-4 col-md-12 col-12 footer-div">
            <div>
              <h3>NEWS LETTER</h3>
              <p>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div Class="container newsletter-main">
              <div Class="row">
                <div Class="col-lg-12 col-12">
                  <div Class="input-group mb-3">
                    <input
                      type="text"
                      Class="form-control news-input"
                      placeholder="Your Email"
                    />
                    <div Class="input-group-append">
                      <span Class="input-group-text">Subscribe</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div Class="mt-5 text-center">
          <p>
            Copyright @2020 All right reserved | This template made with love by
            ABCBANK
          </p>
        </div>

        <div Class="scrolltop float-right">
          <i Class="fa fa-arrow-up" onClick="topFunction()" id="my-btn"></i>
        </div>
      </div>
    </div>
  );
}
