import "./editaddress.styles.css";
import { useAuthContext } from "context";
import { useEffect } from "react";
import { useNewAddress } from "./useNewAddress";

function EditAddress({ display, setDisplay, headerText, address, updateAddressess }) {
  const { saveAddress } = useAuthContext();
  const [newAddress, setNewAddress, onChangeHandler] = useNewAddress();

  useEffect(() => {
    setNewAddress(address);
  }, [address]);

  return (
    <>
      <div
        className="address-editor-container"
        style={{ display: display }}
      ></div>
      <div className="address-form" style={{ display: display }}>
        <div className="address-form-header">{headerText}</div>
        <div className="address-form-body">
          <form className="address-form-fields">
            <input
              type="text"
              required
              placeholder="Name *"
              className="form-input-field"
              value={newAddress.name ?? ""}
              name="name"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              required
              placeholder="Mobile *"
              type="text"
              className="form-input-field"
              value={newAddress.number ?? ""}
              name="number"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              required
              placeholder="Pincode *"
              className="form-input-field"
              value={newAddress.pincode ?? ""}
              name="pincode"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              required
              placeholder="State *"
              className="form-input-field"
              value={newAddress.state ?? ""}
              name="state"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              required
              placeholder="Address *"
              className="form-input-field"
              value={newAddress.address ?? ""}
              name="address"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              required
              placeholder="Locality *"
              className="form-input-field"
              value={newAddress.locality ?? ""}
              name="locality"
              onChange={(e) => onChangeHandler(e)}
            />
            <input
              type="text"
              required
              placeholder="City *"
              className="form-input-field"
              value={newAddress.city ?? ""}
              name="city"
              onChange={(e) => onChangeHandler(e)}
            />
          </form>
        </div>
        <div className="address-form-footer">
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              setDisplay((prev) => ({ ...prev, addressEditorDisplay: "none" }))
            }
          >
            Cancel
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              const userInfo = saveAddress(newAddress);
              updateAddressess(userInfo.addressess);
              setDisplay((prev) => ({ ...prev, addressEditorDisplay: "none" }));
            }}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export { EditAddress };
