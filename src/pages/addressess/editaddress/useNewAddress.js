import { useState } from "react";

export function useNewAddress() {
  const [newAddress, setNewAddress] = useState({});

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewAddress((prev) => ({ ...prev, [name]: value }));
  }

  return [newAddress, setNewAddress, onChangeHandler];
}
