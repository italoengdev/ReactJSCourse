import './App.css'
import { Component } from 'react'

class App extends Component {
  //class fields subs constructor and super
  state = {
    posts: [
      // {
      //   id: 1,
      //   title: 'O título 1',
      //   body: 'Corpo 1'
      // },
      // {
      //   id: 2,
      //   title: 'O título 2',
      //   body: 'Corpo 2'
      // },
      // {
      //   id: 3,
      //   title: 'O título 3',
      //   body: 'Corpo 3'
      // }
    ]
  }
  // timeoutUpdate = null

  // handleTimeOut = () => {
  //   const { posts, counter } = this.state
  //   posts[0].title = 'O título mudou'

  //   this.timeoutUpdate = setTimeout(() => {
  //     this.setState({ posts, counter: counter + 1 })
  //   }, 1000)
  // }
  //lifecycles methods React
  componentDidMount() {
    this.loadPosts()
    // this.handleTimeOut()
  }

  loadPosts = async () => {
    const postResponse = fetch("https://jsonplaceholder.typicode.com/posts")
    const photoResponse = fetch("https://jsonplaceholder.typicode.com/photos")

    const [posts, photos] = await Promise.all([postResponse, photoResponse])

    const postsJson = await posts.json()
    const photosJson = await photos.json()

    const postsAndPhotos = postsJson.map((post,index) => {
      return { ...post, cover: photosJson[index].url}
    })

    this.setState({posts: postsAndPhotos})
  }

  componentDidUpdate() {
    // this.handleTimeOut()
  }
  //limpar lixo gerado na renderização
  componentWillUnmount(){
    // clearTimeout(this.timeoutUpdate)
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
    const { posts} = this.state
    // or Destructiring const {name} = this.state / const name = this.state.name

    return (
      <section className='container'>
        <div className="posts">
        {posts.map(post => (
          <div className='post'>
            <img src={post.cover} alt={post.title}/>
            <div key={post.id} className="post-content">
              <h1>{post.title}</h1>
              <h3>{post.body}</h3>
            </div>
          </div>
        ))}
        </div>
      </section>
      
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
