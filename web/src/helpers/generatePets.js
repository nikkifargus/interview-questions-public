const PET_NAMES = [
    'Mr. Fluffings',
    'The Whiskertron',
    'Dogbert',
    'Keith',
    'Woofo',
];

const PET_TYPES = [
    'Dog',
    'Cat',
    'Antelope',
    'Wild Boar',
    'Rock',
];

export const generatePet = (i, name =null) => ({
  id: i,
  name: name ? name : PET_NAMES[Math.floor(Math.random()*PET_NAMES.length)],
  type: PET_TYPES[Math.floor(Math.random()*PET_TYPES.length)],
  age: Math.floor(Math.random() * 15),
  feeds: Math.floor(Math.random() * 6) + 1,
})

const generatePets = (numberOfPets = 3) => {
  const petList = [];
  for(let i = 0; i < numberOfPets; i += 1) {
    petList.push(generatePet(i))
  }

  return petList;
};

export { generatePets };
