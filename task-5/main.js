const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    const n = result.input.split(',')

    function findMax(n){
        let max = 0

        for(let i = 0;i<n.length;i++){
            if(parseInt(n[i]) >max){
                max = parseInt(n[i])
            }
        }
    return max
    }

    console.log(findMax(n));
    
});
