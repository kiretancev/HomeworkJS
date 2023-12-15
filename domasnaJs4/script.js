function calculateDogAge(humanAge) {
    let dogAge = humanAge * 7;
    return dogAge;
  }
  
  let myHumanAge = 25;
  let myDogAge = calculateDogAge(myHumanAge);
  
  console.log(`If I were a dog, I would be ${myDogAge} years old.`);