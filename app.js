const form = document.querySelector('#tweetForm');

const usr = document.querySelector('#username');
const txt = document.querySelector('#tweet');

const tweetList = document.createElement('ul');
document.body.appendChild(tweetList);

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newTweet = document.createElement('li')
    newTweet.innerText = usr.value + ' ' + txt.value;
    tweetList.appendChild(newTweet);

});