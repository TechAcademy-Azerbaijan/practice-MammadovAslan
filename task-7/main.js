const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  

    const n = result.input

        let arr = []
        for(let i = 1;i<n;i++){
            arr.push(i)
        }

        for(let i = 0;i<arr.length;i++){
            if(Math.sqrt(arr[i])%1 ==0){
                console.log(arr[i]);
            }
        }

});
