const resultEl = document.querySelector(".result");
const detailsEl = document.querySelector(".details");

const fetchUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    renderUsersList(users);
};

const renderUsersList = (users) => {
    const trEls = users.map(user => {
        return `
            <tr>
                <td>${user.login}</td>
                <td><img src="${user.avatar_url}" height="150" alt="${user.login}" /></td>
                <td>
                    <button>Show Details</button>
                </td>
            </tr>
        `
    }).join('');
    resultEl.innerHTML = `
            <table>
            <thead>
                <tr>
                    <th>Login</th>
                    <th>Avatar</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${trEls}
            </tbody>
        </table>
    `;
};

const fetchRepoOfUser = () => {

};

const renderUserDetails = () => {

};

// fetchUsers();