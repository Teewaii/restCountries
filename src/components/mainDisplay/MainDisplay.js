import React from 'react'
import Search from '../../components/search/Search';
import Card from '../../components/card/Card'

function MainDisplay() {

    return (
        <section className='main min-h-screen mt-10'>
            <div className='container '>
                <Search />
                <Card />
            </div>
        </section>
    )
}

export default MainDisplay