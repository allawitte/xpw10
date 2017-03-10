'use strict';

class Cupboard {
    constructor(){
        this._drinkBase = {};
    }
    setDrink(name, volume){
        this._drinkBase[name] = volume;
    }
    isOpen() {
        // Database request
        //
        // return repository.hasAnyDrink();
        // ...
        //

        return true;
    };

    hasDrink(drinkName, volume) {
        // Database request
        //
        // repository.hasDrink(drinkName);
        // ...
        //
        if(this._drinkBase[drinkName] - volume < 0){
            return false;
        }

        return true;
    };

    getDrink(drinkName, volume) {
        // Database request
        //
        // repository.getDrinkBy(drinkName, volume);
        // ...
        //

        return volume;
    }
}

module.exports = Cupboard;