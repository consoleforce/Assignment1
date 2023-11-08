document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        navigateNext();
    } else if (event.key === 'ArrowLeft') {
        navigatePrevious();
    }
});

console.log("1123123")

function navigateNext() {
    const currentPage = getCurrentPage();
    if (currentPage === 'car1.html') {
        window.location.href = 'car2.html';
    } else if (currentPage === 'car2.html') {
        window.location.href = 'car3.html';
    }
    // You can add more logic for handling other cases.
}

function navigatePrevious() {
    const currentPage = getCurrentPage();
    if (currentPage === 'car2.html') {
        window.location.href = 'car1.html';
    } else if (currentPage === 'car3.html') {
        window.location.href = 'car2.html';
    }
    // You can add more logic for handling other cases.
}

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}


