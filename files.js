const fs = require('fs')
// fs: file system

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})

// executes this line of code below first, because the one on top takes a little while to be executed, to JS carries on.
console.log('last line');


// writing files
fs.writeFile('./docs/blog2.txt', 'hello, boyz', () => {
    console.log('file was written O\'whateva');
});


// directories
// mkdir: make directory
if (!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if (err){
        console.log(err);
    }
    console.log('folder created browser');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('she deleted');
    })
}


// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log('she gone o\'whatevaaaa');
    })
}