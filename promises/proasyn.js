function getCheese(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>
        { const cheese = "🧀🧀"
           resolve(cheese)
        }, 2000)
    
    })
    

}

function makeDough(cheese){
    return new Promise((resolve,reject) => {
        setTimeout(()=>
        { const dough = cheese + "🍩"
          
           resolve(dough)
        }, 2000)
    
    })
    

}

function bakePizza(dough){
    return new Promise((resolve,reject) => {
        setTimeout(()=>
        { const pizza = dough + "🍕"
           
           resolve(pizza)
        }, 2000)
    
    })
    

}



getCheese().then((cheese)=>{
    console.log("Here is your cheese bro", cheese);
    return makeDough(cheese)
} ).then((dough) => {
    console.log("Here is your doughh bro", dough);
    return bakePizza(dough)
}).then((pizza) => { console.log("Here is your pizza bro", pizza);

}) .catch((data) => { console.log("Error occured")

}).finally(() => {console.log("Done with promises")})

// To run the same promises in javascript we have another syntax whixh is called async and await

async function orderPizza(){
    try{const cheese = await getCheese();
    console.log("We got the cheese", cheese)
    const dough = await makeDough(cheese)
    console.log("Here is the dough", dough)
    const pizza = await bakePizza(dough)
    console.log("Oizza is ready", pizza)

    }catch(error){console.log("Error occured", error)}
}// This is just synchronizing the asynchronous nature of the promise and is a better way then .then()

orderPizza()