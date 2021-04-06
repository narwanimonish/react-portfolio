import { useState } from 'react';

export const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onBtnClick = () => {
    setGuests([...guests, name]);
    setName('');
  };

  return (
    <div className="guest-list">
      <h3>Guest List</h3>

      <ul>
        {guests.map((guest) => {
          return <li key={guest}>{guest}</li>;
        })}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onBtnClick}>Add guest</button>
    </div>
  );
};
