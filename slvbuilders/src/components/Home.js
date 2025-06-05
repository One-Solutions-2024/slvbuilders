import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import Subscribe from "./Subscribe"
import BestFlatList from "./BestFlatList"

const Home=()=>{
    return (
        <React.Fragment>
            <Banner/>
            <FlatList/>
            <BestFlatList/>
            <Subscribe/>
        </React.Fragment>
    )
}

export default Home;