import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [userData, setuserData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setuserData(data);
      });
  }, []);

  return (
    <>
      <h1 className="heading">! GitHub Users !</h1>
      <div className="container">
        {userData.map((user) => {
          console.log(user);

          return (
            <Card
              userName={user.login}
              profileUrl={user.html_url}
              avtarUrl={user.avatar_url}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
