import React from "react";
import "./style.css";
import logo from "./logo.png";
const FooterComponent = ({ data }) => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="footer-widget ">
                <h3 style={{ color: "#40465a" }}>Saudi Bank Limited</h3>
                <div class="footer-widget-content">
                  <a
                    href="mailto:sales@example.com"
                    class="contact-link"
                    style={{ textDecoration: "none" }}
                  >
                    saudicentralbank-gov.com
                  </a>
                  <a
                    href="mailto:support@example.com"
                    class="contact-link "
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    adeel.ahmed0678@gmail.com{" "}
                  </a>
                  <a href="tel:0121234" class="contact-link">
                    (+966) 58 368 4692
                  </a>
                </div>
                <img
                  width={150}
                  height={150}
                  style={{ borderRadius: "100px" }}
                  src={logo}
                  className="mt-4 shadow"
                  alt="footer image"
                />
              </div>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-3">
              <div class="footer-widget">
                <h3 style={{ color: "#dda43b" }}>{data.footer1}</h3>
                <div class="footer-widget-content">
                  <div class="media">
                    <div class="media-left">
                      <a href="#">
                        <img
                          class="media-object"
                          src="http://placehold.it/60x60"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="media-body">
                      <p>
                        <a href="#">vulputate velit esse consequat. </a>
                      </p>
                      <span>September 30, 2024 </span>
                    </div>
                  </div>
                  <div class="media">
                    <div class="media-left">
                      <a href="#.">
                        <img
                          class="media-object"
                          src="http://placehold.it/60x60"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div class="media-body">
                      <p>
                        <a href="#">vulputate velit esse consequat. </a>
                      </p>
                      <span>September 30, 2025 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="footer-widget">
                <h3 style={{ color: "#dda43b" }}>{data.footer2}</h3>
                <div class="footer-widget-content">
                  <div class="open-time ">
                    <h5>{data.footerDis}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-1"></div>
          </div>
        </div>
        {/* <small className="text-center mt-3" style={{ color: "#40465a" }}>
          Saudi Bank Limited © 2023
        </small> */}
      </footer>
    </>
  );
};
export default FooterComponent;
