class PizzaDeliverer { 
  constructor(currentCoordinates){ 
    this.housesVisited = new Set(); 
    this.currentCoordinates = currentCoordinates || [0, 0]
    this.housesVisited.add(this.currentCoordinates.toString()); 
  }

  move(directionArrow){ 
    if (directionArrow === '^') {
      this.currentCoordinates[1]++;
    }
    else if (directionArrow === '>') {
      this.currentCoordinates[0]++;
    }
    else if (directionArrow === '<') {
      this.currentCoordinates[0]--;
    }
    else if (directionArrow === 'v') {
      this.currentCoordinates[1]--;
    }
    this.housesVisited.add(this.currentCoordinates.toString());  
  }

  getHousesVisited(){ 
    return this.housesVisited; 
  }
}

module.exports = PizzaDeliverer; 