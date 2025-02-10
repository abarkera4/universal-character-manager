import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import dndImg from "../assets/dnd.jpg";
import cthulhuImg from "../assets/cthulhu.jpg";
import cyberpunkImg from "../assets/cyberpunk.jpg";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        email,
        password,
      });

      navigate("/login");
    } catch (err) {
      setError("Failed to register. Try again.");
    }
  };

  return (
    <section className="section">
      <div className="container">
        {/* 🎭 Hero Section with Rotating Image Reel */}
        <div className="hero is-info is-medium">
          <div className="hero-body has-text-centered">
            <h1 className="title">Join the Adventure!</h1>
            <h2 className="subtitle">Create and manage your characters with ease.</h2>
          </div>
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            effect="fade"
            loop
            className="hero-carousel"
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

        {/* 📜 Character Sheet Selection */}
        <div className="columns is-multiline is-centered mt-5">
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content has-text-centered">
                <h3 className="title is-4">Dungeons & Dragons</h3>
                <p>Track spells, stats, and adventures in the world's most famous RPG.</p>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content has-text-centered">
                <h3 className="title is-4">Call of Cthulhu</h3>
                <p>Investigate dark mysteries and keep your sanity in check.</p>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card">
              <div className="card-content has-text-centered">
                <h3 className="title is-4">Cyberpunk</h3>
                <p>Hack the system and survive in a dystopian future.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔐 Registration Form */}
        <div className="box" style={{ maxWidth: "400px", margin: "auto", marginTop: "40px" }}>
          <h1 className="title has-text-centered">Create an Account</h1>
          {error && <p className="notification is-danger">{error}</p>}
          <form onSubmit={handleRegister}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="field">
              <button className="button is-info is-fullwidth">Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
