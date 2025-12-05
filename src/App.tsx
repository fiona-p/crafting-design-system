import { Route, Routes } from 'react-router-dom';
import TabsDocPage from './pages/tabsDocPage/tabsDocPage';
import Home from './pages/home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tabs' element={<TabsDocPage />} />
    </Routes>
  );
}

export default App;
