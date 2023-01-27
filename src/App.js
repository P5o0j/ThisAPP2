import { useState, useEffect } from "react";
import SearchBox from "./search-box/search-box.component";
import CardList from "./card/card-list";
//import "././dbTest.json";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    fetch("../dbTest.json")
      .then((response) => response.json())
      .then((data) => setCars(data));
  }, []);

  useEffect(() => {
    const newFilteredCars = cars.filter((cars) => {
      return cars.vrn.toLocaleUpperCase().includes(searchField);
    });

    setFilteredCars(newFilteredCars);
  }, [cars, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleUpperCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">This APP</h1>
      {/* <div key={monster.id}>
        <h1>{monster.name}</h1> */}

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search cars"
        className="cars-search-box1"
      />

      <h3>
        <CardList cars={filteredCars} />
      </h3>
    </div>
  );
};

export default App;
