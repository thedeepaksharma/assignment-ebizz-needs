import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [users, setUsers] = useState();
  const showUsers = async (e) => {
    try {
      const res = await axios.get("http://localhost:5000/api/signup");
      setUsers(res.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showUsers();
  }, []);

  return (
    <section>
      <h3>Home</h3>
      {users?.map((item) => {
        return (
          <article key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Home;
