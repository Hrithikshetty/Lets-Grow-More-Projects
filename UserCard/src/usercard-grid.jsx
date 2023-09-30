import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserCard.css'; // You can define your custom CSS here

const UserCard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://reqres.in/api/users?page=1');
        setUsers(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="brand-name">Your Brand Name</div>
        <button className="get-users-button">Get Users</button>
      </nav>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-card-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.first_name} />
              <div className="user-info">
                <h2>{`${user.first_name} ${user.last_name}`}</h2>
                <p>Email: {user.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserCard;
