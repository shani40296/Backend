// node.js Basics:
// Introduction to Node.js.
// Installing Node.js and npm.
// node & npm
// working with node and npm
// node basic usage
// Working with modules.
// File system operation.
// understanding HTTP module

// const fs = require('fs');
// fs.writeFile("hey.txt", "hey hello kaise ho", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })
// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// internet par kuchh bhi karne ke liye rules banaaye gaye hai unke dwaara jinhone internet banaaya hai, ab un rules ko follow karna jaruri hai, aur ye rule follow ho esliye ye rule aap ke operating system ke software mein pre installed aate hai

// http - protocol hai ya rule hai jisko follow kare bina aap internet pe na hi kuchh bhej sakte ho, na hi kuchh mang sakte ho

const http = require('http');
 const server = http.createServer(function(req, res){
    res.end("hello world!")
 })
 server.listen(3000);