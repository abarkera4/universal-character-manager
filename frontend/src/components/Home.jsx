import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
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
