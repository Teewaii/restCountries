import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import MainDisplay from './components/mainDisplay/MainDisplay';
import Nav from './components/nav/Nav';
import Details from './components/details/Details';

function App() {
  const [country, setCountry] = useState([])
  //const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [baseurl, setBaseurl] = useState('https://restcountries.com/v3.1/all')
  const [myregion, setMyregion] = useState("Africa")
  const [dispOption, setdispOption] = useState(true)
  const [mode, setMode] = useState(false)

  useEffect(() => {
    // axios.get(baseurl)
    //   .then(response => {
    //     setCountry(response.data)
    //     console.log(country)
    //   })

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
    <div className={mode ? "App min-h-screen   dark bg-DarkmdBk " : "App min-h-screen   "}>
      <Nav mode={mode} setMode={setMode}
        setName={setName} />
      {/* <Search />
      <MainDisplay /> */}
      < Routes >
        <Route path="/restCountries" element={<MainDisplay country={country} dispOption={dispOption}
          setdispOption={setdispOption} myregion={myregion} setMyregion={setMyregion} OnChangeurl={OnChangeurl} name={name}
          baseurl={baseurl} setBaseurl={setBaseurl} mode={mode} />} ></Route>
        <Route path="restCountries/:name" element={<Details country={country} dispOption={dispOption} myregion={myregion} setMode={setMode} />} ></Route>

      </Routes>
    </div >
  );
}

export default App;
