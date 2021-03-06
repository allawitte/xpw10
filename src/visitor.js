class Visitor {
    constructor() {
        this.totalDrinkVolume = 0;
    }

    drink(volume) {
        this.totalDrinkVolume += volume;
        return volume;
    }
    
    pay(accounting, amount){
        accounting.addPayment(amount);
    }

    sober() {
        this.totalDrinkVolume = 0;
    }

    isTotallyDrunk() {
        return this.totalDrinkVolume > 150;
    }

    getTotallyDrunk() {
        return this.totalDrinkVolume;
    }
}

module.exports = Visitor;