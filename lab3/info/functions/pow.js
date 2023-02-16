function pow(x, n) {
    if(n<1){
        alert('Use positive integer')
        return NaN
    }
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
}