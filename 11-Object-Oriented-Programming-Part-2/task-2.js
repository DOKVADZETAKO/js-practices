CoffeeMachine.prototype.run = function(){
    setTimeout(function() {
        console.log('Coffee is ready!');
    }, this.getTimeToBoil());
 };
 
 CoffeeMachine.prototype.setWaterAmount = function(amount){
    this.waterAmount = amount;
 };

function CoffeeMachine(power) {
    this.waterAmount = 0;
    const WATER_HEAT_CAPACITY = 4200;
    
   this.getTimeToBoil= function() {
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }
}

let coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();