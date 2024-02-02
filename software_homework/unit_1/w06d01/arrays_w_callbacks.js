
// Week 6 Day 1 Lab 

const nums = [1,2,3,4,5,6,7,8,9,10,0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every # 1

const checkZero = nums.every((nums) => nums >= 0)
console.log( checkZero )

//Every # 2

const wordLength = panagram.every((word) => word.length < 8 )
console.log(wordLength)

// Filter # 1

const lessThanFour = nums.filter((num) => num < 4)
console.log(lessThanFour);

//Filter # 2

const evenLength = panagram.filter((word) => word.length % 2 === 0 )
console.log(evenLength)

//Find # 1

const divisibleByFive = nums.find((num) => num % 5 === 0)
console.log(divisibleByFive) ;

// Find # 2

const longerThan5 = panagram.find((word) => word.length > 5) ; 
console.log(longerThan5) ;

//Find Index #1

const divisibleBy3 = nums.findIndex((num) => num % 3 === 0) 
console.log(divisibleBy3); 

//Find Index # 2

const lessThan2 = panagram.findIndex((word) => word.length < 2)
console.log(lessThan2);

// For Each # 1

const multiplyBy3 = nums.forEach((num) => console.log(num *3))


// For Each # 2 

const addExclamation = panagram.forEach((word) => console.log(word + "!"))

// Map # 1

const multiplyBy100 = nums.map((num) => num * 100)
console.log(multiplyBy100)


// Map # 2

const uppercaseLetters = panagram.map((word) => word.toUpperCase());
console.log(uppercaseLetters)

//Some # 1 (some method checks to see whether any element meets a certain condition) 

const divisibleBy7 = nums.some((num) => num % 7 ===0) 
console.log(divisibleBy7) ;

//Some # 2

const checkLetterA = panagram.some((word) => word.includes("a"))
console.log(checkLetterA) ; 

// Reduce # 1 (Reduce method iterates through an array, performing a callback function on each element, accumulating a result, and will return a single value from the entire array)

const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum); 

// Reduce # 2 

const connectWords = panagram.reduce((accumulator, currentValue) => accumulator + currentValue + " ")
console.log(connectWords) ; 


// Sort # 1 (arranges things in alphabetical or numerical order)

const sortNumbers = nums.sort() ;
console.log(sortNumbers);

//Sort # 2

const sortWords = panagram.sort();
console.log(sortWords) ; 

//Sort # 3

const increasingNumbers = nums.sort((a,b) => a - b)
console.log(increasingNumbers) ; 

// Sort # 4 

const decreasingNumbers = nums.sort((a,b) => b - a )
console.log(decreasingNumbers) ; 

// Sort # 5

const increasingWords = panagram.sort() ;
console.log(increasingNumbers) ; 

// Sort # 6
const decreasingWords = panagram.sort((a,b) => b - a)
console.log(decreasingWords) ; 

//Array Methods Challenge Problems

//Need to work this one out more....the every method needs tweaking..it does return true?
const isPanagram = function() {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    for (let i = 0 ; i < panagram.length ; i++) {
         if (panagram.every((letter) => letter.includes(alphabet[i]))) {
            return true ; 
         } else {
         return false 
        }
    }
}

console.log(isPanagram()) ; 


///Working with Data 

const products = [
    {
      "name": "allen wrench",
      "price": 2.99,
      "description": "handy tool"
    },
    {
      "name": "cornucopia",
      "price": 5.99,
      "description": "festive holiday decoration"
    },
    {
      "name": "banana",
      "price": 0.99,
      "description": "full of potassium"
    },
    {
      "name": "guillotine (cigar)",
      "price": 10.59,
      "description": "behead your stub"
    },
    {
      "name": "jack-o-lantern",
      "price": 3.99,
      "description": "spooky seasonal fun"
    },
    {
      "name": "doggie treat (box)",
      "price": 5.99,
      "description": "fido loves 'em"
    },
    {
      "name": "egg separator",
      "price": 3.99,
      "description": "it separates yolks from whites"
    },
    {
      "name": "LED lightbulb",
      "price": 6.55,
      "description": "It's super-efficient!"
    },
    {
      "name": "owl pellets",
      "price": 3.99,
      "description": "Don't ask what they used to be."
    },
    {
      "name": "flag",
      "price": 5.99,
      "description": "catches the breeze"
    },
    {
      "name": "hair brush",
      "price": 6.99,
      "description": "fine boar bristles"
    },
    {
      "name": "iridium (one gram)",
      "price": 19.36,
      "description": "corrosion-resistant metal"
    },
    {
      "name": "quark",
      "price": 0.01,
      "description": "Very small"
    },
    {
      "name": "turtleneck",
      "price": 19.99,
      "description": "available in black and slightly-darker black"
    },
    {
      "name": "kaleidoscope",
      "price": 8.25,
      "description": "tube with moving plastic pieces inside"
    },
    {
      "name": "mitt (leather)",
      "price": 15,
      "description": "regulation sized"
    },
    {
      "name": "nothing",
      "price": 10,
      "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
      "name": "violin",
      "price": 2000,
      "description": "Talk about a JS fiddle..."
    },
    {
      "name": "yoyo",
      "price": 1,
      "description": "We had to pull some strings to get this one in."
    },
    {
      "name": "pincushion",
      "price": 1.99,
      "description": "You'll get 'stuck' on it"
    },
  ]

const cheapProducts = products.filter((product) => product["price"] < 10) ;
<<<<<<< HEAD
console.log(cheapProducts)

const orderedProdcuts = function() {
    const newArr = []; 
    for (let i = 0 ; i < products.length ; i ++) {
        newArr.push(products[i]["name"])
    }
    console.log(newArr)
    const sortNewArr = newArr.sort();
    console.log(sortNewArr) ; 
}
 
console.log(orderedProdcuts()) ; 
=======
console.log(cheapProducts)
>>>>>>> d0ede12221f7de49834ee89aaa50397df127d9e2
