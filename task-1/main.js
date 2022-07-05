// const prompt = require('prompt');
// prompt.start();


// prompt.get('input', function (err, result) {
  

//     const n = result.input

//     n = n.toString().split('')

//     console.log(n);

// });

//100 - 100
//20 - 30
//1 - 2

let n = 123

function getTotalPrice(n){
    n = n.toString().split('').reverse()
    let result = 0

    for(let i = 1;i<=n.length;i++){
        if(Number(n[i-1])*(10**i)/10 >= 100){
            result += 100
        }else if(Number(n[i-1])*(10**i)/10 >= 20 && Number(n[i-1])*(10**i)/10 <100){
            result += 30
        }else if(Number(n[i-1])*(10**i)/10 >= 1 && Number(n[i-1])*(10**i)/10 <20){
            result += 2*(Number(n[i-1]))
        }
    }

    return result
}


console.log(getTotalPrice(n));