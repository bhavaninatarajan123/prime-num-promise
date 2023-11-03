let num=prompt("Enter the number")
let primeNumber=new Promise(function(resolve,reject){
    for(i=2;i<num;i++){
        let prime=true
        if(num%i==0){
            prime=false
            
        }
        
        if(prime==true){
            resolve(num)
        }
        
        else if(prime==false){
            reject(num)
        }
    }
})
primeNumber.then((n)=>{
    document.write(`${n} is a prime number`)
})

.catch((n)=>{
    document.write(`${n} is not a prime number`)
})

if(num==2){
        document.write(`${num} is a prime number`)
    }