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

    class BankAccount {
        amount: number;
        name: string;
        constructor(amount:number, name:string){
            this.amount = amount;
            this.name = name;
        }
        isEmpty(): void {
            if(this.amount <= 0) {
                console.log('Your account is empty.')
            } else {
                console.log('Your account is not empty. The balance is: ' +this.amount)
            }
        }
        deposit(added_amount:number): void {
            this.amount += added_amount;
            console.log('Deposit of '+added_amount+' processed successfully.');
            console.log('The balance is now: ' +this.amount)
        }

        withdraw(amount_requested:number): void {
            if (amount_requested > this.amount) {
                console.log('You cannot withdraw this amount. Insufficient balance.')
            } else {
                this.amount -= amount_requested;
                console.log('Amount of '+amount_requested+' withdrawn successfully.');
                console.log('The balance is now: ' +this.amount)
            }
        }
    }
/**
 * (2) Make 3 sample bank accounts and demonstrate withdrawing and depositing money into them.
 */
let test1 = new BankAccount(0, "Jesse1")
test1.isEmpty();
test1.deposit(5000);
test1.withdraw(2000);

let test2 = new BankAccount(0, "Jesse2")
test2.isEmpty();
test2.deposit(5000);
test2.withdraw(5000);
test2.isEmpty();

let test3 = new BankAccount(0, "Jesse3")
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
class SpaceShip {
    x: number;
    y: number;
    callSign: string
    onFire: boolean
    ammo: number
    friends: Array<SpaceShip>
    constructor(callSign:string){
        this.x = 0;
        this.y = 0;
        this.callSign = callSign;
        this.onFire = false;
        this.ammo = 0;
        this.friends = [];
    }
    shoot(): void {
        if(this.ammo > 0) {
            this.ammo - 1;
            console.log('Shooting ammo.')
        } else {
            this.onFire = true;
            console.log('The ship is on fire :(')
        }
    }
    collectAmmo(clipAmount: number): void {
        this.ammo += clipAmount;
        console.log('You now have '+this.ammo+' total rounds.');
    }
    makeFriend(newFriend: SpaceShip): boolean {
        if(newFriend.x == this.x && newFriend.y == this.y){
            this.friends.push(newFriend);
            return true;
        }
        return false;
    }
    pingFriends(): void {
        this.friends.forEach ((value) => {
            console.log('Hello '+value.callSign+'!');
        });
    }
    moveTo(x: number, y: number): void {
        this.x = x;
        this.y = y;
    }
    }
/**
 * (4) Make 3 example ships, ensure that at least two of them are friends, and try
 * calling each of the methods.
 */

let ship1 = new SpaceShip("FirstShip")
ship1.shoot();
ship1.collectAmmo(100);
ship1.moveTo(20,20);

let ship2 = new SpaceShip("SecondShip")
ship2.collectAmmo(200);
ship2.shoot();
ship2.moveTo(20,20);
ship2.makeFriend(ship1);
ship2.pingFriends();

let ship3 = new SpaceShip("ThirdShip")
ship3.collectAmmo(500);
ship3.shoot();
ship3.shoot();
ship3.shoot();
ship3.moveTo(10,10);