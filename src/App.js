import { Routes, Route } from 'react-router-dom'
import { Home } from './components';
import Contact from './routes/Contact';
import Faq from './routes/Faq';
import Pricing from './routes/Pricing';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}
