import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {useAxios} from './hooks/useAxios'
import Charts from "./components/Charts";
import Events from "./components/Events"
import Navbar from "./components/Navbar";

import "./styles.css";

const App = () => {
    const [coinData] = useAxios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true");    
    return (
    <div className="App">
        <Navbar />
        <Route exact path="/" render={(props) => <Charts coinData={coinData} />} />
        <Route path="/events" component={Events}/>
    </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
