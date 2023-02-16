function Calculator(){
    this.operator = {
        "+":(a,b)=>a+b,
        "-":(a,b)=>a-b
    }
    this.calculate=function(str){
        let arr = str.split(" ");
        let a = +arr[0];
        let operator = arr[1];
        let b = +arr[2];
        return this.operator[operator](a,b);
    }
    this.addMethod=function(str, func){
        this.operator[str] = func;
    }
}