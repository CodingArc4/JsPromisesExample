//promise is an object that handles asynchronous data and it has 3 states: pending, fulfilled, rejected
//pending: initial state, neither fulfilled nor rejected
//fulfilled: meaning that the operation completed successfully
//rejected: meaning that the operation failed
//promise is created with the new keyword and the promise constructor
//the promise constructor takes one argument, a callback with two parameters, resolve and reject
//resolve: a function that indicates that the operation completed successfully
//reject: a function that indicates that the operation failed
//the promise object returned by the constructor has two methods: then and catch

//1st example
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('Success');
    } else {
        reject('Failed');
    }
});

p.then((res) => {
    console.log('This is in the then ' + res);
})
.catch((err) => {
    console.log('This is in the catch ' + err);
});


//2nd example
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {   
        let userLeft = false;
        let userWatchingCatMeme = false;
    
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}
).catch((error) => {
    console.log(error.name + ' ' + error.message);
});