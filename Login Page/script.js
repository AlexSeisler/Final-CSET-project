if (!localStorage.getItem('users')) 
{
  const manager = 
  {
    manager:
    {
      name: "manager",
      email: "manager@manager",
      password: "manager"
    }
  };
  localStorage.setItem('users', JSON.stringify({manager}));
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
    email: email
  };

  // Save updated users back to localStorage
  localStorage.setItem('users', JSON.stringify(users));

  alert('Signup successful! You can now log in.');
}

function validateFormLog() {
  const users = JSON.parse(localStorage.getItem('users'));

  // Get login input values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check if the username exists
  if (!users[username]) {
    alert('Username not found. Please sign up first.');
    return;
  }

  // Check if the password matches
  if (users[username].password === password) {
    alert('Login successful! Welcome, ' + username + '!');
    // Redirect or perform other actions here
  } else {
    alert('Incorrect password. Please try again.');
  }
}

function reset() {
  // Clear form fields
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

function showStoredData() {
  console.log(JSON.parse(localStorage.getItem('users')));
}
function clearData() {
  localStorage.removeItem('users');
  alert('All localStorage data has been cleared!');
  if (!localStorage.getItem('users')) 
    {
      const manager = 
      {
        manager:
        {
          name: "manager",
          email: "manager@manager",
          password: "manager"
        }
      };
      localStorage.setItem('users', JSON.stringify({manager}));
    }
}
