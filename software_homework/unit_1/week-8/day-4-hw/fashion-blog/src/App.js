import Header from './components/Header';
import Articles from './components/Articles';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header className = "App-header"/>
      <Articles className = "App-articles"/>
      <Footer className = "App-footer"/>
    </div>
  );
}

export default App;
