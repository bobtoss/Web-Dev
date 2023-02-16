let i=2;
for(;i<=10;i++){
    let cnt=0
    for(let j=2;j<i;j++){
        if(i%j==0){
            cnt++;
        }
    }
    if(cnt==0){
        alert(i)
    }
}