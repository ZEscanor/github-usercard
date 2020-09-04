import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
console.log(axios);
console.log(axios.get('https://api.github.com/users/ZEscanor'));


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
axios.get('https://api.github.com/users/ZEscanor')
 .then(stuff => {
   const doIt = stuff.data;
   console.log(stuff.data.avatar_url);
   htmlMaker(doIt);

 })
 .catch(err => {
   console.log("IT AINT BE WORKING")
   //debugger;
})
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["JustinMrks","ElleTinajero","willwearing","RNRTxScott","seanshadle"];
followersArray.forEach(item=>{
  let html = `https://api.github.com/users/${item}`
  axios.get(html)
 .then(stuff => {
   const doIt = stuff.data;
   console.log(stuff.data.avatar_url);
   htmlMaker(doIt);

 })
 .catch(err => {
   console.log("IT AINT BE WORKING")
   //debugger;
})
})
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
function htmlMaker(objecB){
  const divMaker = document.createElement("div")
  const imgMaker = document.createElement("img")
  const inisdeDiv = document.createElement("div")
  const h3maker = document.createElement("h3")
  const pMaker = document.createElement("p")
  const pMaker2 = document.createElement("p")
  const pMaker3 = document.createElement("p")
  const pMaker4 = document.createElement("p")
  const pMaker5 = document.createElement("p")
  const pMaker6 = document.createElement("p")
  const aMaker = document.createElement("a")

  divMaker.appendChild(imgMaker);
  divMaker.appendChild(inisdeDiv);
  inisdeDiv.appendChild(h3maker);
  inisdeDiv.appendChild(pMaker);
  inisdeDiv.appendChild(pMaker2);
  inisdeDiv.appendChild(pMaker3);
  inisdeDiv.appendChild(pMaker4);
  inisdeDiv.appendChild(pMaker5);
  inisdeDiv.appendChild(pMaker6);
 pMaker3.appendChild(aMaker);

 divMaker.classList.add("card")
imgMaker.setAttribute('src',objecB.avatar_url);
inisdeDiv.classList.add("card-info")
h3maker.classList.add("name")
h3maker.textContent = objecB.name;
pMaker.classList.add("username")
pMaker.textContent = objecB.login
pMaker2.textContent = objecB.location
pMaker3.textContent = "Profile:"
aMaker.setAttribute('href',objecB.html_url);
aMaker.textContent = objecB.html_url;
pMaker4.textContent = `Followers: ${objecB.followers}`
pMaker5.textContent = `Following: ${objecB.following}`
pMaker6.textContent =`Bio: ${objecB.bio}`;
  const hello = document.querySelector(".cards")
  hello.append(divMaker);

  return hello;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
