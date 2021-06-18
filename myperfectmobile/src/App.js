import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/Body';
import CompanyBar from './components/CompanyBar';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuBar from './components/MenuBar';

function App() {
  const [year, setYear] = useState('')

  useEffect(
    () => {
      const date = new Date()
      setYear(date.getFullYear());
    }
  ,[])
  
  return (
    <div className="App">
      <Header />
      {/* <MenuBar /> */}
      <CompanyBar />
      <Body />

      <Footer />
      <div className="copyright">
      &#169; {year} | All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
