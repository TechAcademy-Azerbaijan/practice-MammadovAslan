const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  

    const n = result.input

    function getSquareList(n){
        let arr = []
        let newArr = []
        for(let i = 1;i<n;i++){
            arr.push(i)
        }

        for(let i = 0;i<arr.length;i++){
            if(Math.sqrt(arr[i])%1 ==0){
                newArr.push(arr[i])
            }
        }

        return newArr
    }

    console.log(getSquareList(n));

});
