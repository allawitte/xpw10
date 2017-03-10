"use strict";

var assert = require('chai').assert;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');
var sinon = require('sinon');

var SmsService = require('../src/sms-service');
var Cupboard = require('../src/cupboard');

suite('When barmen pours drinks', function () {
    suite('not enough vodka in cupboard', function () {
        let barmen = {};
        let visitor = {};
        let cupboardWithNoEnoughVodka = {};
        setup(function(){
            visitor = new Visitor();
            visitor.sober();
            cupboardWithNoEnoughVodka = new Cupboard();
            cupboardWithNoEnoughVodka.setDrink('vodka', 100);
        });



        test('sms service is called if no drink is available', function () {
            let smsService = new SmsService();
            let smsServiceMock = sinon.mock(smsService);

            barmen = new Barmen(cupboardWithNoEnoughVodka, smsService);

            smsServiceMock.expects("send")
                .once()
                .withArgs("Hello. We have run out of vodka. Please buy several bottles.");

            barmen.pour("vodka", 200, visitor);

            smsServiceMock.verify();
            smsServiceMock.restore();
        });






        /*test('barmen sends sms to buy drink to boss', function () {
            let smsService = new SmsServiceFake();
            barmen = new Barmen(emptyCupboard, smsService);

            barmen.pour("vodka", 100, visitor);

            assert.equal(true, barmen.wasSmsSent);
        });*/

    });

});
