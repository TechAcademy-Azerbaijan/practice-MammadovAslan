const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  

    const n = result.input

    function getFibonacci(n){
        return (parseInt(n)-1) + (parseInt(n)-2)
    }

    console.log(getFibonacci(n));
    
});
