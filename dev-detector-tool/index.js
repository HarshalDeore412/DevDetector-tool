const theme = document.querySelector(".theme");
const error = document.querySelector(".error");
const searchValue = document.querySelector(".seachValue");
const searchBtn = document.querySelector(".submit");
const url = "https://api.github.com/users/";
const userImg = document.querySelector(".userImage");
const userName = document.querySelector(".userName");
const userProfileUrl = document.querySelector(".userProfileUrl");
const joinDate = document.querySelector(".userJoinedDate");
const firstView = document.querySelector(".firstView");
const repos = document.querySelector(".repoValue");
const followers = document.querySelector(".folowersCount");
const following = document.querySelector(".followingCount");
const bio = document.querySelector(".bio");
const userInfo = document.querySelector(".userInfo");

// const location = document.querySelector(".userLocation");
const userUrl = document.querySelector(".userUrl");
const twitter = document.querySelector(".twitterUrl");
const company = document.querySelector(".workPlace");

searchBtn.addEventListener("click", search);

async function search() {
  try {
    if (searchValue.value !== "") {
      const response = await (await fetch(url + searchValue.value)).json();
      console.log(response);
      console.log(response.message);
      setUserData(response);
    }
  } catch (Error) {
    error.innerText = `${Error}`;
  }
}

function setUserData(response) {
  if (response.message === "Not Found") {
    error.innerText = "User Not Found";
  } else {
    userInfo.classList.add("active");
    userImg.src = `${response.avatar_url}`;
    userName.innerText = `${response.name}`;
    userProfileUrl.href = `${response.html_url}`;
    userProfileUrl.innerText = `${response.login}`;
    joinDate.innerText = `${response.created_at}`;

    if (`${response.bio}` === "null") {
      bio.innerText = "User has no bio";
    }

    repos.innerText = `${response.public_repos}`;
    followers.innerText = `${response.followers}`;
    following.innerText = `${response.following}`;

    // links
    if (`${response.location}` === "null") {
      location.innerText = "not available";
    } else {
      location.innerText = `${response.location}`;
    }

    userUrl.href = `${response.html_url}`;

    userUrl.innerText = `${response.login}`;

    if (`${response.twitter_username}` === "null") {
      twitter.innerText = " not available";
    } else {
      twitter.innerText = `${response.twitter_username}`;
    }

    if (`${response.company}` === "null") {
      company.innerText = "not available";
    } else {
      company.innerText = `${response.company}`;
    }
  }
}
