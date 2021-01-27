// const form = document.querySelector('#tweetForm');

// const usr = document.querySelector('#username');
// const txt = document.querySelector('#tweet');

// const tweetList = document.createElement('ul');
// document.body.appendChild(tweetList);

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newTweet = document.createElement('li')
//     newTweet.innerHTML = '<b>' + usr.value + '</b>' + " " + txt.value;
//     tweetList.appendChild(newTweet);

// });

//TEACHER'S SOLUTION

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(event){
    event.preventDefault();

    const userName = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(userName.value, tweetInput.value);
    //cleaning for a new submition
    userName.value = '';
    tweetInput.value = '';
});

const addTweet = (username,tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetContainer.appendChild(newTweet);
};

// TO REMOVE WHEN CLICKING THE LIST OF TWEETS
tweetContainer.addEventListener('click', function(e){
    console.dir(e.target);
    e.target.nodeName === 'LI' && e.target.removeEventListener();
})