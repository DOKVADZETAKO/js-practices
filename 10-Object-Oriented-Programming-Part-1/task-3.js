function CoffeeMachine(power, capacity) {
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function (amount) {
        if (amount < 0) {
            throw new Error("Value has to be positive");
        }
    };

    function onReady() {
        console.log('Coffee is ready');
    }

    this.run = function () {
        setTimeout(onReady, getTimeToBoil());
    };


    this.addWater = function (amount) {
        let added = waterAmount + amount
        if( added > capacity){
            throw new Error("You can't put more water, than 400 ");
        }
        waterAmount = added;
    }
}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200); // You can't put more water, than 400
coffeeMachine.addWater(200);
coffeeMachine.addWater(200);
coffeeMachine.run();