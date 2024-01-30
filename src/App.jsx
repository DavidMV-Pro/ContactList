import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
      {selectedContactId ? (<div>Selected Contact View</div>) : (<ContactList setSelectedContactId={setSelectedContactId}/>)}
    </>
  )
}

export default App
