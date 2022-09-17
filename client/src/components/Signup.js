import { useState } from "react";

import { useDispatch } from "react-redux";
import { signup } from "../apiCalls";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Passward do not match");
    } else {
      signup(dispatch, { name, email, file, password });
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="file">Select File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(e) => setFile(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={name && email ? false : true}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
