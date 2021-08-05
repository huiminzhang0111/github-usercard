/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios.get('https://api.github.com/users/huiminzhang')
//   .then((res) => {
//     console.log(res)
//     // const myfollower = res.data.followers;
//     // console.log(myfollower);
//     // res.data.message.forEach(followers => {
//     //   const myfollower = 
//     // })
//   })
//   .catch(err => console.error(err));
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function getCards(){
  axios.get(`https://api.github.com/users/huiminzhang0111`)
    .then(res => {
      const userCard = usercardMaker(res.data)
      document.querySelector('.cards').appendChild(userCard);
    })
  .catch(err => console.error(err));
}


getCards()
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/tetondan','https://api.github.com/users/dustinmyers','https://api.github.com/users/justsml','https://api.github.com/users/luishrd','https://api.github.com/users/bigknell']
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function usercardMaker(user){
  //console.log('erroe?');
  //instantiating the elements
  const usercard = document.createElement('div');
  const image = document.createElement('img');
  const cardinfo = document.createElement('div');
  const heading = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  //setting class names, attributes, and txt

  usercard.classList.add('card');
  cardinfo.classList.add('card-info');
  heading.classList.add('name');
  username.classList.add('username');

  image.src = `${user.avatar_url}`;
  heading.textContent = `Login Info: ${user.login}`;
  username.textContent = `Name: ${user.name}`;
  location.textContent =`Location: ${user.location}`;
  profile.textContent = 'Profile: ';
  address.href = `${user.html_url}`
  address.textContent = user.html_url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Followeing: ${user.following}`;
  bio.textContent = `Bio Info: ${user.bio}`;

  //creating the hierarchy
  usercard.appendChild(image);
  usercard.appendChild(cardinfo);
  cardinfo.appendChild(heading);
  cardinfo.appendChild(username);
  cardinfo.appendChild(location);
  cardinfo.appendChild(profile);
  profile.appendChild(address);
  cardinfo.appendChild(followers);
  cardinfo.appendChild(following);
  cardinfo.appendChild(bio);

  //never forget to return
  return usercard;
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
