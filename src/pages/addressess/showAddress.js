export function showAddress(address) {
  return (
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
      {/* @TODO: default address feature */}
      {/* {address.isDefault && <div className="align-text-right">Default</div>} */}
    </div>
  );
}
