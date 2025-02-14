import React from 'react';

const Card = ({ name, phone, email, username }) => {
  return (
    <div className="bg-white px-3 py-3 text-black mb-5 text-center rounded-lg shadow-md w-60 flex flex-col justify-between min-h-[220px]">
      <div> {/* Ensures text takes up space above */}
        <h2 className="text-xl font-['NeueMachina'] font-semibold">{name}</h2>
        <h3 className="mt-5 text-sky-700">{phone}</h3>
        <div className="mt-2 text-sm">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>

      <button className="mt-4 bg-emerald-800 hover:bg-emerald-600 px-3 py-2 rounded text-white w-full">
        Add Friend
      </button>
    </div>
  );
};

export default Card;
