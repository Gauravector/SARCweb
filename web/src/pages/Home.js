import { Link } from 'react-router-dom';
import bgPattern from '../data/images/bg2.png';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            A Pokédex<br />for the <span className="hero-focus">real world</span>.
          </h1>
          <p className="hero-subtitle">
            Capture species and scenes in your daily life. Earn XP. 
            Level up. Build your dex one discovery at a time.
          </p>
          <div className="hero-actions">
            <Link to="/profile" className="cta-primary">
              Start your dex →
            </Link> <span className="cta-secondary">Upload New Discovery</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;