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
