import "./editaddress.styles.css";
import { useAuthContext } from "context";
import { useEffect } from "react";
import { useNewAddress } from "./useNewAddress";
import { profileInputFields } from "data";

function EditAddress({
  display,
  setDisplay,
  headerText,
  address,
  updateAddressess,
}) {
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
            {profileInputFields.map(({ text }, index) => (
              <input
                type="text"
                required
                placeholder={`${text} *`}
                className="form-input-field"
                value={newAddress[text] ?? ""}
                name={text}
                onChange={(e) => onChangeHandler(e)}
                key={index}
              />
            ))}
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
