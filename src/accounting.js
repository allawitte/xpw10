'use strict';
class Accounting {
    constructor(){
        this._income = 0;
    }
    
    addPayment(value){
        //access to data base with all day income
        this._income += value;
    }

    get statement(){
        return this._income;
    }
}

module.exports = Accounting;
/**
 * Created by HP on 3/10/2017.
 */
