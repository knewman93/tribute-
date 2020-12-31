import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Carousel from './components/carousel'
import Footer from './components/footer'
import Body from './components/body'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel className="carousel"/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
