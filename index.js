function startGame(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        const usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        usernames.push(username);
        localStorage.setItem('usernames', JSON.stringify(usernames));
        window.location.href = 'game.html';
    } else {
        alert("Please enter a username.");
    }
}