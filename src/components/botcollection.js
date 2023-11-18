import { useState, useEffect } from "react";

const BotCollection = ({ bots }) => {
  useEffect(() => {

    console.log('Bots data changed:', bots);
  }, [bots]);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots && bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name}></img>
          <p>{bot.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
