const Header = (props) => {
  return <div> {props.course.name} </div>;
};

const Content = (props) => {
  return (
    <div>
      {props.course.parts[0].name} {props.course.parts[0].exercises} <br />
      {props.course.parts[1].name} {props.course.parts[1].exercises} <br />
      {props.course.parts[2].name} {props.course.parts[2].exercises} <br />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      {props.course.parts[0].exercises} <br />
      {props.course.parts[1].exercises} <br />
      {props.course.parts[2].exercises} <br />
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },

      {
        name: "Using props to pass data",
        exercises: 7,
      },

      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} /> <br />
      <Content course={course} /> <br />
      <Total course={course} />
    </div>
  );
};

export default App;
