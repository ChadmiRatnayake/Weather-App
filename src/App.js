import './App.css';

const api = {
  key: "daa63370f88c9a76c1429d2ecee7cc3b",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

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
        <div>
          <div className='location-box'>
            New York City, US
          </div>
          <div className='date'>
            {dateBuilder(new Date())}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
