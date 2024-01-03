# JS101 Construct Function
<hr>

## Bank Account Mangement
<hr>

### Task: Implement a bank account management system using JavaScript objects and functions.

#### Instructions: 
- Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.
- Inside the constructor, initialize the properties of the bank account object.

### Add the following methods to the BankAccount prototype:
-  deposit(amount) - Deposits the specified amount into the account.
-  withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
-  checkBalance() - Prints the account's balance.
-  isActive() - Checks and returns whether the account is active.

1. Create multiple BankAccount objects representing different accounts.
2. Perform a series of deposit, withdrawal, and balance check operations on these accounts.
3. Test the isActive method to check if the accounts are active.
4. Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.
5. Test the getTotalBalance function to display the total balance of all active accounts.