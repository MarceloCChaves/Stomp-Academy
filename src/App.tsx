import { GlobalStyle } from './Styles/global';
import Home from './Views/Home/Index'
import Contact from './Views/Contact/Index'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <ToastContainer />
    </>
  );
}

export default App;
