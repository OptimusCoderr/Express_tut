const {readFileSync, writeFileSync} =  require('fs');

const first =  readFileSync('./content/first.txt','utf-8')
const second =  readFileSync('./content/second.txt','utf-8')

console.log(first,second)
writeFileSync(
    './content/result.txt',
    `This is the result of the first and second file: ${first}, ${second}`
)