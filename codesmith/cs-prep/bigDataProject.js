// Big Data
// Using Higher Order Functions to Reduce Large Amounts of Data
// Let's use higher order functions like map, filter, and reduce to gather information and manipulate some data. Here we are importing historical Bitcoin data from 2013 to 2015. Each object contains information like price, market cap, fees, and much more. Let’s see what information we can extract using higher order functions!

// To begin scroll down to line 8034 - click and drag the scrollbar that appears on the right as you begin scrolling to get there quickly.

// First, let's log the bitcoinData object to investigate the structure of our data.
// What is the data type of bitcoinData? Let’s say we just want to look at bitcoin information on May 1st, 2013. How can we do that?
// Let’s say we want to create an array containing only the date and price of each day. Use the built-in map method to create an array containing that information.
// Let’s create an array that only includes days when exchange volume was not 0. Which method should we use?
// Everyday, new Bitcoins are generated. If we want to find out how many were generated all together during the time that’s provided in the dataset, can you figure out how to calculate it using reduce?
// Bitcoin price fluctuates a lot. Let’s combine some array methods to find the total number of days when bitcoin price was over $100!
// And finally, let’s find the average bitcoin transaction fees between 2013 and 2015. Be sure to floor this value.

// challenge 1
console.log(bitcoinData);

// challenge 2
function getDate(dataset) {
  const result = [];
//   for (let i = 0; i < dataset.length; i += 1) {
//     if (dataset[i].date === "2013-05-01") {
//       result.push(dataset[i]);
//     }
//   }
//   return result;
  
  dataset.map((val) => {
    val.date === '2013-05-01' ? result.push(val) : 'Nothing found'
  });
  return result;
}

// challenge 3
function getDateAndPrice(data) {
  const result = [];
  data.map((value) => {
    if (value.date && value['price(USD)']) {
      const newObj = {};
      newObj.date = value.date;
      newObj.price = value['price(USD)'];
      result.push(newObj);
//         result.push(value.date + ', ~ ' + value['price(USD)'])
    }
  });
  return result;
}



// const exchangeNotZero = bitcoinData.filter(data => {
//   if(data['exchangeVolume(USD)'] !== 0) {
//     return data.date;
//   }
// });

// challenge 4
const exchangeNotZero = bitcoinData.map((data) => {
  const result = [];
  if (data['exchangeVolume(USD)'] !== 0) {
    result.push(data.date);
  }
  return result;
}).filter(item => item.length > 0);


// challenge 5
const reduceCoins = bitcoinData.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue.generatedCoins;
}, 0)

// challenge 6
const daysOver100 = bitcoinData.filter(data => data['price(USD)'] > 100).length;


// challenge 7
let finalResult = 0;

function averageBitcoin(bitcoinData) {
  const result = [];
  bitcoinData.map(data => {
  let result = [];
  let output = 0;
  if(data.date.substr(0,4) >= '2013' && data.date.substr(0,4) <= '2015'){
    	result.push(data.fees)
  }
	


  
})
  
    for(let i = 0; i < result.length; i++) {
    for(let j = 0; j < result[i].length; j++){
      console.log(result[i])
    }
  }
  
  
}
// const averageBitcoin = bitcoinData.map(data => {
//   let result = [];
//   let output = 0;
//   if(data.date.substr(0,4) >= '2013' && data.date.substr(0,4) <= '2015'){
//     	result.push(data.fees)
//   }
	
//   for(let i = 0; i < result.length; i++) {
//     for(let j = 0; j < result[i].length; j++){
//       console.log(result[i])
//     }
//   }
  

  
// })


console.log(averageBitcoin);
