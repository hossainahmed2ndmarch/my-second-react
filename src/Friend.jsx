export default function Friend({ friend }) {
  console.log(friend);
  return (
    <div className="box">
      <h3>Name: {friend.name}</h3>
      <p>Email: {friend.email}</p>
      <p>
        Address: {friend.address.city}, {friend.address.street},{" "}
        {friend.address.suite}/ {friend.address.zipcode}
      </p>
    </div>
  );
}
