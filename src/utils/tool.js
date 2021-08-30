function isNumber(obj) {
    var num = obj - 0;
    return typeof num === 'number' && !isNaN(num);  
}