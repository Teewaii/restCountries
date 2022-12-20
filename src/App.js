import './App.css';
import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainDisplay from './components/mainDisplay/MainDisplay';
import Nav from './components/nav/Nav';
import Details from './components/details/Details';

export const AppContext = createContext();

function App() {
  const [country, setCountry] = useState([])
  //const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [baseurl, setBaseurl] = useState('https://restcountries.com/v3.1/all')
  const [myregion, setMyregion] = useState("Africa")
  const [dispOption, setdispOption] = useState(true)
  const [mode, setMode] = useState(false)


  useEffect(() => {

    axios
      .get(baseurl)
      .then(response =>
        setCountry(response.data),
        //  setLoading(true)

      )

      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          return
        }

      })

  }, [name])

  const names = country.map(({ name }) => (
    Object.values(name)[0])
  )

  function OnChangeurl(e) {
    setBaseurl(`https://restcountries.com/v3.1/name/${name}`)
    setName(e.target.value)
  }

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  //console.log(!regions.includes("Afr"))

  return (
    <div className={mode ? "App dark bg-DarkmdBk" : "App   "}>
      <Nav mode={mode} setMode={setMode}
        setName={setName} />
      <AppContext.Provider value={{ name, setName, baseurl, setBaseurl, myregion, setMyregion, dispOption, setdispOption, mode, setMode, country, setCountry, OnChangeurl }}>
        < Routes    >
          <Route path="/" element={<MainDisplay />} ></Route>
          <Route path="/:name" element={<Details />} ></Route>
        </Routes>
      </AppContext.Provider>
    </div >
  );
}

export default App;
