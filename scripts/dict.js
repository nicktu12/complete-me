// import fs from 'fs'
const fs = require('fs');


// const text = "/usr/share/dict/words"
// const dictionary = fs.readFileSync(text).toString().trim().split('\n')
const dictionary = fs.readFileSync("/usr/share/dict/words").toString().trim().split('\n')

// module.exports = { dictionary };
export default dictionary
