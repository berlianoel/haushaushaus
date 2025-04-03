document.querySelector('.enter-btn').addEventListener('click', () => {
    document.querySelector('.hero').style.opacity = '0';
    setTimeout(() => {
        alert("Welcome to the Dark Realm!");
    }, 1000);
});
