import "./addressess.styles.css";

function getAddressess() {
  const userInfo =  JSON.parse(localStorage.getItem("userInfo"));
  return userInfo.addressess;
}

function Addressess() {
  const addressess = getAddressess();
  return (
    <section className="addressess-section common-section">
      <div className="addressess-section-header">
        <button className="btn btn-secondary bg-grey">+ Add NEW ADDRESS</button>
      </div>
      <div className="addressess-section-body">
        {addressess.map((address) => (
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
              <button>Edit</button>
              <button>Remove</button>
            </div>
          </div>
        ))}
        {/* <div className="address mt-9">
          <div className="grid2D-col address-info">
            <div>
              <h4 className="mb-10">Name</h4>
              <p>address</p>
              <p>Locality</p>
              <p>city and pincode</p>
              <p>state</p>
              <p>Mobile: Number</p>
            </div>
            <div className="align-text-right">tag</div>
          </div>
          <div className="grid2D-col address-actions">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="address mt-9">
          <div className="grid2D-col address-info">
            <div>
              <h4 className="mb-10">Name</h4>
              <p>address</p>
              <p>Locality</p>
              <p>city and pincode</p>
              <p>state</p>
              <p>Mobile: Number</p>
            </div>
            <div className="align-text-right">tag</div>
          </div>
          <div className="grid2D-col address-actions">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="address mt-9">
          <div className="grid2D-col address-info">
            <div>
              <h4 className="mb-10">Name</h4>
              <p>address</p>
              <p>Locality</p>
              <p>city and pincode</p>
              <p>state</p>
              <p>Mobile: Number</p>
            </div>
            <div className="align-text-right">tag</div>
          </div>
          <div className="grid2D-col address-actions">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="address mt-9">
          <div className="grid2D-col address-info">
            <div>
              <h4 className="mb-10">Name</h4>
              <p>address</p>
              <p>Locality</p>
              <p>city and pincode</p>
              <p>state</p>
              <p>Mobile: Number</p>
            </div>
            <div className="align-text-right">tag</div>
          </div>
          <div className="grid2D-col address-actions">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
        <div className="address mt-9">
          <div className="grid2D-col address-info">
            <div>
              <h4 className="mb-10">Name</h4>
              <p>address</p>
              <p>Locality</p>
              <p>city and pincode</p>
              <p>state</p>
              <p>Mobile: Number</p>
            </div>
            <div className="align-text-right">tag</div>
          </div>
          <div className="grid2D-col address-actions">
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export { Addressess };
