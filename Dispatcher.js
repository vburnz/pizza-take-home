class Dispatcher { 
    constructor(directionStr, deliveryCrewArr){ 
      this.directionStr = directionStr; 
      this.deliveryCrewArr = deliveryCrewArr; 
    }
  
    dispatchCrew(){ 
      for (let i = 0; i < this.directionStr.length; i++){
        let delivererIdx = i % this.deliveryCrewArr.length; 
        this.deliveryCrewArr[delivererIdx].move(this.directionStr[i]);
      }
    }  
  
  }

module.exports = Dispatcher; 