function getMaxSubSum(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum+=arr[j];
            if(sum>max){
                max=sum;
            }
        }
    }
    return max;
}