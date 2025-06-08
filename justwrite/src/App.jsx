import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from './components';
import { AllRoutes } from './routes/AllRoutes';
import 'react-loading-skeleton/dist/skeleton.css'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AllRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
