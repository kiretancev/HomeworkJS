function checkType(input) {
    let type = typeof input;
    console.log(`Type of ${input} is: ${type}`);
  }

  checkType(true);        
  checkType(42);          
  checkType("Hello");     
  checkType(undefined);  