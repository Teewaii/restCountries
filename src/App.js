import './App.css';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MainDisplay from './components/mainDisplay/MainDisplay';
import Nav from './components/nav/Nav';
import Details from './components/details/Details';

function App() {
  const [country, setCountry] = useState([])
  const [name, setName] = useState("")
  const [baseurl, setBaseurl] = useState('https://restcountries.com/v3.1/all')
  const [africa, setAfrica] = useState(false)
  const [myregion, setMyregion] = useState("Africa")
  const [dispOption, setdispOption] = useState(true)

  useEffect(() => {
    axios.get(baseurl)
      .then(response => {
        setCountry(response.data)
        console.log(country)
      })
  }, [name])

  function OnChangeurl(e) {
    setBaseurl(`https://restcountries.com/v3.1/name/${name}`)
    setName(e.target.value)
  }


  return (
    <div className="App min-h-screen ">
      <Nav />
      {/* <Search />
      <MainDisplay /> */}
      <Routes>
        <Route path="/" element={<MainDisplay country={country} dispOption={dispOption} setdispOption={setdispOption} myregion={myregion} setMyregion={setMyregion} OnChangeurl={OnChangeurl} name={name} baseurl={baseurl} setBaseurl={setBaseurl} />} ></Route>
        <Route path="details/:name" element={<Details country={country} dispOption={dispOption} myregion={myregion} />} ></Route>

      </Routes>
    </div>
  );
}

export default App;