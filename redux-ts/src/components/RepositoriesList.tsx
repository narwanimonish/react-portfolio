import { link } from 'node:fs';
import React, { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onFormSubmission}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>

        {error && <h3>{error}</h3>}
        {loading && <h3>loading...</h3>}
        <ul>
          {!error && !loading && data.map((name) => <li key={name}>{name}</li>)}
        </ul>
      </form>
    </div>
  );
};

export default RepositoriesList;
