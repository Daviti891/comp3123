/*
Purpose: Act as an API developer and create a new Promise to either Resolve or reject
*/
function fetch_games(){
    return new Promise((resolve, reject) => {
        let isRegistered = true
        setTimeout(() => {
            if(isRegistered){
                const gamesJSON = {
                    monday: "Leafs",
                    tuesday: "raptors"
                }
                let gamesJSONstr = JSON.stringify(gamesJSON)
                resolve(gamesJSONstr)
            }else{
                reject("You must be a registed member first!!")
            }
        },2000)
    })
}

async function run_games(){
    let result_from_promise = await fetch_games()
    console.log(result_from_promise)
    const gamesJSONparsed = JSON.parse(result_from_promise)
    console.log(gamesJSONparsed)
    console.log(gamesJSONparsed.monday)
}

run_games()
let someStrToPrint = "bob"
console.log(someStrToPrint)