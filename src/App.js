import { useState, useEffect } from 'react';
import BotCollection from './components/botcollection';
import YourArmy from "./components/yourarmy";
import BotSpecs from "./components/botspecs";
import SortBar from "./components/sortbar";
import './style/botcollection.css';
import './style/yourarmy.css';
import './style/botspecs.css';

function App() {
  const API_URL = 'http://localhost:3000/bots';

  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState ([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortKey, setSortKey] =useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        setBots(data || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  const handleAddToArmy =(bot) => {
    setArmy([...army, bot]);
  };

  const handleRelease = (bot) => {
    setArmy (army.filter((bot) => bot.id !== bot.id));
  };

  const handleDischarge = (botId) => {
  fetch(`http://localhost:3000/bots/${botId}`,
  {method: 'DELETE'})
  .then (() =>setArmy (army.filter((bot) => bot.id !== bot.id)));
  };

  const handleViewDetails = (bot) => {
    setSelectedBot(bot);
  };

  const handleEnlist = (bot) => {
    handleAddToArmy(bot);
    setSelectedBot(null); 
  };
  
  const handleGoBack = () => {
    setSelectedBot(null);
  };

  const handleSort =(key) => {
    setSortKey(key);
    const sortedBots = [...bots].sort ((a,b) => a [key] - b[key]);
    setBots(sortedBots);
  };


  return (
    <div className="App">
      
      <SortBar onSort={handleSort} />
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onEnlist={handleEnlist} onGoBack={handleGoBack} />
      ) : (
        
        <>
          <YourArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
          
          <BotCollection
            bots={bots}
            onAddToArmy={handleAddToArmy}
            onViewDetails={handleViewDetails}
          />
        
        </>
      )}
    </div>
  );
}

export default App;
