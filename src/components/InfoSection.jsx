import React from 'react'
import infoImg from "../assets/info-img.png";
import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";

function InfoSection() {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="info-content mt-md-5 pt-md-5">
                <h3 className="info-head">
                  Use Your Android or ios Device <br className="d-md-block d-none" />to Manage Everything
                </h3>
                <div className="row mt-5 mb-3">
                  <div className="col-lg-2 col-3 ">
                    <div className="info-card bg-white p-2 d-flex justify-content-center rounded shadow">
                      <img src={icon1} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-9 pl-0">
                    <div className="info-para">
                      <p>Proactively syndicate open-source e-markets after low-risk high-yield
                                    synergy. Professionally
                                    simplify visionary technology.</p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-2 col-3 ">
                    <div className="info-card bg-white p-2 d-flex justify-content-center rounded shadow">
                      <img src={icon2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-9 pl-0">
                    <div className="info-para">
                      <p>Intrinsicly aggregate cutting-edge internal or "organic" sources through pandemic manufactured products. Synergistically.</p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-2 col-3 ">
                    <div className="info-card bg-white p-2 d-flex justify-content-center rounded shadow">
                      <img src={icon3} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-9 pl-0">
                    <div className="info-para">
                      <p>Completely administrate empowered e-tailers after extensive experiences. Holisticly leverage existing quality networks.</p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-lg-2 col-3 ">
                    <div className="info-card bg-white p-2 d-flex justify-content-center rounded shadow">
                      <img src={icon4} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-9 pl-0">
                    <div className="info-para">
                      <p>Intrinsicly incentivize functionalized metrics whereas go forward networks. Collaboratively fabricate clicks-and-mortar intellectual.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="info-img">
                <img className="" src={infoImg} width="100%" height="80%" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default InfoSection
