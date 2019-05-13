const PizzaDeliverer = require('../PizzaDeliverer')
const chai = require('chai'); 
const expect = chai.expect; 


describe('PizzaDeliverer Class', function() {
    let deliverer; 

    beforeEach(function() {
        deliverer = new PizzaDeliverer(); 
    })

    it('should have a houses visited property that is a set with the initial starting house', function() {
        expect(deliverer.housesVisited).to.have.property('size', 1); 
    })
    it('should have a current coordinates property that is initially set to [0,0]', function(){ 
        expect(deliverer.currentCoordinates).to.be.an('array'); 
        expect(deliverer.currentCoordinates).to.deep.equal([0, 0])
    })
    it('should respond to directional inputs appropriately', function(){ 
        deliverer.move('^'); 
        expect(deliverer.currentCoordinates).to.deep.equal([0, 1])
        deliverer.move('<')
        expect(deliverer.currentCoordinates).to.deep.equal([-1, 1])
        deliverer.move('>')
        expect(deliverer.currentCoordinates).to.deep.equal([0, 1])
        deliverer.move('v')
        expect(deliverer.currentCoordinates).to.deep.equal([0, 0])

        const directionStr = '^^^>>>>>'; 
        for (let i = 0; i < directionStr.length; i++){
            deliverer.move(directionStr[i]); 
        }
        expect(deliverer.currentCoordinates).to.deep.equal([5, 3])
    })
    it('should add a new house to its housesVisited property each time it visits a new house', function(){ 
        expect(deliverer.housesVisited).to.have.property('size', 1); 
        deliverer.move('^'); 
        expect(deliverer.housesVisited).to.have.property('size', 2); 
        deliverer.move('^'); 
        expect(deliverer.housesVisited).to.have.property('size', 3); 
        deliverer.move('^'); 
        expect(deliverer.housesVisited).to.have.property('size', 4); 
    })
    it ('should not add houses it has already visited to its housesVisited property', function(){
        deliverer.move('^'); 
        deliverer.move('^'); 
        deliverer.move('^'); 
        deliverer.move('v'); 
        deliverer.move('v'); 
        deliverer.move('v'); 
        expect(deliverer.housesVisited).to.have.property('size', 4); 
    })
    it ('should have a method that returns the housesVisited set', function(){ 
        deliverer.move('>'); 
        deliverer.move('>'); 
        deliverer.move('>'); 
        deliverer.move('v'); 
        deliverer.move('v'); 
        const housesVisited = deliverer.getHousesVisited(); 
        expect(housesVisited).to.have.property('size', 6); 
        expect(housesVisited).to.have.all.keys('0,0', '1,0', '2,0', '3,0', '3,-1', '3,-2')
        expect(housesVisited).to.not.have.all.keys('-1,-1', '3,-3', '1,1')
    })
});