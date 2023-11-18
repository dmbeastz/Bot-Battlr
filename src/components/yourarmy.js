export default function YourArmy({ Army, onRelease, onDischarge }) {
    return (
      <div>
        <h2>Your Army</h2>
        {Army && Array.isArray(Army) && Army.map((bot) => (
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
  