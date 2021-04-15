import { Provider } from 'react-redux';
import { store } from './../state';
import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for package</h1>
        <RepositoriesList></RepositoriesList>
      </div>
    </Provider>
  );
};

export default App;
