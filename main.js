// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeBtn = document.querySelectorAll('.like-glyph')

likeBtn.forEach(btn => btn.addEventListener('click', e => {
  mimicServerCall()
  .then(() => {
    activeHeart(e)
  })
  .catch(() => {
    displayServerError()
  })
}))

function activeHeart(e) {
   let heart = e.target
  if (heart.className !== 'activated-heart') {
    heart.textContent = FULL_HEART
    heart.className = 'activated-heart'
  } else {
    heart.classList.remove('activated-heart')
    heart.textContent = EMPTY_HEART
  }
  // e.target.textContent === EMPTY_HEART ?  e.target.textContent = FULL_HEART : e.target.textContent = EMPTY_HEART
}

function displayServerError() {
  const modal = document.getElementById('modal')
  modal.classList.remove('hidden')
  setTimeout(function(){modal.className = 'hidden'},3000)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
