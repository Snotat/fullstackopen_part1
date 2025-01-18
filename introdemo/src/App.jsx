const Header = (props) => {
  return (
    <h2 className="">{props.course}</h2>
  )
}
const Content = (props) => {
  return (
    <div className="">

      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[1].exercises} />

    </div>
  )
}
const Total = (props) => {
  return (
    <h3 className="">Total number of exercises - {props.parts[0].exercises + props.parts[1].exercises + props.parts[1].exercises}</h3>
  )
}

const Part = (props) => {
  return (
    <div className="">
      <section>
        <h3>
          - {props.part}
        </h3>
        <p>
          Number of Exercises - {props.exercises}
        </p>
      </section>
      <br />
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      exercises: 10
    }, {
      name: 'Using props to pass data',
      exercises: 7
    }, {
      name: 'State of a component',
      exercises: 14
    }]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App