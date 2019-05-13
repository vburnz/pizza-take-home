class Summary { 
  constructor(deliveryCrewArr){ 
    this.deliveryCrewArr = deliveryCrewArr; 
  }
  getTotalHouses(){ 
    let combined = new Set(); 
    for (let i = 0; i < this.deliveryCrewArr.length; i++){
      combined = new Set([...combined, ...this.deliveryCrewArr[i].getHousesVisited()]) 
    }
    return combined.size; 
  }
}

module.exports = Summary; 