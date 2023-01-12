/**
 * (1) Define the following class:
 *
 * BankAccount
 *
 *  Attributes
 *      amount: number // The amount of money in the bank account
 *      name: string // The name given to this bank account.
 *
 *  Methods
 *      constructor(name: string): BankAccount
 *          Creates a new bank account with the given name.
 *      deposit(added_amount: number): number
 *          Consumes the amount the user is depositing into their account, to be added to the amount.
 *          Returns the new balance.
 *      withdraw(amount_requested: number): number
 *          Consumes the amount the user is attempting to withdraw. If the amount in the account
 *          is less than the amount requested, set the account's amount to be 0 and return
 *          however much was in the account before then.
 *      isEmpty(): boolean
 *          Returns whether the account is empty (i.e., at zero).
 *
 */
var BankAccount = /** @class */ (function () {
    function BankAccount(amount, name) {
        this.amount = amount;
        this.name = name;
    }
    BankAccount.prototype.isEmpty = function () {
        if (this.amount <= 0) {
            console.log('Your account is empty.');
        }
        else {
            console.log('Your account is not empty. The balance is: ' + this.amount);
        }
    };
    BankAccount.prototype.deposit = function (added_amount) {
        this.amount += added_amount;
        console.log('Deposit of ' + added_amount + ' processed successfully.');
        console.log('The balance is now: ' + this.amount);
    };
    BankAccount.prototype.withdraw = function (amount_requested) {
        if (amount_requested > this.amount) {
            console.log('Insufficient balance.');
        }
        else {
            this.amount -= amount_requested;
            console.log('Amount of ' + amount_requested + ' withdrawn successfully.');
            console.log('The balance is now: ' + this.amount);
        }
    };
    return BankAccount;
}());
/**
 * (2) Make 3 sample bank accounts and demonstrate withdrawing and depositing money into them.
 */
var test1 = new BankAccount(0, "Jesse1");
test1.isEmpty();
test1.deposit(5000);
test1.withdraw(2000);
var test2 = new BankAccount(0, "Jesse2");
test2.isEmpty();
test2.deposit(5000);
test2.withdraw(5000);
test2.isEmpty();
var test3 = new BankAccount(0, "Jesse3");
test3.isEmpty();
test3.deposit(5000);
test3.withdraw(3000);
test3.withdraw(3000);
/**
 * (3) Define the following class:
 *
 * SpaceShip
 *
 *     Attributes:
 *         x: number // horizontal position on game grid
 *         y: number // vertical position on game grid
 *         callSign: string // Cool name for this ship
 *         onFire: boolean // Whether or not the ship is on fire
 *         ammo: number // How much ammo the ship has
 *         friends: Array<SpaceShip> // Other ships that this ship has met
 *
 *     Methods:
 *         constructor(): SpaceShip
 *             Spaceships start off at (0, 0), not on fire, with 0 ammo, and no friends.
 *         shoot(): void
 *             If there is ammo, decrease it by one and console.log a message about shooting.
 *             If there is no ammo, set the ship on fire.
 *         collectAmmo(clipAmount: number): void
 *             Add the clipAmount to the ammo
 *         makeFriend(newFriend: SpaceShip): boolean
 *             If the new friend has the same X and Y positions, add the newFriend to this
 *             ship's friends.
 *         pingFriends(): void
 *             Print out a message saying hello to each friend, referring to their callsign.
 *         moveTo(x: number, y: number): void
 *             Update the ship's position to the new location.
 *
 */
var SpaceShip = /** @class */ (function () {
    function SpaceShip(callSign) {
        this.x = 0;
        this.y = 0;
        this.callSign = callSign;
        this.onFire = false;
        this.ammo = 0;
        this.friends = [];
    }
    SpaceShip.prototype.shoot = function () {
        if (this.ammo > 0) {
            this.ammo - 1;
            console.log('Shooting ammo.');
        }
        else {
            this.onFire = true;
            console.log('The ship is on fire :(');
        }
    };
    SpaceShip.prototype.collectAmmo = function (clipAmount) {
        this.ammo += clipAmount;
        console.log('You now have ' + this.ammo + ' total rounds.');
    };
    SpaceShip.prototype.makeFriend = function (newFriend) {
        if (newFriend.x == this.x && newFriend.y == this.y) {
            this.friends.push(newFriend);
            return true;
        }
        return false;
    };
    SpaceShip.prototype.pingFriends = function () {
        this.friends.forEach(function (value) {
            console.log('Hello ' + value.callSign + '!');
        });
    };
    SpaceShip.prototype.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return SpaceShip;
}());
/**
 * (4) Make 3 example ships, ensure that at least two of them are friends, and try
 * calling each of the methods.
 */
var ship1 = new SpaceShip("FirstShip");
ship1.shoot();
ship1.collectAmmo(100);
ship1.moveTo(20, 20);
var ship2 = new SpaceShip("SecondShip");
ship2.collectAmmo(200);
ship2.shoot();
ship2.moveTo(20, 20);
ship2.makeFriend(ship1);
ship2.pingFriends();
var ship3 = new SpaceShip("ThirdShip");
ship3.collectAmmo(500);
ship3.shoot();
ship3.shoot();
ship3.shoot();
ship3.moveTo(10, 10);
