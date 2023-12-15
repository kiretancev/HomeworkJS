let calculateChineseZodiac = (year) => (year - 4) % 12;

let year = 2003;

let zodiacIndex = calculateChineseZodiac(year);

let zodiacSigns = [
  "Rat", "Ox", "Tiger", "Rabbit",
  "Dragon", "Snake", "Horse", "Goat",
  "Monkey", "Rooster", "Dog", "Pig"
];

console.log(`${year} is the year of the ${zodiacSigns[zodiacIndex]}.`);

