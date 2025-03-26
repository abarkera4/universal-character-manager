import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import dndImg from "../assets/dnd.jpg";
import dndImg2 from "../assets/dnd2.jpg";
import dndImg3 from "../assets/dnd3.jpg";

import cthulhuImg from "../assets/cthulhu.jpg";
import cthulhuImg2 from "../assets/cthulhu2.jpg";
import cthulhuImg3 from "../assets/cthulhu3.jpg";
import cthulhuImg4 from "../assets/cthulhu4.jpg";

import cyberpunkImg from "../assets/cyberpunk.jpg";
import cyberpunkImg2 from "../assets/cyberpunk2.jpg";
import cyberpunkImg3 from "../assets/cyberpunk3.jpg";

import travellerImg from "../assets/traveller.jpg";
import travellerImg2 from "../assets/traveller2.jpg";
import travellerImg3 from "../assets/traveller3.jpg";



import "../styles/Home.css";



function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTexts = [
    { title: "Forge Your Own Destiny", subtitle: "Track your D&D adventures with ease." },
    { title: "Unravel Dark Mysteries", subtitle: "Keep your sanity in check in Call of Cthulhu." },
    { title: "Hack the System", subtitle: "Survive the future in Cyberpunk RPG." },
    { title: "Welcome to the Far Future", subtitle: "Explore the universe with Traveller in a way that suits you." },
  ];

  return (
    <section>
      <div className="wrapper-images">
        <div className="images-line">
        <div
          className="line large"
          style={{
            backgroundImage: `url(${dndImg})`
          }}
        ></div>
          <div
            className="line large"
            style={{
              backgroundImage: `url(${cthulhuImg})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${cyberpunkImg})`
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage:
                `url(${travellerImg})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${dndImg2})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${cthulhuImg2})`
            }}
          ></div>
        </div>

        <div className="images-line">
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${cyberpunkImg2})`
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage:
                `url(${travellerImg2})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${dndImg3})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${cthulhuImg3})`
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage:
                `url(${cyberpunkImg3})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${travellerImg3})`
            }}
          ></div>
        </div>

        <div className="images-line">
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${dndImg})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${cthulhuImg4})`
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage:
                `url(${cyberpunkImg3})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
               `url(${travellerImg2})`
            }}
          ></div>
          <div
            className="line"
            style={{
              backgroundImage:
                `url(${dndImg2})`
            }}
          ></div>
          <div
            className="line large"
            style={{
              backgroundImage:
                `url(${cthulhuImg})`
            }}
          ></div>
        </div>
      </div>

      <div className="home-container">
      
        <div className="logo">

          <h1 className="title">Universal Character Manager</h1>
            <h2 className="subtitle">
              Manage your tabletop RPG characters with ease.
            </h2>

          <div className="hero is-info is-medium">
            <div className="hero-carousel-container">
      
              <div className="hero-overlay">
                <h1 className="hero-title">{slideTexts[activeIndex].title}</h1>
                <h2 className="hero-subtitle">{slideTexts[activeIndex].subtitle}</h2>
              </div>

              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >

                <SwiperSlide>
                  <img src={dndImg} alt="Dungeons & Dragons" className="carousel-image" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={cthulhuImg} alt="Call of Cthulhu" className="carousel-image" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={cyberpunkImg} alt="Cyberpunk" className="carousel-image" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={travellerImg} alt="Traveller" className="carousel-image" />
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
        </div>
        <nav className="menu">
          <a href="/character-sheet">
            Create Character
          </a>
          <a href="/register">
            Register
          </a>
          <a href="/dashboard">
            Campaigns
          </a>
          <a href="/login">Login</a>
        </nav>
        
      </div>
    </section>
  );
}

export default Home;
