import {useState} from "react";

function Login() {
  const [data, setData] = useState({userName: "", password: ""});

  const handleOnSubmitForm = (event) => {
    event.preventDefault();

    console.log(JSON.stringify(data, null, 2));
    alert(JSON.stringify(data, null, 2));
  }

  const handleInputChange = (name, e) => {
    setData({...data, [name]: e.target.value});
  }

  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handleOnSubmitForm}>
        <label> Username:
          <input type="text"
                 value={data.username}
                 onChange={(e) => {
                   handleInputChange("userName", e)
                 }}
                 placeholder="Username"/>
        </label>
        <label> Password:
          <input type="password"
                 value={data.password}
                 onChange={(e) => {
                   handleInputChange("password", e)
                 }}
                 placeholder="Password"/>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login;