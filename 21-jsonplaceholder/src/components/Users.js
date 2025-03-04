import {useEffect, useState} from "react";
import User from "./User";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://testapi.devtoolsdaily.com/users?limit=50')
      .then(res => res.json())
      .then(json => setUsers(json))
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return <>
    <h1>Users</h1>
    <hr/>
    {isLoading
      ? <h1>Loading...</h1>
      : users && users.length
        ? users.map(user => {
          return <User key={user.id} {...user} />
        })
        : "No Posts"}
      </>
    }

export default Users;