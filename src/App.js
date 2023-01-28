import { useState, useEffect } from "react";
import SearchBox from "./search-box/search-box.component";
import CardList from "./card/card-list";
//import data from "./dbTest.json";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState(cars);

  useEffect(() => {
    const url = "http://localhost:3000/dbTest.json";
    fetch(url)
      .then((response) => response.json())
      //.then((json) => console.log(json))
      .then((dbTest) => setCars(dbTest));
  }, []);

  useEffect(() => {
    const newFilteredCars = cars.filter((car) => {
      return car.vrn.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCars(newFilteredCars);
  }, [cars, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
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

      <CardList cars={filteredCars} />
    </div>
  );
};

export default App;
