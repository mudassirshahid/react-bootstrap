import React from 'react'
import mobile from "../assets/mobile.png";
import BgImage from "./BgImage";
import particle from "../assets/particle.svg";
import { Link } from "react-router-dom";


function HeroSection() {
  return (
    <>
      <div className="background-img">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 mt-md-5 pt-md-5 mt-2 pt-2">
              <div className="content mt-5">
                <h3 className="heading text-white">Black Friday Sale!</h3>
                <h1 className="text-white big-text">
                  <span>UP TO</span>
                  90% OFF
                </h1>
                <p className="text-white">
                  Limited time offer download and updated our app, synthesize
                  accurate users whereas communities assertively evolve
                  technically sound whereas real-time materials.
                </p>
                <Link
                  href="#"
                  className="btn bg-white rounded border btn-lg active text-primary px-4"
                  role="button"
                  aria-pressed="true"
                >
                  Get Started Now
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-img pt-5">
                <img className="" src={mobile} width="100%" height="80%" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default HeroSection
