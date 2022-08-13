/**

  Hashes are great for making passwords unreadable, 
  but because they always produce the same output, they are not very secure. 
  
  A salt is a random string that is added to the input before hashing. 
  
  This makes the hash more unique and harder to guess.

  Users often to use weak passwords, like “password123”. 
  
  When a database is compromised, 
  the attacker can easily find the value of an unsalted hash 
  by searching precomputed rainbow table of common hashes - salting fixes this.

  - Used to make a hash harder to guess
  - Appends a random string to the input before hashing

 */

  
/**
    
                            random salt                 salt
                                 +                        +
    Hello Marco  ------>  hashing function  ------>  D5ert876HCB...

 */

const {scryptSync, randomBytes, timingSafeEqual} = require("crypto");

function signup(email, password) {
  const salt = randomBytes(16).toString("hex");
  // console.log(salt)

  const hashedPassword = scryptSync(password, salt, 64).toString("hex");
  // store password by turn into string

  const user = {email, password: `${salt}:${hashedPassword}`};

  users.push(user);

  return user;
}

function login(email, password) {
  const user = users.find(v => v.email === email);

  const [salt, key] = user.password.split(":");
  const hashedBuffer = scryptSync(password, salt, 64);

  const keyBuffer = Buffer.from(key, "hex");
  // string -> bytes
  // 'd2e86...' -> <Buffer d2 e8 66 ...>

  const match = timingSafeEqual(hashedBuffer, keyBuffer);
  
  if (match) {
    return "login success!";
  } else {
    return "login fail!";
  }
}

const users = [];

const user = signup("foo@bar.com", "pa$$word");

console.log(user);

const result = login("foo@bar.com", "password");

console.log(result);
