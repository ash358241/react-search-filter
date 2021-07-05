import './App.css';
import fakeData from '../src/MOCK_DATA.json';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder="search..." onChange={(event) => setSearch(event.target.value)} />
      {
        fakeData.filter(value => {
          if(search === ''){
            return value;
          }
          else if(value.first_name.toLowerCase().includes(search.toLowerCase())){
            return value;
          }
        }).map((value, key) => {
          return (
            <div key={key}>
              <p>{value.first_name}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
