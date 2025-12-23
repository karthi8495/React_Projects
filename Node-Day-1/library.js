const fs = require("fs");
const path = require("path");

const chalk = require("chalk");


const libraryPath = path.join(__dirname,"library");

if (fs.existsSync(libraryPath)) {
    console.log("Library already exists");
} else {
    fs.mkdirSync(libraryPath);
    console.log("Library Created")
}

function addBook(bookName, content){
    const bookPath = path.join(libraryPath, `${bookName}.txt`);
    fs.writeFileSync(bookPath,content, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(chalk.green(`Book ${bookName} added successfully`));
        }
    });
}

addBook("book2","This is the content of book2");