/*
function loadLeaderboard() {
    const usernames = JSON.parse(localStorage.getItem('usernames')) || []; 
    const leaderboard = document.getElementById('leaderboard'); 

    leaderboard.innerHTML = '';

    usernames.forEach(username => {
        const li = document.createElement('li'); 
        li.textContent = username; 
        leaderboard.appendChild(li); 
    });
}

window.onload = loadLeaderboard;

document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'index.html';
});
*/





function startGame(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value;
    if (username) {
        const usernames = JSON.parse(localStorage.getItem('usernames')) || [];
        usernames.push(username);
        localStorage.setItem('usernames', JSON.stringify(usernames));
        
        // Clear the input field
        usernameInput.value = '';
        
        window.location.href = 'game.html';
    } else {
        alert("Please enter a username.");
    }
}