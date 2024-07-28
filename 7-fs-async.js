const {readFile,writeFile} = require('fs')

console.log('Start')
readFile('./content/first.text','utf-8',(err,result) => {
    if(err != null){
        console.log(err)
        return;
    }

    const firstResult = result

    readFile('./content/second.text','utf-8',(err,result) => {
        if(err != null){
            console.log(err)
            return;
        }

        const secondResult = result;

        writeFile('./content/result-async.text','First Text \n' + firstResult + 'Second Result \n' + secondResult,(err,result) => {

            if(err != null){
                console.log(err)
                return;
            }

            console.log('done with task')

        },)
    })
})

console.log('Starting next task')