function Demo(num){
    let promise = new Promise(( resolve, reject) =>{
        if (num >= 10000){
            resolve("Alright your dept have been paid! you can leave now")

        }
        else{
            reject(new Error("Your money is lower then promise! now one of your man must paid with his life!"))
        }
    })
    return promise
}

let monirith = Demo(100000)
monirith.then(output => {
    console.log(output);
}).catch(err => {
    console.log(err.message);
})