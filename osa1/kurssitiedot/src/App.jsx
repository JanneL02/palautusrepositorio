const App = () => {
  const course = 'Half Stack application development'
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  

  return (
    <div>
      <Header course={course} />
      <Content part1={parts}  part2={parts} part3={parts} />
      <Total part1={parts} part2={parts} part3={parts}/>
    </div>
  )

 //part1={parts[0].name} 

}


  const Header = (props) => {
    return (
      <>
      <h1>{props.course}</h1>
      </>
    )
  }

  const Content = (props) => {
    return (
      <>
      <Part part1={props.part1[0].name} exercises1={props.part1[0].exercises} />
      <Part part1={props.part2[1].name} exercises1={props.part2[1].exercises} />
      <Part part1={props.part3[2].name} exercises1={props.part3[2].exercises} />    
      </>
    )
  }


  const Part = (props) => {
    return (
      <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
      </>
    )
  }
 


  const Total = (props) => {
    return (
      <>
      <p>Number of exercises {props.part1[0].exercises + props.part2[1].exercises + props.part3[2].exercises}</p>
      </>
    )
  }


export default App
