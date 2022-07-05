const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    const n = result.input.split(',')

    if(n[0]*n[1]>0){
        console.log(1);
    }else if(n[0]*n[1]<0){
        console.log(-1);
    }else if(n[0]*n[1]==0){
        console.log(0);
    }
});
