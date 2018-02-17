// Init Github
const github = new Github;
// Init UI
const ui = new UI;

// Search input 
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => data.profile.message === 'Not Found' ? alert('User not found') : ui.showProfile(data.profile))
  } else {
    // Clear profile
    ui.clearProfile();
  }
});