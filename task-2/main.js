// const prompt = require('prompt');
// prompt.start();


// prompt.get('input', function (err, result) {
  

//     const n = result.input

//     if(n%1 == 0 && n%n ==0){

//     }

// });

let n = 12

function isSimpleNumber(n){
    let count = 0

    for(let i = 1;i<=n;i++){
        for(let j = i+1;j<n;j++){
            if(n%j ==0){
                count ++
            }
            break
        }
    }
    return count == 0 ? 'Yes' : 'No';
}

console.log(isSimpleNumber(n));