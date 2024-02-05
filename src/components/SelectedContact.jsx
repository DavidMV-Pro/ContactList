import { useState, useEffect } from "react";
import '../App.css';

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  console.log("Contact:", contact);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  useEffect(() => {
    console.log("Contact data:", contact);
  }, [contact]);

  return (
    <div>
      {contact ? (
        <div>
          <h2 style={{ color: "grey" }}>Contact Details</h2>
          <p style={{ color: "orange" }}>Username: {contact.username}</p>
          <p style={{ color: "blue" }}>Name: {contact.name}</p>
          <p style={{ color: "pink" }}>Email: {contact.email}</p>
          <p style={{ color: "green" }}>Phone: {contact.phone}</p>
          <button
            style={{ backgroundColor: "aqua",  }}
            onClick={() => setSelectedContactId(null) }
          >
            Go back to Contact List
          </button>
        </div>
      ) : (
        <p>No contact selected</p>
      )}
    </div>
  );
}
