console.log(`hello`)


// prompt the user to enter to enter flavors they have had seperated by commas.

  // enter defaul values
  const userInput = prompt(`please enter your flavors`,`vanilla,vanilla,vanilla,strawberry,coffee,coffee`)

// create funtion that...
const flavorSaver = (flavorString) => {


  // 
  //  slice string into array and name it

let flavorArray = flavorString.split(`,`)

// console.log(flavorArray)

  // create empty object named flavors by visit ro something like that
let flavorObject = {}
// console.log(flavorObject)
    //  make for loop on the array that...

  for (let i = 0; i < flavorArray.length; i++) {
    let currentFlavor = flavorArray[i];

    console.log(`outer loop`)
    // console.log(flavorArray[i])
          // assigns currewnt value from array index
    // console.log(currentFlavor)
    console.log(`is currentFlavor = undefined`)
    console.log(Boolean(flavorObject[flavorArray[i]] === undefined) )
    if (flavorObject[flavorArray[i]] === undefined) {
      // else? if the current array item (flavor) is not in the object flavor (ie object.arrayitem is not defined)
      // then create a new key on the object with the name that is the string of the current array value and set it to 1
      flavorObject[flavorArray[i]] = 1;
      // console.log(flavorObject)
    }
    console.log(flavorObject)
    console.log(currentFlavor)
    
          //  make interior for in loop on flavors by visit that.
  
    for (keys in flavorObject) {
      console.log(`inner loop`)
      console.log(keys)
       console.log(currentFlavor)  
      // check if current value is the same as the current flavors
      console.log(`is currentFlavor  = to keys`)
      console.log(Boolean(currentFlavor === keys))
      if (currentFlavor === keys) {
                  // then take the current value of that keys element and add 1
        flavorObject[keys] =+ 1
      } 
      }
      // console.log(`hello man`)
}
console.log(flavorObject)

return flavorObject

    }

    
// return funtoin




// call funtoin with inpput from the user

// flavorSaver(userInput)

// create an alert to the user telling them what is in the array
alert(flavorSaver(userInput))
