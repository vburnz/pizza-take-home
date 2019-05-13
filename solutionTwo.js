const Dispatcher = require('./Dispatcher'); 
const Summary = require('./Summary')

const solutionTwo = (deliveryCrew, directionStr) => {
    const dispatcher = new Dispatcher(directionStr, deliveryCrew)
    dispatcher.dispatchCrew(); 

    const summary = new Summary(deliveryCrew); 
    return summary.getTotalHouses(); 
}

module.exports = solutionTwo; 