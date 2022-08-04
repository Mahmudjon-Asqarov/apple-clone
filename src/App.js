import './App.css';
import Home from './routes/home/Home';
import { Switch, Route } from 'react-router-dom';
import Store from './routes/store/Store';
import Ipad from './routes/ipad/Ipad';
import Header from './components/header/Header';
import Mac from './routes/mac/Mac';
import Tvhome from './routes/tv and home/TVhome';
import OnlyOnApple from './routes/onlyonapplle/OnlyOnApple';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/ipad">
          <Ipad />
        </Route>
        <Route path="/mac">
          <Mac />
        </Route>
        <Route path="/tv&home">
          <Tvhome />
        </Route>
        <Route path="/onlyonapple">
          <OnlyOnApple />
        </Route>
      </Switch>
      {/* <OnlyOnApple /> */}
      {/* <ReactPlayer width={"100%"} url={"https://www.apple.com/105/media/us/services/2021/8b95cfe0-0534-48a6-8777-91d87ebf7298/anim/fitness/large.mp4"} /> */}
    </div>
  );
}

export default App;
