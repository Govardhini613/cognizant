function Employee(props) {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}

export default Employee;