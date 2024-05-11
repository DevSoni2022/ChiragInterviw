// Input computeAmount().lacs(15).core(5).core(2).lacs(20).thousand(45).core(7).value())
//OutPut -> 143545000

// "use strict",

function calculator(){
    this.totalAmount = 0;
    this.lacs = function(amountToBeAdded){
        this.totalAmount += amountToBeAdded * 100000;
        return this;
    }
    this.thousand = function(amountToBeAdded){
        this.totalAmount += amountToBeAdded * 1000;
        return this;
    }
    this.core = function(amountToBeAdded){
        this.totalAmount += amountToBeAdded * 10000000;
        return this;
    }
    this.value = function(){
        console.log(this.totalAmount)

        return this.totalAmount;
    }
    return this;
}
function computeAmount(){
   return new calculator()
}
computeAmount().thousand(15).thousand(1).thousand(1).value();
