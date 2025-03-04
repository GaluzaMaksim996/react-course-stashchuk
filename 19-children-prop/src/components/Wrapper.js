function Wrapper(props) {

  const styles = {
    'background-color': props.color,
    'width': '250px',
    'margin': '20px auto',
    'padding': '20px'
  };

  return <div style={styles}>
    {props.children}
  </div>
}

export default Wrapper;