//bài 1
function nguyento(n){
    if(n<2) console.log("false") 
        else{
            let i=2;
            while(i<=Math.sqrt(n)){
                if(n%i==0){
                    console.log("false");
                    return;
                }
                i++;
            }
            console.log("true"); 
    }  
}
//bài 2
function sum(n){
    let i=1,sum=0
    while(i<n){
        sum+=i
        i+=2
    }
    console.log(sum)
}
//bài 3
let arr=[1,2,3,4,5,6,7,8,9,10];
function array(arr){
    let New = arr.filter(x=>x>0)
    let Max=arr[0];
    arr.forEach(x=>{
            if(x%2==0) console.log(x)
            if(x>Max) Max=x})
    console.log(Max)
    console.log(New)
}
array(arr)
