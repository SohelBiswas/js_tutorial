/*
Simple OOP Project in JavaScript: Account Creation System

What's included (real-world scenario):
- Classes and inheritance (Account -> UserAccount, AdminAccount)
- Encapsulation (private fields using #)
- Best-practices: validation, small methods, single responsibility, comments
- Example usage and simple in-memory "database"

How to use:
1. Save this file as account_system.js
2. Run with Node.js (v14+):
     node account_system.js
3. You will see sample accounts created and operations performed (create, deposit, withdraw, transfer)

Notes:
- This is intentionally simple and uses an in-memory store (Map). For real apps, persist to a DB and never store plain passwords.
- For production, use hashing (bcrypt), environment variables, proper logging, and input sanitization.
*/

// ------------------------
// Utilities
// ------------------------
class Utils {
  static generateId(prefix = "acc") {
    // Simple unique id generator (not cryptographically secure)
    return `${prefix}_${Date.now().toString(36)}_${Math.floor(Math.random() * 10000)}`;
  }

  static isValidEmail(email) {
    // Very small email check - replace with a robust validator in production
    return typeof email === 'string' && /\S+@\S+\.\S+/.test(email);
  }

  static formatCurrency(amount) {
    return `₹${amount.toFixed(2)}`; // India rupee symbol for example
  }
}

// ------------------------
// Simple Logger (SRP: separate concern)
// ------------------------
class Logger {
  static info(...args) { console.log('[INFO]', ...args); }
  static warn(...args) { console.warn('[WARN]', ...args); }
  static error(...args) { console.error('[ERROR]', ...args); }
}

// ------------------------
// Base Account class
// ------------------------
class Account {
  // Encapsulated/private fields
  #id;
  #ownerName;
  #email;
  #balance;
  #isActive;

  constructor({ ownerName, email, initialDeposit = 0 } = {}) {
    if (!ownerName || typeof ownerName !== 'string') throw new Error('ownerName is required');
    if (!Utils.isValidEmail(email)) throw new Error('valid email is required');
    if (typeof initialDeposit !== 'number' || initialDeposit < 0) throw new Error('initialDeposit must be >= 0');

    this.#id = Utils.generateId('acct');
    this.#ownerName = ownerName.trim();
    this.#email = email.toLowerCase().trim();
    this.#balance = initialDeposit;
    this.#isActive = true;

    Logger.info(`Account created: ${this.#id} for ${this.#ownerName}`);
  }

  // Public getters (read-only exposure)
  get id() { return this.#id; }
  get ownerName() { return this.#ownerName; }
  get email() { return this.#email; }
  get balance() { return this.#balance; }
  get isActive() { return this.#isActive; }

  // Encapsulated actions
  deposit(amount) {
    this._assertActive();
    if (typeof amount !== 'number' || amount <= 0) throw new Error('deposit amount must be > 0');
    this.#balance += amount;
    Logger.info(`Deposit: ${Utils.formatCurrency(amount)} -> ${this.#id} [balance: ${Utils.formatCurrency(this.#balance)}]`);
    return this.#balance;
  }

  withdraw(amount) {
    this._assertActive();
    if (typeof amount !== 'number' || amount <= 0) throw new Error('withdraw amount must be > 0');
    if (amount > this.#balance) throw new Error('insufficient funds');
    this.#balance -= amount;
    Logger.info(`Withdraw: ${Utils.formatCurrency(amount)} from ${this.#id} [balance: ${Utils.formatCurrency(this.#balance)}]`);
    return this.#balance;
  }

  // Transfer money to another account object
  transferTo(targetAccount, amount) {
    this._assertActive();
    if (!(targetAccount instanceof Account)) throw new Error('target must be an Account');
    if (targetAccount.id === this.id) throw new Error('cannot transfer to the same account');
    this.withdraw(amount);
    // For simplicity, trust targetAccount.deposit will work
    targetAccount.deposit(amount);
    Logger.info(`Transfer ${Utils.formatCurrency(amount)} from ${this.id} to ${targetAccount.id}`);
    return true;
  }

  close() {
    this._assertActive();
    if (this.#balance !== 0) throw new Error('balance must be zero to close account');
    this.#isActive = false;
    Logger.info(`Account ${this.#id} closed`);
  }

  // Protected / helper
  _assertActive() {
    if (!this.#isActive) throw new Error('account is not active');
  }

  // Representational method
  toJSON() {
    // Note: We intentionally do not expose private fields directly; this returns safe public data.
    return {
      id: this.id,
      ownerName: this.ownerName,
      email: this.email,
      balance: this.balance,
      isActive: this.isActive
    };
  }
}

// ------------------------
// UserAccount (inherits from Account)
// Example: adds login credential handling (very simplified)
// ------------------------
class UserAccount extends Account {
  #passwordHash; // private credential store (in real apps, store hashed password)

  constructor({ ownerName, email, password, initialDeposit = 0 } = {}) {
    if (!password || typeof password !== 'string' || password.length < 6) throw new Error('password (min 6 chars) required');
    super({ ownerName, email, initialDeposit });
    // NOTE: never store plaintext in production. Here we mock hashing.
    this.#passwordHash = UserAccount._mockHash(password);
  }

  // Simple mock hash for demo purposes
  static _mockHash(password) {
    // DO NOT USE in production. Use bcrypt or scrypt + salt.
    let hash = 0;
    for (let ch of password) hash = (hash << 5) - hash + ch.charCodeAt(0);
    return `h_${Math.abs(hash)}`;
  }

  // Authentication check
  authenticate(password) {
    return UserAccount._mockHash(password) === this.#passwordHash;
  }

  // Allows user to change their password (encapsulation)
  changePassword(oldPwd, newPwd) {
    if (!this.authenticate(oldPwd)) throw new Error('current password incorrect');
    if (typeof newPwd !== 'string' || newPwd.length < 6) throw new Error('new password must be at least 6 characters');
    this.#passwordHash = UserAccount._mockHash(newPwd);
    Logger.info(`Password changed for ${this.id}`);
    return true;
  }

  // Example of overriding toJSON to hide sensitive data
  toJSON() {
    const base = super.toJSON();
    // never include password hash!
    return base;
  }
}

// ------------------------
// AdminAccount (special privileges)
// ------------------------
class AdminAccount extends Account {
  constructor({ ownerName, email } = {}) {
    super({ ownerName, email, initialDeposit: 0 });
  }

  // Admin can credit any account (bypass some checks for admin operations)
  creditAccount(targetAccount, amount) {
    if (!(targetAccount instanceof Account)) throw new Error('target must be an Account');
    // Bypass target account active check to demonstrate privileges? We'll still check amount.
    if (typeof amount !== 'number' || amount <= 0) throw new Error('amount must be > 0');
    // Use deposit (which asserts active) - if you want to bypass, you could reach into private fields via methods, but don't.
    targetAccount.deposit(amount);
    Logger.info(`Admin ${this.id} credited ${Utils.formatCurrency(amount)} to ${targetAccount.id}`);
    return true;
  }
}

// ------------------------
// In-memory "Database" for demo
// ------------------------
class AccountStore {
  constructor() {
    this._store = new Map(); // id -> account
  }

  save(account) {
    if (!(account instanceof Account)) throw new Error('only Account instances can be saved');
    this._store.set(account.id, account);
    return account.id;
  }

  getById(id) {
    return this._store.get(id) || null;
  }

  findByEmail(email) {
    for (const acc of this._store.values()) {
      if (acc.email === (email || '').toLowerCase()) return acc;
    }
    return null;
  }

  all() { return Array.from(this._store.values()); }
}

// ------------------------
// Example: Application logic (thin service layer)
// ------------------------
class AccountService {
  constructor(store) {
    this.store = store;
  }

  registerUser({ ownerName, email, password, initialDeposit = 0 }) {
    if (this.store.findByEmail(email)) throw new Error('email already registered');
    const user = new UserAccount({ ownerName, email, password, initialDeposit });
    this.store.save(user);
    Logger.info(`User registered: ${user.id}`);
    return user;
  }

  login(email, password) {
    const user = this.store.findByEmail(email);
    if (!user) throw new Error('no account found for this email');
    if (!(user instanceof UserAccount)) throw new Error('account type mismatch');
    if (!user.authenticate(password)) throw new Error('invalid credentials');
    Logger.info(`User logged in: ${user.id}`);
    return user;
  }

  getAccountSummary(id) {
    const acc = this.store.getById(id);
    if (!acc) throw new Error('account not found');
    return acc.toJSON();
  }
}

// ------------------------
// Demo / Sample run
// ------------------------
(function demo() {
  const store = new AccountStore();
  const service = new AccountService(store);

  try {
    // 1) Register two users
    const alice = service.registerUser({ ownerName: 'Alice Singh', email: 'alice@example.com', password: 'alicepwd', initialDeposit: 1000 });
    const bob = service.registerUser({ ownerName: 'Bob Roy', email: 'bob@example.com', password: 'bobpwd', initialDeposit: 250 });

    // 2) Admin account
    const admin = new AdminAccount({ ownerName: 'System Admin', email: 'admin@bank.com' });
    store.save(admin);

    // 3) Operations
    alice.deposit(500);            // Alice balance: 1500
    bob.withdraw(50);              // Bob balance: 200
    alice.transferTo(bob, 200);    // Alice 1300, Bob 400

    // 4) Admin credits Bob
    admin.creditAccount(bob, 1000); // Bob 1400

    // 5) Summary prints
    console.log('\n--- Account Summaries ---');
    for (const acc of store.all()) {
      console.log(JSON.stringify(acc.toJSON(), null, 2));
    }

    // 6) Authentication demo
    const loggedIn = service.login('alice@example.com', 'alicepwd');
    console.log('\nLogged in user:', loggedIn.id, 'balance:', Utils.formatCurrency(loggedIn.balance));

    // 7) Password change
    loggedIn.changePassword('alicepwd', 'newAlicePwd');
    // login with old password should now fail (uncomment to test)
    // service.login('alice@example.com', 'alicepwd'); // -> error

  } catch (err) {
    Logger.error(err.message);
  }
})();

// Export classes for tests or further extension (if used as a module)
module.exports = { Account, UserAccount, AdminAccount, AccountStore, AccountService, Utils, Logger };
