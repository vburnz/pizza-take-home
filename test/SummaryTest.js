const Summary = require('../Summary')
const PizzaDeliverer = require('../PizzaDeliverer')
const chai = require('chai'); 
const expect = chai.expect; 


describe('Summary Class', function() {
    let delivererArr = new Array(5); 
    let summary; 

    beforeEach(function() {
        for (let i = 0; i < delivererArr.length; i++){
            delivererArr[i] = new PizzaDeliverer([0, i]); 
        }
        summary = new Summary(delivererArr); 
    })
    it('should have a delivery crew array property, that is an array of PizzaDeliverer instances', function(){ 
        expect(summary.deliveryCrewArr).to.be.an('array'); 
        expect(summary.deliveryCrewArr[0]).to.be.instanceOf(PizzaDeliverer); 
    })
    it('should combine the total number of houses visited for all deliverers', function() {
        expect(summary.getTotalHouses()).to.equal(5); 
    })
    it ('should not double count houses that have been visited by more than one deliverer', function(){ 
        for (let i = 0; i < delivererArr.length; i++){
            delivererArr[i].move('^'); 
        }
        expect(summary.getTotalHouses()).to.equal(6); 
    })
    //should check that it works for one, two, and n delivery people
}); 