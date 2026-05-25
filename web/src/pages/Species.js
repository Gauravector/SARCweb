import { species, rarityInfo } from '../data/animals';
import DiscoveryTile from '../components/DiscoveryTile';
import RarityBar from '../components/RarityBar';
import './Species.css';

function Species() {
  
  const rarities = ['common', 'rare', 'super'];
  
  
  const unlockedCounts = {
    common: species.filter(s => s.rarity === 'common' && s.isUnlocked).length,
    rare:   species.filter(s => s.rarity === 'rare'   && s.isUnlocked).length,
    super:  species.filter(s => s.rarity === 'super'  && s.isUnlocked).length,
  };
  
  const totalUnlocked = species.filter(s => s.isUnlocked).length;
  const grandTotal = rarityInfo.common.total + rarityInfo.rare.total + rarityInfo.super.total;

  return (
    <main className="species-page">
      <div className="species-header">
        <h1 className="species-title">Species</h1>
        <p className="species-stat">{totalUnlocked} / {grandTotal} discovered</p>
      </div>

      {rarities.map(rarity => {
        const info = rarityInfo[rarity];
        const tiles = species.filter(s => s.rarity === rarity);
        
        return (
          <section key={rarity} className="rarity-section">
            <RarityBar 
              label={info.label}
              unlocked={unlockedCounts[rarity]}
              total={info.total}
              color={info.color}
            />
            <div className="tiles-grid">
              {tiles.map(tile => (
                <DiscoveryTile 
                  key={tile.id}
                  name={tile.name}
                  image={tile.image}
                  rarity={tile.rarity}
                  isUnlocked={tile.isUnlocked}
                />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default Species;