import './App.css';
// import { EventComponent } from './events/EventComponent';
// import { Parent } from './props/Parent';
// import { GuestList } from './state/GuestList';
// import { UserSearch } from './state/UserSearch';
import { UserSearch } from './refs/UserSearch';
// import UserSearch from './classes/UserSearch';

const users = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 30 },
  { name: 'Michael', age: 25 },
];

function App() {
  return (
    <div className="App">
      <UserSearch />
    </div>
  );
}

export default App;
