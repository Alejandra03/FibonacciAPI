const { Router } = require('express');
const router = Router();

var result = 0;

router.get('/', (req, res) => {
    res.send('The result is: ' + result);
});

router.post('/', (req, res) => {
    const num = req.body['num'];
    result = fibonacci(num);
    if(result == -1){
        res.send('Invalid number, only positive numbers');
        result = 'Invalid number';
    }
    else{
        res.send('Processing data...');
        //res.send('El resultado es: ' + result);
    }
})


function fibonacci(num)
{
    if(num == 0){
        return 0;
    } else if(num == 1){
        return 1;
    } else if(num > 1){
        return fibonacci(num - 1) + fibonacci(num - 2) ;    
    } else {
        return -1
    }
}

module.exports = router;