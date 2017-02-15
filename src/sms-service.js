"use strict";

class SmsService {
    constructor(){
        this._isSmsSend = false;
    }
    send(message) {
        // calls real sms provider
        this._isSmsSend = true;
    }
    wasCalled(){
        return this._isSmsSend;
    }
}

module.exports = SmsService;