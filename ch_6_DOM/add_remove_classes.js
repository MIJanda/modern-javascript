// adding and removing classes 
const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if (para.textContent.includes('error')) {
        para.classList.add('error');
    }

    if (para.textContent.includes('success')) {
        para.classList.add('success');
    }
});

// To remove a class use the <element>.classList.remove(<class>) method
