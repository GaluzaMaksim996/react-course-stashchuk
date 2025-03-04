import {useEffect, useState} from "react";
import User from "./User";

const BASE_URL = 'https://testapi.devtoolsdaily.com/users?limit=50';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () =>{
      try {
        const res = await fetch(BASE_URL)
        const users = await res.json()
        setUsers(users)
      } catch (e) {
        setError(e.message)
      }
      setIsLoading(false)
    })()
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(BASE_URL);
  //       const users = await res.json();
  //       setUsers(users);
  //     } catch (e) {
  //       setError(e.message)
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchData()
  // }, []);

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       const res = await fetch(BASE_URL);
  //       const users = await res.json();
  //       setUsers(users);
  //     } catch (e) {
  //       setError(e.message)
  //     }
  //     setIsLoading(false);
  //   }
  //   fetchUsers();
  //
  // }, []);

  // useEffect(() => {
  //   fetch('https://testapi.devtoolsdaily.com/users?limit=50')
  //     .then(res => res.json())
  //     .then(json => setUsers(json))
  //     .catch(err => setError(err.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

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