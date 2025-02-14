import React, { useState } from 'react';
import Card from './components/Card';
import Nav from './components/Nav';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Add loading state

  const getUsers = async () => {
    setLoading(true); // ✅ Show loading before fetching
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // ✅ Hide loading after fetching
    }
  };

  return (
    <>
      <Nav />
      <div className='mt-10 bg-[#030712] px-7 w-full min-h-screen'>
        <button 
          onClick={() => {
            setUsers([]); // ✅ Reset users only if needed
            getUsers();
          }} 
          className='bg-red-700 rounded px-3.5 active:scale-90 text-lg py-2'
        >
          {loading ? "Loading..." : "Get Users"}
        </button>

        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 text-white">
          {users.length === 0 && !loading && <p className="text-gray-300 text-lg mt-5">No users to display</p>}
          {users.map((user) => (
            <Card 
              key={user.id}
              name={user.name} 
              phone={user.phone} 
              email={user.email} 
              username={user.username} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
