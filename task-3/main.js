const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    const n = result.input.split(',')
    let arr = []
    // for(let i = 0;i<n.length;i++){
    //     console.log(n[i].split('').reverse().join(''));
    // }

    for(let i = n.length-1;i>=0;i--){
        console.log(n[i].split('').join(''));
    }

});
