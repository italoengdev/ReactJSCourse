import './App.css'
import { Component } from 'react'

class App extends Component {
  //class fields subs constructor and super
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'Corpo 1'
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'Corpo 3'
      }
    ]
  }
  timeoutUpdate = null

  handleTimeOut = () => {
    const { posts, counter } = this.state
    posts[0].title = 'O título mudou'

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000)
  }
  //lifecycles methods React
  componentDidMount() {
    this.handleTimeOut()
  }

  componentDidUpdate() {
    this.handleTimeOut()
  }
  //limpar lixo gerado na renderização
  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }
  //Aula01
  // handlePClick = () => {
  //   this.setState({ name: 'Senior' })
  // }

  // handleAClick = event => {
  //   event.preventDefault()
  //   const { counter } = this.state
  //   this.setState({ counter: counter + 1 })
  // }

  render() {
    const { posts, counter } = this.state
    // or Destructiring const {name} = this.state / const name = this.state.name

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
          </div>
        ))}
        {
          //Aula 01
          /* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contador
          </a>
        </header> */
        }
      </div>
    )
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá Mundo.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App
