const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  

    const n = result.input.split(',')

    function getRectangleArea(n){
        return parseInt(n[0])*parseInt(n[1])
    }

    console.log(getRectangleArea(n));
    
});
