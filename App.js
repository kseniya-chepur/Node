const fs = require('fs');
const path = require('path');

const filePath1800 = path.join(process.cwd(), '1800')
console.log(filePath1800)
const filePath2000 = path.join(process.cwd(), '2000')
console.log(filePath2000)
const filePathTemp1 = path.join(process.cwd(), 'temp1')
console.log(filePathTemp1)
const filePathTemp2 = path.join(process.cwd(), 'temp2')
console.log(filePathTemp2)


fs.readdir(filePath1800, (err, files) => {
    if(err) {
        console.log(err);
    }
    else {
        files.forEach(file =>
            fs.rename(path.join(filePath1800, file), path.join(filePathTemp1, file), err1 => {
                if(err1) {
                    console.log(err1)
                }
            }))
    }})

fs.readdir(filePath2000, (err, files) => {
    if(err) {
        console.log(err);
    }
    else {
        files.forEach(file =>
            fs.rename(path.join(filePath2000, file), path.join(filePathTemp2, file), err1 => {
                if(err1) {
                    console.log(err1)
                }
            }))
    }})

fs.readdir(filePathTemp1, (err, files) => {
    if(err) {
        console.log(err);
    }
    else {
        files.forEach(file => 
            fs.rename(path.join(filePathTemp1, file), path.join(filePath2000, file), err1 => {
                if(err1) {
                    console.log(err1)
                }
            }))
    }})

 fs.readdir(filePathTemp2, (err, files) => {
    if(err) {
        console.log(err);
    }
    else {
        files.forEach(file => 
            fs.rename(path.join(filePathTemp2, file), path.join(filePath1800, file), err1 => {
                if(err1) {
                    console.log(err1)
                }
            }))
    }}) 

    
