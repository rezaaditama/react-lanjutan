import { useId } from 'react';

function Input({ id = 'inputlama' }) {
  const inputId = useId();
  return (
    <>
      <label htmlFor=''>
        <span>Name : </span>
        <input type='text' id={`${inputId}-${id}`} />
      </label>
      <p>Name should contain at least first name and last name</p>
    </>
  );
}

const App = () => {
  return (
    <div>
      <Input id={'input'} />
      <Input />
      <Input />
      <Input />
      <Input />
    </div>
  );
};

export default App;
