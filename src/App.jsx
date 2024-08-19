import React, { useEffect, useState } from 'react'; 
import './App.css';
import ProfileCard from '../components/ProfileCard';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return ( 
    <div className="App flex gap-4 flex-wrap"> 
      <div className="profile-card-container flex gap-100 flex-wrap justify-between ">
        {users.map(user => (
          <ProfileCard 
            name={user.name}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
