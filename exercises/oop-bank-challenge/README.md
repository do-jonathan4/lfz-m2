# oop-bank-challenge

Using Object Oriented JavaScript to simulate a `Bank`.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/oop-bank-challenge` directory in your terminal.

### Challenge

Use Object Oriented JavaScript to create a `Bank` that can create accounts, deposit money, and withdraw money.

All challenges done in oop may be accomplished in different ways.  The following are how we expect your application to be layed out, but of course your end solution may differ.  Be sure to question the differences in the solution provided after this challenge is given to you.

###  Layout
___

**`bank.js`**

  Implement the `Bank` class: a class responsible for storing your accounts by id and retrieve accounts by id.

  #### Methods:

  1. `constructor()`

      - Stores an object for bank accounts.
      - An id that can track the next id used to create the account.

  1. `createAccount()`

      - Create a new a account with an id based off the current id.
      - Increments the id for the next account to be created.
      - Logs the following to the console: `'Congratulations, your account has been created. Your account id is (accountId)'`.
      - Returns the id of the account that was created.

  1. `getAccount(id)`
      - Returns the account relative to the id.
      - Returns undefined if the account id does not match any of the accounts.

**`account.js`**

  Implement the `Account` class: a class responsible for storing your account's balance and handle any withdrawals or deposits of money.

  #### Methods:

  1. `constructor()`

      - Stores a number for account balance.

  1. `isBalanceTooLow(amount)`

      - Returns true if amount is greater than the balance.
      - Returns false if amount is less than the balance.

  1. `deposit(amount)`
      - Adds the amount to the account balance.
      - Logs the following to the console: `'Your new account balance is (accountBalance)'`.
  1. `withdraw(amount)`
       - Checks if the `balance is too low` :wink:
       - If the balance is too low to withdraw the amount log the following to the console `'Your balance is currently (accountBalance) it is too low to withdraw  (amount)'`.
       - If the balance is **not** too low, subtract the amount from the balance and log the following to the console: `'Your new account balance is (accountBalance)'`

### Example List

  - [Creating an `Account`](#creating-an-account)
  - [Retrieving an `Account`](#retrieving-an-account)
  - [Depositing Money to an `Account`](#depositing-money-to-an-account)
  - [Withdrawing Money from an `Account`](#withdrawing-money-from-an-account)

## Examples

### Creating an `Account`

```js
var bank = new Bank()
var accountId = bank.createAccount()
/*
Returns the id, in this case would be 1.
Logs to the console: 'Congratulations, your account has been created. Your account id is 1'
*/
```

### Retrieving an `Account`

```js
var bank = new Bank()
var accountId = bank.createAccount()

var account1 = bank.getAccount(99)
/*
Returns undefined because the account was not found.
*/
var account2 = bank.getAccount(accountId)
/*
Returns the account with the id of 1.
*/
```

### Depositing Money to an `Account`

```js
var bank = new Bank()
var accountId = bank.createAccount()
var account = bank.getAccount(accountId)

account.deposit(1000)
/*
Logs to the console: 'Your new account balance is 1000'
*/
```

### Withdrawing Money from an `Account`

```js
var bank = new Bank()
var accountId = bank.createAccount()
var account = bank.getAccount(accountId)

account.deposit(1000)

account.withdraw(1001)

/*
Logs to the console: 'Your balance is currently 1000 it is too low to withdraw 1001'
*/

account.withdraw(400)

/*
Logs to the console: 'Your new account balance is 600'
*/

```

___


### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
