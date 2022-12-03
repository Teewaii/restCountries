import React from 'react'
import Search from '../../components/search/Search';
import Card from '../../components/card/Card'


function MainDisplay({ country, dispOption, myregion, setMyregion, setdispOption, OnChangeurl, baseurl, setBaseurl, name, setName }) {
    return (
        <section className='main min-h-screen mt-10 h-screen border'>
            <div className='container '>
                <Search country={country} dispOption={dispOption} setdispOption={setdispOption} setMyregion={setMyregion} OnChangeurl={OnChangeurl} name={name} setName={setName} baseurl={baseurl} setBaseurl={setBaseurl} />
                <Card country={country} dispOption={dispOption} myregion={myregion} setMyregion={setMyregion} />
            </div>
        </section>
    )
}

export default MainDisplay