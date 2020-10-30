import { BrowserRouter} from "react-router-dom";
import Home from './components/views/Home'

// const Home = lazy(() => import('./components/views'))
function App() {
  return (
    <BrowserRouter>
         <Home />
    </BrowserRouter>
  );
}

export default App;
