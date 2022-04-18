import { useState } from "react";
import { v4 as uuid } from "uuid";

export function useAddressAllInfo() {
  const [addressAllInfo, setAddressAllInfo] = useState({
    activeAddress: {},
    addressEditorDisplay: "none",
    headerText: ""
  });

  const newAddress = {
    _id: uuid(),
    name: "",
    address: "",
    locality: "",
    city: "",
    pincode: "",
    state: "",
    number: "",
    isDefault: false
  };

  function addressInputBtnHandler(_, address, headerText) {
    setAddressAllInfo((prev) => ({
      ...prev,
      activeAddress: address,
      headerText: headerText,
      addressEditorDisplay: "flex"
    }));
  }

  return [newAddress, addressAllInfo, setAddressAllInfo, addressInputBtnHandler];
}
