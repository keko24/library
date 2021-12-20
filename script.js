function Book(title, author, pages, read)
{
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.toggleRead = function()
{
	if (!this.read)
		this.read = true;
	else
		this.read = false;
}

function addBookToLibrary(book)
{
	myLibrary.push(book)
}

function createBook()
{
	const title = prompt('Enter the title of the book you want to add to your library: ');
	const author = prompt(`Enter the author of ${title}: `);
	const pages = prompt(`How many pages does ${title} have?`);
	const read = (prompt(`Have you read ${title}: `).toLowerCase() === 'yes') ? true : false;  
	const b = new Book(title, author, pages, read);
	addBookToLibrary(b);
	createCard(b);	
}

function createCard(book)
{
	const card = document.createElement('div');
	const titleText = document.createElement('p');
	titleText.innerHTML = `Title:<br>${book.title}`;
	titleText.classList.add('title-text');
	card.appendChild(titleText);
	const authorText = document.createElement('p');
	authorText.innerHTML = `Author:<br>${book.author}`;
	authorText.classList.add('author-text');
	card.appendChild(authorText);
	const pagesText = document.createElement('p');
	pagesText.innerHTML = `Number of pages:<br>${book.pages}`;
	pagesText.classList.add('pages-text');
	card.appendChild(pagesText);
	const readText = document.createElement('p');
	readText.innerHTML = `Reading status:<br>${book.read ? "Read" : "Haven't read yet"}`;
	readText.classList.add('read-text');
	card.appendChild(readText);
	card.setAttribute('id', `book${myLibrary.length - 1}`);
	card.classList.add('card');
	const rmvBtn = document.createElement('button');
	rmvBtn.textContent = 'Remove book from library';
	rmvBtn.classList.add('remove-button', `${myLibrary.length - 1}`);
	rmvBtn.addEventListener('click', removeBook);
	const readBtn = document.createElement('button');
	readBtn.textContent = 'Toggle read';
	readBtn.classList.add('read-button', `${myLibrary.length - 1}`);
	readBtn.addEventListener('click', changeRead);
	card.append(readBtn);
	card.append(rmvBtn);
	container.appendChild(card);
}

function changeRead(e)
{	
	const book = document.querySelector(`#book${e.target.classList[1]}`);
	let bookFromLibrary = myLibrary[e.target.classList[1]];
	bookFromLibrary.toggleRead();
	const readText = book.querySelector('.read-text'); 
	readText.innerHTML = `Reading status:<br>${bookFromLibrary.read ? 'Read' : "Haven't read yet"}`;
}

function removeBook(e)
{
	const book = document.querySelector(`#book${e.target.classList[1]}`);
	book.remove();
}

const container = document.querySelector('#container');
const newBookBtn = document.querySelector('#new-book');
newBookBtn.addEventListener('click', createBook); 

let myLibrary = [];
let a = new Book('Game of Thrones', 'George R. R. Martin', 295, false);
let b = new Book('Harry Potter', 'J. K. Rowling', 305, true);
addBookToLibrary(a);
createCard(a);
addBookToLibrary(b);
createCard(b);
