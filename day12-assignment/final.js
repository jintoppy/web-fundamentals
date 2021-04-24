const resultEl = document.querySelector('.result');
const detailsEl = document.querySelector('.details');


resultEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const username = e.target.getAttribute('data-abc');
    if (username) {
        const items = document.querySelectorAll('.item');
        items.forEach(item => item.classList.remove('active'));

        e.target.parentElement.parentElement.classList.add('active');
        fetchRepos(username);
    }
});



const renderUsers = (users) => {
    resultEl.innerHTML = users.map(user => {
        return `
            <div class="item">
                <h1>${user.login}</h1>
                <img src="${user.avatar_url}" height="150" />
                <p>
                    <button data-abc="${user.login}">Show repos</button>
                </p>                
            </div>
        `
    }).join('');
};

const renderRepos = (repos) => {
    detailsEl.innerHTML = repos
        .map(repo => `<p>${repo.full_name}</p>`)
        .join('');
};

const fetchRepos = async (login) => {
    detailsEl.innerHTML = '';
    const response = await fetch(`https://api.github.com/users/${login}/repos`);
    const result = await response.json();
    renderRepos(result);
}


const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    const result = await response.json();
    renderUsers(result);
};

fetchUsers();