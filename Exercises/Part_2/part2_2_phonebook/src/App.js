import React, { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [personInfo, setPersonInfo] = useState({ name: "", number: "" })
  const [searchName, setSearchName] = useState("")

  const handleChangeInName = (event) => {
    const copyPersonInfo = { ...personInfo, name: event.target.value }
    setPersonInfo(copyPersonInfo)
  };
  const handleChangeInNumber = (event) => {
    const copyPersonInfo = { ...personInfo, number: event.target.value }
    setPersonInfo(copyPersonInfo)
  };
  const handleChangeInSearchName = (event) => {
    setSearchName(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (personInfo.name.length > 0 && personInfo.number.length > 0) {
      if (
        persons
          .map((person) => person.name.toLowerCase())
          .includes(personInfo.name.toLowerCase())
      ) {
        alert(`${personInfo.name} is already added to phonebook`);
      } else {
        const tempPerson = {
          ...personInfo,
          id: parseInt(persons[persons.length - 1].id) + 1,
        };
        setPersons(persons.concat(tempPerson));
      }
    }
  };
  const copyPersons = searchName.length > 0 ? persons.filter((person) => person.name.toLowerCase().includes(searchName.toLowerCase())) : persons
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleChangeInSearchName={handleChangeInSearchName} />
      <h3>Add a new</h3>
      <PersonForm personInfo={personInfo} handleChangeInName={handleChangeInName} handleChangeInNumber={handleChangeInNumber} onSubmit={handleSubmit} />
      <h3>Numbers</h3>
      <Persons persons={copyPersons} />
    </div>
  );
};

export default App;
