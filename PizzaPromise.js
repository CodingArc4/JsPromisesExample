function getCheese(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const cheese = '🧀';
            resolve(cheese);
       }, 4000);
    });
}

function makeDough(cheese){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const dough = cheese + '🍞';
            resolve(dough);
            //reject('bad cheese');
        }, 3000);
    });
}

function bakePizza(dough){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const pizza = dough + '🍕';
            resolve(pizza);
        }, 5000);
    });
}

// async function orderPizza(){
//         const cheese = await getCheese();
//         console.log("here is the cheese ", cheese);
//         const dough = await makeDough(cheese);
//         console.log("here is the dough ", dough);
//         const pizza = await bakePizza(dough);
//         console.log("here is the pizza ", pizza);
// }

// orderPizza();

getCheese()
.then((cheese) => {
     console.log("here is the cheese ", cheese);
     return makeDough(cheese);
})
.then((dough) => {
     console.log("here is the dough ", dough);
     return bakePizza(dough);
})
.then((pizza) => {
     console.log("here is the pizza ", pizza);
})
.catch((error) => {
     console.log("error ", error);
});