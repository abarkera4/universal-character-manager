import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import dndImg from "../assets/dnd.jpg";
import cthulhuImg from "../assets/cthulhu.jpg";
import cyberpunkImg from "../assets/cyberpunk.jpg";



function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideTexts = [
    { title: "Forge Your Own Destiny", subtitle: "Track your D&D adventures with ease." },
    { title: "Unravel Dark Mysteries", subtitle: "Keep your sanity in check in Call of Cthulhu." },
    { title: "Hack the System", subtitle: "Survive the future in Cyberpunk RPG." },
  ];

  return (
    <section>
      <div className="hero-body">
        <div className="container has-text-centered">
          


          <div className="hero is-info is-medium">
          <div className="hero-carousel-container">
    
            <div className="hero-overlay">
              <h1 className="hero-title">{slideTexts[activeIndex].title}</h1>
              <h2 className="hero-subtitle">{slideTexts[activeIndex].subtitle}</h2>
            </div>

            <Swiper
              modules={[Autoplay, EffectFade]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
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
            </Swiper>
          </div>
        </div>


        <h1 className="title">Universal Character Manager</h1>
          <h2 className="subtitle">
            Manage your tabletop RPG characters with ease.
          </h2>

        
          <div className="buttons is-centered">
            <Link to="/login" className="button is-light">
              Login
            </Link>
            <Link to="/character-sheet" className="button is-info">
              View Character Sheet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
