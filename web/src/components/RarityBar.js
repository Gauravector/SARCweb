import './RarityBar.css';

function RarityBar({ label, unlocked, total, color }) {
  const percent = (unlocked / total) * 100;

  return (
    <div className="rarity-bar">
      <div className="rarity-header">
        <span className="rarity-label">{label}</span>
        <span className="rarity-count">{unlocked} / {total}</span>
      </div>
      <div className="rarity-track">
        <div 
          className="rarity-fill" 
          style={{ width: `${percent}%`, background: color }}
        />
      </div>
    </div>
  );
}

export default RarityBar;