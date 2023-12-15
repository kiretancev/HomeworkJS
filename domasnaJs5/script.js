function atmWithdrawal(requestedAmount) {
    let accountBalance = 1000000;
  
    if (requestedAmount > accountBalance) {
      return "Not enough money";
    } else {
      accountBalance -= requestedAmount;
      return {
        amountWithdrawn: requestedAmount,
        remainingBalance: accountBalance
      };
    }
  }
  
  let withdrawalAmount = 50000;
  
  let result = atmWithdrawal(withdrawalAmount);
  
  if (typeof result === "string") {
    console.log(result);
  } else {
    console.log(`Amount withdrawn: $${result.amountWithdrawn}`);
    console.log(`Remaining balance: $${result.remainingBalance}`);
  }