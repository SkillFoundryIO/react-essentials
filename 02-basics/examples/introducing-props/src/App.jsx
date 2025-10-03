import Welcome from './components/Welcome'
import Welcome2 from './components/Welcome2'
import Welcome3 from './components/Welcome3'
import Welcome4 from './components/Welcome4'
import Profile from './components/Profile'
import Profile2 from './components/Profile2'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1>Using Props</h1>
      <p>The following are example components demonstrating how props can be passed in React.</p>
      <hr />
      <h2>Binding to an Object</h2>
      <p>The same component can have custom data by passing the data (the name) in as a prop object and accessed using the dot-syntax.</p>
      <Welcome name="Joe" />
      <Welcome name="Susan" />
      <Welcome name="Tommy" />
      <hr />
      <h2>Binding non-string data</h2>
      <p>This component demonstrates using { } around non-string prop values.</p>
      <Profile name="Bob"
        age={32}
        isPremium={true}
        interests={['Coding', 'Gaming', 'Travel']}
      />
      <hr />
      <h2>Using destructuring</h2>
      <p>This component is identical in output to the previous one, but it uses destructuring for ease of readability.</p>
      <Profile2 name="Bob"
        age={32}
        isPremium={true}
        interests={['Coding', 'Gaming', 'Travel']}
      />
      <hr />
      <h2>The children Prop</h2>
      <p>children is a special prop that contains inner elements, which can be standard HTML or JSX components.</p>
      <Card>
        <h5 className="card-title">This is a card title</h5>
        <p className="card-text">
          All of the content inside the Card tag
          is bound to the children prop.
        </p>
      </Card>
      <hr />
      <h2>HTML Attributes</h2>
      <p>Typical HTML elements like id or CSS classes can be bound with destructuring or the spread operator.</p>
      <Welcome2 id="1" className="green" name="Sally (destructured)" />
      <Welcome3 id="2" className="blue" name="Richard (spread operator)" />
      <Welcome4 id="3" name="Kelsey (default example)" />
      <Welcome4 id="4" className="green" name="Brent (override example)" />
    </>
  )
}

export default App
