import { Child } from './Child';

export const Parent: React.FC = () => {
  return (
    <div className="parent">
      <h1>This is parent component</h1>
      <Child color="Pink"></Child>
    </div>
  );
};
