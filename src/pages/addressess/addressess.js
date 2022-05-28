import "./addressess.styles.css";
import { EditAddress } from "./editaddress/editadress";
import { useAuthContext } from "context";
import { useAddressAllInfo } from "./useAddressAllInfo";
import { useEffect } from "react";
import { showAddress } from "./showAddress";

function Addressess() {
  const { removeAddress } = useAuthContext();
  const [
    addressess,
    setAddressess,
    newAddress,
    addressAllInfo,
    setAddressAllInfo,
    addressInputBtnHandler,
  ] = useAddressAllInfo();

  function getuserInfo() {
    return JSON.parse(localStorage.getItem("userInfo"));
  }

  useEffect(() => {
    const userInfo = getuserInfo();
    if (userInfo.addressess) {
      setAddressess(userInfo.addressess);
    }
  }, []);

  return (
    <section className="addressess-section common-section">
      <div className="addressess-section-header">
        <button
          className="btn btn-secondary bg-grey"
          onClick={(e) =>
            addressInputBtnHandler(e, newAddress, "Add New Address")
          }
        >
          + Add NEW ADDRESS
        </button>
      </div>
      <div className="addressess-section-body">
        {addressess.map((address) => (
          <div className="address mt-9" key={address._id}>
            {showAddress(address)}
            <div className="grid2D-col address-actions">
              <button
                onClick={(e) =>
                  addressInputBtnHandler(e, address, "Edit Address")
                }
              >
                Edit
              </button>
              <button
                onClick={() => {
                  const userInfo = removeAddress(address);
                  setAddressess(userInfo.addressess);
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {addressess.length === 0 && (
        <h3>No address found, add address by clicking above ☝️</h3>
      )}
      <EditAddress
        display={addressAllInfo.addressEditorDisplay}
        address={addressAllInfo.activeAddress}
        setDisplay={setAddressAllInfo}
        headerText={addressAllInfo.headerText}
        updateAddressess={setAddressess}
      />
    </section>
  );
}

export { Addressess };
