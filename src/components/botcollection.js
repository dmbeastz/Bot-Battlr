import { useState, useEffect } from "react";

const BotCollection = ({ bots, onAddToArmy, onViewDetails }) => {
  useEffect(() => {

    console.log(bots);
  }, [bots]);

  return (
    <div className="bot-collection-container">
      <h2>Bot Collection</h2>
      {bots && bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name}></img>
          <p>{bot.name}</p>
          <p>{bot.bot_class}</p>
          <button onClick={() => {onAddToArmy}}>Add to Army</button>
          <button onClick={() => {onViewDetails}}>View Details</button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
