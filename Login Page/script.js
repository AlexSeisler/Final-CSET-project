
if (!localStorage.getItem('users')) 
{
  const users = 
  {
    'manager':
    {
      email: "manager@manager",
      password: "manager"
    }
  };
  localStorage.setItem('users', JSON.stringify(users));
}

if (!localStorage.getItem('loggedIn')){
  localStorage.setItem('loggedIn', false)
  }
function validateForm() {
  const users = JSON.parse(localStorage.getItem('users'));

  // Get input values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validation: Check if the username already exists
  if (users[username]) {
    alert('Username already taken. Please choose another.');
    return;
  }

  //email check
  for (const user in users) {
    if (users[user].email === email) {
      alert('Email already in use. Please use a different email.');
      return;
    }
  }

  // Add new user data
  users[username] = {
    password: password,
    email: email,
  };

  // Save updated users back to localStorage
  localStorage.setItem('users', JSON.stringify(users));
  
  sessionStorage.setItem('showPopup', 'true');

  // Redirect to login page (log.html)
  window.location.href = "log.html";
}
  // Hide popup after 3 seconds and redirect to login page
  

function validateFormLog() {
  const users = JSON.parse(localStorage.getItem('users'));
  console.log(users);
    users['manager'] =
    {
      password: "manager",
      email: "manager@manager"
    }
  // Get login input values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check if the username exists
  if (!users[username]) {
    console.log(users[username], username, users)
    alert('Username not found. Please sign up first.');
    return;
  }
  console.log(users[username])
  // Check if the password matches
  if (users[username].password === password) {
    localStorage.setItem('loggedIn', username)
    if ( users[username].password == users['manager'].password && username == 'manager'){
      alert('Welcome Manager!')
      window.location.assign('../layouts/manager.html');
      return
    }
    alert('Login successful! Welcome, ' + username + '!');
    if (localStorage.getItem('loginSend') != null){
      if (localStorage.getItem('loginSend') == 'payment'){
        window.location.assign('../layouts/payment.html');
        return;
      }
    }
    window.location.assign( '../layouts/mainpage.html' )
    // Redirect or perform other actions here
  } else {
    console.log(username, password, users['manager'])
    console.log(users['manager'])
    alert('Incorrect password. Please try again.');
  }
}

function reset() {
  // Clear form fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function showStoredData() {
  console.log(localStorage.getItem('users'));
}
function clearData() {
  localStorage.removeItem('users');
  alert('All localStorage data has been cleared!');
  if (!localStorage.getItem('users')) 
    {
      const manager = 
      { 
        'manager':
        {
          password: 'manager',
          email: 'manager@manager'
        },
        'a':{
          password: 'a',
          email: 'a@a'
        }
      };
      console.log(manager)
      localStorage.setItem('users', JSON.stringify(manager));
    }
}
