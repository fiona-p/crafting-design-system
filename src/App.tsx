import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import TabsDocumentation from './pages/tabsDocPage/TabsDocumentation';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tabs' element={<TabsDocumentation />} />
      </Routes>
    </>
  );
}

export default App;
