import { useState } from "react";
import "./App.scss";

function App() {
  const [info, setInfo] = useState({firstname: "", lastname: "", email: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(info));
    setInfo({firstname: "", lastname: "", email: ""}); // clearing the form
  };

  const onChangeInfo = (e) => {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="app-container">
      <div className="form-container">
        <input
          type="text"
          className="form-field"
          name="firstname"
          placeholder="First Name"
          value={info.firstname}
          onChange={onChangeInfo}
        />
        <input
          type="text"
          className="form-field"
          name="lastname"
          placeholder="Last Name"
          onChange={onChangeInfo}
          value={info.lastname}
        />
        <input
          type="text"
          className="form-field"
          name="email"
          placeholder="Email"
          onChange={onChangeInfo}
          value={info.email}
        />
        <button className="btn form-field" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
