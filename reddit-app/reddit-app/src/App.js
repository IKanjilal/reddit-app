
import Reddits from './Components/Reddits';
import './App.css';
import Header from './Header/header';
import Subreddits from './Components/Subreddits';
import Scroltotop from './Components/Scrolltotop';


function App() {
  return (

    <div className="App">
      <Header />
      <div className="body">
        <Reddits />
        <Subreddits />
      </div >
      <div>
        <Scroltotop />
      </div>

    </div>


  );
}

export default App;

