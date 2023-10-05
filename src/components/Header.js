import React from "react";
import Typewriter from "../Typewriter";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>
              HI, I'm <br></br>
              <span class="fspan">FAVOUR OLAJIDE</span>
            </h1>
            <p>
              <Typewriter text="Software Developer and Designer" delay={100} />
            </p>
            <button type="button" class="btn btn-info btn-lg resumebut">
              View my Resume
            </button>
          </div>
          <div class="col-lg-6 text-center">
            <img
              class="img-responsive img-fluid"
              src="Favourthedevpng2.png"
              alt="FavourtheDev"
            ></img>
          </div>
          <div class="col-lg-12">
            <div class="smediaicons text-center">
              <a
                href="https://www.linkedin.com/in/favour-olajide-favourthedev-5738621ab/"
                target="_blank"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/favourthedev/" target="_blank">
                <i class="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://twitter.com/Favourthedev" target="_blank">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://github.com/FavourtheDeveloper" target="_blank">
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
            <div class="col-lg-12 sepicon text-center">
              <a href="#about">
                <i class="fas fa-arrow-circle-down fa-3x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
