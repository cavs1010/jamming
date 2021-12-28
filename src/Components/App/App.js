import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults'

function App() {
  return (
          <div>
              <h1>Ja<span className="highlight">mmm</span>ing</h1>
              <div className="App">
              {/**<!-- Add a SearchBar component -->**/}
              <SearchBar />
              <h2>Search Component</h2>
                <div className="App-playlist">
                  {/**<!-- Add a SearchResults component -->
                  <!-- Add a Playlist component -->**/}
                  <h2>Search Results</h2>
                  <SearchResults />
                  <h2>Playlist component</h2>
                </div>
              </div>
            </div>
  );
}

export default App;
