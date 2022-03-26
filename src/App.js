import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Theory from './components/TheoryJs/Theory';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
      <Header/>
      <Shop/>
      <Theory/>
      <Footer/>
    </div>
  );
}

export default App;
