/** @format */

import { useState } from "react";
import { Input } from "./components/input";
import { GifGrid } from "./components/GifGrid";

export const App = () => {
  const [lista, setLista] = useState(["Uno", "Dos"]);

  const onLista = (add) => {
    if (lista.includes(add)) return;
    setLista((lista) => [...lista, add]);
  };

  return (
    <>
      <h1>Titulo</h1>
      <Input onLista={onLista} />
      {lista.map((list) => 
      <GifGrid key={list} list={list} />
      )}
    </>
  );
};
