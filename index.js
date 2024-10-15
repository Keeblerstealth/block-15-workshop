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
const flavorObject = {}
// console.log(flavorObject)
    //  make for loop on the array that...


  for (let i = 0; i < flavorArray.length; i++) {
    const currentFlavor = flavorArray[i];
          // assigns currewnt value from array index
    console.log(currentFlavor)
    
          //  make interior for in loop on flavors by visit that.
  
    for(key in flavorObject) {
      console.log(`hello man`)
      console.log(key)
      console.log(currentFlavor)  
      // check if current value is the same as the current flavors
      if (currentFlavor === key) {
                  // then take the current value of that keys element and add 1
        flavorObject.key = flavorObject.key + 1
      } else if (flavorObject.currentFlavor === undefined) {
          // else? if the current array item (flavor) is not in the object flavor (ie object.arrayitem is not defined)
          // then create a new key on the object with the name that is the string of the current array value and set it to 1
          flavorObject.currentFlavor = 1
        }
      }
      // console.log(`hello man`)
}
console.log(flavorObject)

return flavorObject

    }

    
// return funtoin

// return flavorObject;


// call funtoin with inpput from the user

// flavorSaver(userInput)

// create an alert to the user telling them what is in the array
alert(flavorSaver(userInput))
