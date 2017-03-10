'use strict';
var assert = require('chai').assert;
var Visitor = require('../src/visitor')
var Accounting = require('../src/accounting');
var sinon = require('sinon');
suite('When pays for a drinks', function () {
    let visitor = new Visitor();


    test('his payment add to the account of bar', function () {
            let accounting = new Accounting();
            let accountingMock = sinon.mock(accounting);

            accountingMock.expects("addPayment")
                .once()
                .withArgs(300);

            visitor.pay(accounting, 300);

            accountingMock.verify();
            accountingMock.restore();


        }
    )

})
/**
 * Created by HP on 3/10/2017.
 */
