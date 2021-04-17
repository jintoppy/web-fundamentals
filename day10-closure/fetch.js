fetch("https://api.github.com/users")
    .then((item) => item.json())
    .then((res) => {
        console.log(res);
    });

const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const result = await response.json();
    console.log(result);
};

getUsers();

//ES6
// class, fat arrow, template literal, let, const, async..await
