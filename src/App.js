
import { useState, useEffect } from 'react';
import BotCollection from './components/botcollection';

function App() {
  const API_URL = 'http://localhost:3000/bots';

  const [bots, setBots] = useState([]);

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

  return (
    <div className="App">
      <BotCollection bots={bots} />
    </div>
  );
}

export default App;
