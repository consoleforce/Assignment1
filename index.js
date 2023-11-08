
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        navigateNext();
    } else if (event.key === 'ArrowLeft') {
        navigatePrevious();
    }
});
function navigateNext() {
    const currentPage = getCurrentPage();
    if (currentPage === 'page1.html') {
        window.location.href = 'page2.html';
    } else if (currentPage === 'page2.html') {
        window.location.href = 'page3.html';
    }
    // You can add more logic for handling other cases.
}

function navigatePrevious() {
    const currentPage = getCurrentPage();
    if (currentPage === 'page2.html') {
        window.location.href = 'page1.html';
    } else if (currentPage === 'page3.html') {
        window.location.href = 'page2.html';
    }
    // You can add more logic for handling other cases.
}

function getCurrentPage() {
    return window.location.pathname.split('/').pop();
}















