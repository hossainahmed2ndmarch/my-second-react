import { useEffect, useState } from "react";
import "./Friends.css";
import Friend from "./Friend";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setFriends(data);
    };
    fetchData();
  }, []);
  return (
    <div className="box">
      <h2>Friends: {friends.length}</h2>
      {
        friends.map(friend => <Friend friend={friend}></Friend>)
      }
    </div>
  );
}
