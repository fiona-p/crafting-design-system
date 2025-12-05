import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import TabsDocumentation from './pages/tabsDocPage/TabsDocumentation';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tabs' element={<TabsDocumentation />} />
    </Routes>
  );
}

export default App;
