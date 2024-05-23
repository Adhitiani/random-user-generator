const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
  let usersRequest = await fetch("https://randomuser.me/api?results=5");
  let data = await usersRequest.json();
  let userResults = data.results;
  displayUsers(userResults)
}

const displayUsers = function (userResults) {
  randomFolks.innerHTML = "";
  for (let user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
      <h3>${name}</h3>
      <p>${country}</p>
      <img src=${imageUrl} alt="User avatar" />
    `
    randomFolks.append(userDiv)
  }

}

getData();
