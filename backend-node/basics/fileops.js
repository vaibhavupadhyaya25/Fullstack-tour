const fs = require('fs')
const os = require('os')    //every os has different end line character like ubuntu has '/n'
const { dirname } = require('path')

//to access the file from the folder it is kept
const FILE_PATH = __dirname + '/numbers.txt'
const OUT_FILE_PATH = __dirname + '/sortedfile.txt'
fs.readFile(FILE_PATH, function(err, data) {            //this uses a call back function
    if (err) throw err
    else console.log(data.toString())
    let nums = data.toString().split(os.EOL)
    console.log(nums.length)
    //break point debugging can be used, apply breakpoint and run with debugging, check values in variables at that instance from debugging fourth tab

    let sortednums = nums.sort((a, b) => a-b)
    console.log(sortednums)

    fs.writeFile(OUT_FILE_PATH, sortednums.join(os.EOL), function(err){
        if (err) throw err
    })
})