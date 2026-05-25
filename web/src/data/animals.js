import cat from './images/animals/cat.png';
import dog from './images/animals/dog.png';
import elephant from './images/animals/elephant.png';   
import horse from './images/animals/horse.png';
import rooster from './images/animals/rooster.png';
import rabbit from './images/animals/rabbit.png';
import lock from './images/lock.png';

export const species = [
  // Common — cyan
  { id: 1,  name: 'Cat',     image: cat,           rarity: 'common', isUnlocked: true  },
  { id: 2,  name: 'Dog',     image: dog,          rarity: 'common', isUnlocked: true  },
  { id: 3,  name: 'Rooster', image: rooster,        rarity: 'common', isUnlocked: true },
  { id: 4,  name: 'Sparrow', image: lock,       rarity: 'common', isUnlocked: false },
  { id: 5,  name: 'Crow',    image: lock,         rarity: 'common', isUnlocked: false },
  { id: 6,  name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 7,  name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 8,  name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 9,  name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 10, name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 11, name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 12, name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 13, name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 14, name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  { id: 15, name: '???',     image: lock,     rarity: 'common', isUnlocked: false },
  // Rare — lime green
  { id: 16,  name: 'Horse',   image: horse,              rarity: 'rare',   isUnlocked: true  },
  { id: 17,  name: 'Rabbit',  image: rabbit,       rarity: 'rare',   isUnlocked: true },
  { id: 18,  name: 'Snake',   image: lock,      rarity: 'rare',   isUnlocked: false },
  { id: 19,  name: 'Fox',     image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 20, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 21, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 22, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 23, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 24, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 25, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 26, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },
  { id: 27, name: '???',    image: lock,                rarity: 'rare',   isUnlocked: false },

  // Super Rare — lavender
  { id: 28, name: 'Elephant', image: elephant,          rarity: 'super',  isUnlocked: true  },
  { id: 29, name: 'Deer',     image: lock,         rarity: 'super',  isUnlocked: false },
  { id: 30, name: 'Bison',    image: lock,     rarity: 'super',  isUnlocked: false },
  { id: 31, name: '???',      image: lock,     rarity: 'super',  isUnlocked: false },
  { id: 32, name: '???',      image: lock,     rarity: 'super',  isUnlocked: false },
  { id: 33, name: '???',      image: lock,     rarity: 'super',  isUnlocked: false },
  { id: 34, name: '???',      image: lock,     rarity: 'super',  isUnlocked: false },
  { id: 35, name: '???',      image: lock,     rarity: 'super',  isUnlocked: false },
];

export const rarityInfo = {
  common: { label: 'Common',    color: '#5fc8e8', total: 15 },
  rare:   { label: 'Rare',      color: '#8de052', total: 12 },
  super:  { label: 'Super Rare', color: '#c89cf5', total: 8  },
};