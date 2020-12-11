const article = document.querySelector('article');

Array.from(article.children).forEach(child => {
    console.log(child);
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement);
console.log(title.previousElementSibling);
console.log(title.nextElementSibling);

// chaining - however, rarely used 
console.log(title.nextElementSibling.parentElement.children);
