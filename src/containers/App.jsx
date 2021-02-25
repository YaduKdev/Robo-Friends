import React, {useState} from 'react';
import Header from "../components/Header";
import CardList from "../components/CardList";
import {robots} from "../robots";
import Scroll from "../components/Scroll";


const App= ()=> {

    const [search, setSearch] = useState("");

    const onSearchChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="tc">
            <Header searchChange={onSearchChange} />
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>
        </div>
    );
}

export default App;