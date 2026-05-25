import './DiscoveryTile.css';

function DiscoveryTile({ name, image, rarity, isUnlocked }) {
  return (
    <div className={`tile tile-${rarity} ${isUnlocked ? '' : 'tile-locked'}`}>
      
      <img 
        src={image} 
        alt={isUnlocked ? name : 'Locked species'} 
        className="tile-image"
      />
      {isUnlocked && (
        <div className="tile-name">{name}</div>
      )}
    </div>
  );
}

export default DiscoveryTile;