import "./addressess.styles.css";
import { EditAddress } from "./editaddress/editadress";
import { useAuthContext } from "context";
import { useAddressAllInfo } from "./useAddressAllInfo";

function Addressess() {
  const {
    authState: { userInfo },
    authDispatch,
    removeAddress,
  } = useAuthContext();
  const [newAddress, addressAllInfo, setAddressAllInfo, addressInputBtnHandler] =
    useAddressAllInfo();

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
        {userInfo.addressess.map((address) => (
          <div className="address mt-9" key={address._id}>
            <div className="grid2D-col address-info">
              <div>
                <h4 className="mb-10">{address.name}</h4>
                <p>{address.address}</p>
                <p>{address.locality}</p>
                <p>
                  {address.city} and {address.pincode}
                </p>
                <p>{address.state}</p>
                <p>Mobile: {address.number}</p>
              </div>
              {address.isDefault && (
                <div className="align-text-right">Default</div>
              )}
            </div>
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
                  authDispatch({ type: "UPDATE_USER_INFO", payload: userInfo });
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      {userInfo.addressess.length === 0 && (
        <h3>No address found, add address by clicking above ☝️</h3>
      )}
      <EditAddress
        display={addressAllInfo.addressEditorDisplay}
        address={addressAllInfo.activeAddress}
        setDisplay={setAddressAllInfo}
        headerText={addressAllInfo.headerText}
      />
    </section>
  );
}

export { Addressess };
