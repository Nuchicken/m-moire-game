function startGame(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        localStorage.setItem('username', username);
        window.location.href = 'game.html';
    } else {
        alert("Please enter a username.");
    }
}