import { useState } from 'react';
import SearchField from './SearchField';
import PersonForm from './PersonForm';
import PersonField from './PersonField';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [filter, setFilter] = useState('');

  const peopleToShow = showAll
    ? persons
    : persons.filter((person) => person.name.includes(filter));
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
      setPersons(persons.concat(newPerson));

      setNewName('');
      setNumber('');
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
