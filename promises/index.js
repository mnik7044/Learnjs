let ticket = new Promise(function(resolve,reject){
    const isBoarded = false;
    if(isBoarded){
        resolve("You caught the flight")  // resolve ko tab call karte hai jab hame pata ho ki hamara promise resolve hogaya hai
    }

    else{
        reject("Your flight is cancelled") // reject ko tab call krenge jab pata rhega ki hamara promise reject hogaya hai
    }
    
})



ticket.then((data) =>{console.log("woho")})
ticket.catch((data)=> {console.log("oh noo")})

//  Ye wala promise synchronous in nature hai next promise me asynchronous wale kaam krenge hamlog