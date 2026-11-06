function Info(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <h3>{props.studentId}</h3>
      <h4>{props.name}</h4>
      <h5>{props.college}</h5>
    </div>
  );
}

export default Info;
