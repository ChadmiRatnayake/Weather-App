import './App.css';

const api = {
  key: "daa63370f88c9a76c1429d2ecee7cc3b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className='search-box'>
          <input 
            	type='text'
              className='search-bar'
              placeholder='Search'
          />
        </div>
      </main>
    </div>
  );
}

export default App;
