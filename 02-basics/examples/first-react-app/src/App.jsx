import doggo from './assets/corgi-ball.png'

function App() {
  // declare the variable in the function so it updates 
  // when the component is re-rendered
  const todaysDate = new Date().toLocaleDateString();

  return (
    <>
      <h1>Hello, React! This is Awesome!</h1>
      <img src="/img/sf-logo.png" alt="Skill Foundry Logo" /> 
      <img src={doggo} alt="A Corgi chasing a ball" />
      <p>Today's date is: {todaysDate}</p>
    </>  
  )
}

export default App
