document.getElementById('userForm').onsubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    const response = await fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
  
    const result = await response.json();
    alert(result.message);
  };
  
  document.getElementById('getUsers').onclick = async () => {
    const response = await fetch('/users');
    const listOfUser = await response.json();
  
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    listOfUser.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  };
  