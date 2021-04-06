import { useState } from 'react';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 30 },
  { name: 'Michael', age: 25 },
];

export const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onSearchClick = () => {
    const result = users.find((u) => {
      return u.name == name;
    });

    setUser(result);
  };

  return (
    <div className="">
      <h3>User Search</h3>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={onSearchClick}>Find!</button>

      <h3>Result</h3>
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};
