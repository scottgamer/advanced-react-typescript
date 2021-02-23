import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>

      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
