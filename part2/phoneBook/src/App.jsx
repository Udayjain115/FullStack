import { useState, useEffect } from 'react';
import SearchField from './SearchField';
import PersonForm from './PersonForm';
import PersonField from './PersonField';
import peopleService from './services/people';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    peopleService.getAll().then((initalPeople) => setPersons(initalPeople));
  }, []);

  const peopleToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );
  const handleButtonClick = (event) => {
    event.preventDefault();

    const foundDuplicate = persons.find((person) => {
      return newName === person.name;
    });

    if (!foundDuplicate && newName !== '' && number != '') {
      const newPerson = {
        name: newName,
        number: number,
      };
      peopleService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNumber('');
      });
    }

    if (foundDuplicate) {
      alert(`${newName} is already added to phonebook`);
    }
  };

  const handleFormChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <SearchField
        persons={persons}
        showAll={showAll}
        setShowAll={setShowAll}
        filter={filter}
        setFilter={setFilter}
      />
      <h1>Add A New</h1>
      <PersonForm
        name={'name:'}
        onChange={handleFormChange}
        value={newName}
      />
      <PersonForm
        name={'number:'}
        onChange={handleNumberChange}
        value={number}
      />

      <button
        onClick={handleButtonClick}
        type="submit">
        add
      </button>

      <h2>Numbers</h2>

      <PersonField persons={peopleToShow} />
    </div>
  );
};

export default App;
