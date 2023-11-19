import React from 'react';


export default function YourArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-army-container">
      <h2>Your Army</h2>
      {army &&
        Array.isArray(army) &&
        army.map((bot) => (
          <div key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>{bot.name}</p>
            <button onClick={() => onRelease(bot)}>Release</button>
            <button onClick={() => onDischarge(bot.id)}>Discharge</button>
          </div>
        ))}
    </div>
  );
}
