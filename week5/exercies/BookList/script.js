/* var books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true
    }
  ]; */
/* var books = [
    { 
        title: 'The Alchemist',
        author: 'Paulo Coelho', 
        year: 1988,
        alreadyRead: false
     },
    { 
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960, 
        alreadyRead: true
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949, 
        alreadyRead: true
    },
    { 
        title: 'The Great Gatsby',
         author: 'F. Scott Fitzgerald', 
         year: 1925,
         alreadyRead: false
    },
    { 
        title: 'Moby Dick', 
        author: 'Herman Melville', 
        year: 1851 ,
        alreadyRead: true
    }
];

const bookList = document.getElementById('book-list');

books.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} by ${book.author} (${book.year})`;
    bookList.appendChild(li);
}); */

/* const books =[
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988,
        image:'alc.png'
    },
    {
        title: 'The new book',
        author: 'no one',
        year: 1988,
        image:'great.png'
    }
]; */

const books = [
    { title: 'The Alchemist', author: 'Paulo Coelho', year: 1988, image: 'alc.png', read: true },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, image: 'to-kill.jpeg',read: false },
    { title: '1984', author: 'George Orwell', year: 1949,image: '1994.webp', read: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925,image: 'great.jpg', read: false },
    { title: 'Moby Dick', author: 'Herman Melville', year: 1851,image: 'moby.jpeg', read: true }
];
/* const bookList =document.getElementById('book-list');
books.forEach(book => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src =book.image;
    li.textContent =`${book.title} by ${book.author} in ${book.year} `;
    li.appendChild(img);
    bookList.appendChild(li);
});  */

const bookList = document.getElementById('book-list');
books.forEach(book => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = book.image;
    img.style.width = "100px"; 
    img.style.margin="0px";
    img.style.height="auto";
    img.style.padding="0px";
    img.style.borderColor="red";
    li.textContent = `${book.title} by ${book.author} in ${book.year} - ${book.read ? 'Read' : 'Not Read'}`;
    li.appendChild(img);
/*     li.removeChild()
 */    bookList.appendChild(li);
    
});

/* books.forEach(book => {
    if (book.read === true) {
        console.log(`${book.title} has been read.`);
    } else {
        console.log(`${book.title} has not been read.`);
    }
}); */
/* const bookList = document.getElementById('book-list');

        books.forEach(book => {
            const li = document.createElement('li');
            const bookStatus = book.read ? 'Read' : 'Not Read';
            const bookImage = document.createElement('img');
            bookImage.src = book.image;
            bookImage.alt = book.title;
            bookImage.style.width = `${book.width}px`; // Set the width using JavaScript

            li.textContent = `${book.title} - ${bookStatus}`;
            li.appendChild(bookImage);
            bookList.appendChild(li);
        }); */