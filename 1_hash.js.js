// https://fireship.io/lessons/node-crypto-examples/

/**

  The word hash actually has culinary roots. 
  
  It means to chop and mix and that perfectly describes what a hashing function does. 
  
  It takes an input value of any length and outputs a fixed length value. 
  
  Hashing algorithms, like SHA (Secure Hashing Algorithm), 
  produce a random, unique, fixed-length string from a given input. 
  
  They are often used to compare two values, like passwords, for equality.

  - The same input will always produce the same output.
  - Fast to compute, but computationally expensive to find the original input
  - Small probability of collision (unique)

 */

/**
    
  Hello Marco  ------>  hashing function  ------>  D5ert876HCB...
                       (md5, sha, argon2)
 */

const {createHash} = require("crypto");

// Create a string hash

function hash(str) {
  return createHash("sha256").update(str).digest("hex");
  // digest('hex'):
  // > 7ad584e61a2234b450185fde58c237bb13e93d90f669b114d69f293780e128ce
  // digest('base64'):
  // > etWE5hoiNLRQGF/eWMI3uxPpPZD2abEU1p8pN4DhKM4=
}

// Compare two hashed passwords

let password = "hi-mom!";
const hash1 = hash(password);
console.log(hash1);

/// ... some time later

password = "hi-mom";
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? "✔️  good password" : "❌  password does not match");
