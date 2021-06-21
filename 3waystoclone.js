const food = { beef: '🥩', bacon: '🥓' }


// "Spread operator"
const val = {...food }  // shallow clone


// "Object.assign"
Object.assign({}, food) //  // shallow copy doesnt mutate original object


// "JSON"
JSON.parse(JSON.stringify(food))   // costly operation

// RESULT:
// { beef: '🥩', bacon: '🥓' }
