// const app = require('./app')
// console.log("hello");
// var a=20;
// var b=30;
// console.warn(a+b);
// console.log(app.x)
//---------------------------------------------------
// function hello(req, res){
//     res.write("<h1>Hello server</h1>");
//     res.end();
// }

// const http = require('http');
// http.createServer(hello).listen(4500);
//---------------------------------------------------

// const http = require('http');
// const data = require('./data');
// http.createServer((req, res)=>{
//     res.writeHead(200,{'Content-Type':'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(4500);
//---------------------------------------------------

// const input = process.argv;
// console.log(input);
// const { log } = require('console');
// const fs = require('fs');
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("Invalid input");
// }
//---------------------------------------------------
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files')

// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/Hello${i}`,"Hello there")
// }
//---------------------------------------------------
// const fs = require('fs');
// const path = require('path');
// const dir = path.join(__dirname,'crud');
// const filePath = `${dir}/apple.txt`;
// fs.writeFileSync(filePath,'This is first text');
// fs.readFile(filePath,'utf8',(err, item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath, 'and this is second text',(err)=>{
//     if(!err) console.log('file is updated');
// });
// fs.rename(filePath,`${dir}/fruit.txt`,(err)=>{
//     if(!err) console.log("File renamed");
// })
// fs.unlinkSync(`${dir}/fruit.txt`);
//---------------------------------------------------

// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath = path.join(__dirname, 'public')

// app.get("/",(req,res)=>{
//     res.send("Hello Home Page");
// });
// app.get("/about",(req,res)=>{
//     let name = req.query.name;
//     res.send("Hello About Page"+ name);
// })
// app.get("/*",(req,res)=>{
//     res.send("Error Page");
// })
// app.use('/public',express.static(publicPath));

// app.get('',(req,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// })

// app.get('*',(req,res)=>{
//     res.sendFile(`${publicPath}/404page.html`)
// })
// app.listen(5000);
//-----------------------------------------------------------
// Application level middleware
// const express = require('express');
// const app = express();
// const reqFilter = (req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please provide age')
//     }
//     else if(req.query.age < 18){
//         res.send('Not Allowed')
//     }
//     else {
//         next();
//     }
    
// };
// app.use(reqFilter);
// app.get('/',(req,res)=>{
//     res.send("Hello Home page")
// })
// app.listen(5000,(err)=>{
//     if(err){
//         console.log("Error starting server");
//     }
//     else console.log(`Server started on port 5000`);
// });
//-----------------------------------------------------------
// Route Level middleware
// const express = require('express');
// const app = express();
// const reqFilter = (req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please provide age')
//     }
//     else if(req.query.age < 18){
//         res.send('Not Allowed')
//     }
//     else {
//         next();
//     } 
// };
// app.get('/',(req,res)=>{
//     res.send("Hello Home page")
// })
// app.get('/users',reqFilter,(req,res)=>{
//     res.send("Hello Users page")
// })
// app.listen(5000,(err)=>{
//     if(err){
//         console.log("Error starting server");
//     }
//     else console.log(`Server started on port 5000`);
// });
//-----------------------------------------------------------
// Route Level middleware - from another file
const express = require('express');
const app = express();
const reqFilter = require('./middleware');
app.get('/',(req,res)=>{
    res.send("Hello Home page")
})
app.get('/users',reqFilter,(req,res)=>{
    res.send("Hello Users page")
})
app.listen(5000,(err)=>{
    if(err){
        console.log("Error starting server");
    }
    else console.log(`Server started on port 5000`);
});