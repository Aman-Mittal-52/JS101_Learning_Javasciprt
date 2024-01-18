class Mobile {
    #unlockPin;
    constructor (model,number,unlockPin){
        this.model = model;
        this.number = number;
        this.#unlockPin = unlockPin;
    }

    get getUnlockPin(){
        return this.#unlockPin;
    }

    set unlockPin(pin){
        this.#unlockPin = pin;
    }

    sendSMS (msg){

        return msg;
    }
}
  
let m1 = new Mobile("Nokia",30,9999);

console.log(m1.getUnlockPin);
export default Mobile
