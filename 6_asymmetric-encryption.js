/**
    Asymmetric encryption depends on two keys. 
    
    Encrypt a message with the public key and decrypt it with the private key.
    
    Asymmetric encryption is used on the web 
    whenever you use HTTPS to establish an encrypted connection to that website. 
    
    The browser finds the public key of an SSL certificate installed on the website, 
    which is used to encrypt any data you send, then the private key decrypts it.
 */

/**
                 encrypt                  decrypt
    Hello Marco  ------>  D5ert876HCB...  ------>  Hello Marco
                    |                        |
                    |                        |
                public key               private key  

 */

const {  publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./5_keypair');

secretMessage = 'the british are coming!'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(secretMessage),
    // secretMessage // 直接丟 string 也可以
);

console.log(encryptedData.toString('hex'))

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

// console.log(decryptedData);
console.log(decryptedData.toString('utf-8'));