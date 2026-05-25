import { useRef } from 'react';
import { species } from '../data/animals';
import DiscoveryTile from '../components/DiscoveryTile';
import trailseekerGif from '../data/images/ashgif.gif';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  const carouselRef = useRef(null);

  const unlockedSpecies = species.filter(s => s.isUnlocked);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;
    const tileWidth = 200; 
    carouselRef.current.scrollBy({
      left: direction === 'right' ? tileWidth : -tileWidth,
      behavior: 'smooth',
    });
  };

  return (
    <main className="profile-page">
      
      <div className="player-card">
        <div className="card-header">
          <div className="card-level">
            <span className="level-label">LEVEL</span>
            <span className="level-number">17</span>
          </div>
          <div className="card-xp">
            <span className="xp-label">XP</span>
            <div className="xp-track">
              <div className="xp-fill" style={{ width: '50%' }} />
            </div>
            <span className="xp-numbers">75/150</span>
          </div>
        </div>

        <div className="card-body">
          <div className="card-character">
            <img src={trailseekerGif} alt="Trailseeker character" />
          </div>
          
          <div className="card-stats">
            <div className="card-name">
              <span className="name-badge">⭐</span>
              <h2>Trailseeker</h2>
            </div>
            <ul className="stat-list">
              <li><span className="stat-key">Streak:</span> 3 Days 🔥</li>
              <li><span className="stat-key">Friends:</span> 12</li>
              <li><span className="stat-key">Travelled:</span> 129 km</li>
              <li><span className="stat-key">Discoveries:</span> 019</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-pill"> <Link to="/scenes">Scenes 12/150</Link></div>
        <div className="stat-pill"> <Link to="/species">Species 7/350</Link></  div>
      </div>

      <section className="recent-discoveries">
        <h3 className="section-heading">Recent Discoveries</h3>
        <div className="carousel-container">
          <button 
            className="carousel-btn carousel-btn-left" 
            onClick={() => scrollCarousel('left')}
            aria-label="Scroll left"
          >
            ‹
          </button>
          
          <div className="carousel-track" ref={carouselRef}>
            {unlockedSpecies.map(item => (
              <div key={item.id} className="carousel-slide">
                <DiscoveryTile {...item} />
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-btn carousel-btn-right" 
            onClick={() => scrollCarousel('right')}
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </section>

    </main>
  );
}

export default Profile;