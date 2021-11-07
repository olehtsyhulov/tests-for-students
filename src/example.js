const toBoolean = (boolString) => {
    switch (boolString) {
        case true:
        case 'true':
            return true;
        case false:
        case 'false':
            return false;
        default:
            return boolString;
    }
};


const numberMultiplier = (num)=>{
    if (typeof num !== 'number' || num< 0){
        return 0;
    }

    if (num > 10000) {
        return num;
    }

    switch (true) {
        case num < 100:
            return num*5;
        case num < 500:
            return num*4;
        case num < 1000:
            return num*3;
        default:
            return num*2;
    }
}
