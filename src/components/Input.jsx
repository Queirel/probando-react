import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const Input = ({onLista}) => {
  const [input, setInput] = useState('');

  const onChangeEvent = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = (event) => {
      event.preventDefault();
      const inputTrim = input.trim()
      if(inputTrim.length <= 1) return
    // setLista((lista)=>[...lista, input])
    onLista(inputTrim)
    setInput('')
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Find something"
        value={input}
        onChange={onChangeEvent}
      />
    </form>
  );
};
