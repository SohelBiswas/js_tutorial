function stringToNumber(input) {
    
    let convertedString = Number(input);
    
    if(!isNaN(convertedString)){
        return convertedString;
    } else {
        return 'Not a number';
    }
    
}

function flipBoolean(input) {
    
    return(!input);
}

function whatAmI(input) {
    
    let knowSelf = typeof(input);
    return `I'm a ${knowSelf}!`;
}

function isItTruthy(input) {
    
    if(input){
        return "It's truthy!";
    } else{
        return "It's falsey!";
    }
    
}