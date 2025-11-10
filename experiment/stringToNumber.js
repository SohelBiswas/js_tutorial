function stringToNumber(input) {
    
    let convertedString = Number(input);
    
    if(!isNaN(convertedString)){
        return convertedString;
    } else {
        return 'Not a number';
    }
    
}