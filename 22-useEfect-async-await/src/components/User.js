function User(props) {
  const {firstName, lastName} = props;

  return (
    <div>
      <h2>{firstName} {lastName}</h2>
    </div>
  )
}

export default User;