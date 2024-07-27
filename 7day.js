// task 1
const book = {
    title : "hello world",
    author : "Shubham singh",
    year : "2003"
}
// task 2
console.log(book.title)
console.log(book.author)
// task 3
book.all = function()
{
    console.log(`book title is ${this.title} and book author is ${this.author}`)
}

console.log(book.all())
// task 4
book.year = function(year)
{
    console.log(`book year is {this.year}`)
}
console.log(book)
// task 5
const library= {
    name : "shubham singh",
    books :  [
        {
            title : "karan",
            name : "wings in the sky",
        },
        {
            title : "rohan",
            name : "let the bird fly in th sky",
        }
    ]
}
console.log(library)
// task 6
console.log(library.name)
console.log(library.books[0].title)
// task 7 already done

//task 8
for (const key in book) {
    if (Object.hasOwnProperty.call(book, key)) {
        const element = book[key];  
        console.log(`${key}: ${element}`);  
    }
}
// task 9
const keys=Object.keys(book)
const values=Object.keys(book)
keys.forEach((key, index) => {
    console.log(`${key}: ${values[index]}`);
});






    

