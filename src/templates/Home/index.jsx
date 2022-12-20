import './styles.css'
import { Component } from 'react'
import { loadPosts } from '../../utils/load-post'
import { Posts } from '../../components/Posts'
import { Button } from '../../components/Button'

export class Home extends Component {
  //class fields subs constructor and super
  state = {
    posts: [],
    allPosts:[],
    page:0,
    postPerPage:10,
    searchValue:""
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
  async componentDidMount() {
    await this.loadPosts()
    // this.handleTimeOut()
  }

  loadPosts = async () => {
    const {page, postPerPage} = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page,postPerPage),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postPerPage,
      allPosts,
      posts,
    } = this.state
    const nextPage = page + postPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts)

    this.setState({posts, page:nextPage})
  }

  handleChange = (e) => {
    const {value} = e.target
    this.setState({searchValue: value})
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
    const { posts,page, postPerPage,allPosts, searchValue} = this.state
    const noMorePosts = page + postPerPage >= allPosts.length
    // or Destructiring const {name} = this.state / const name = this.state.name

    const filtedPosts = !!searchValue ? 
    allPosts.filter(post =>{
      return post.title.toLowerCase().includes(searchValue.toLowerCase())
    }) 
    : posts

    return (
      <section className='container' >
        {!!searchValue && ( 
        <h1>Search Value: {searchValue}</h1>
        )}
       
        <input 
          onChange={this.handleChange}
          value={searchValue}
          type="search"
        /><br/><br/>

        {filtedPosts.length > 0 &&(
          <Posts posts={filtedPosts} />
        )}

        {filtedPosts.length === 0 &&(
          <p>Não Existem posts =</p>
        )}

        <Posts posts={filtedPosts}/>
        <div className='buttom-container'>
        {!searchValue && ( 
       <Button 
       text={"Load More Posts"}
       onClick={this.loadMorePosts}
       disabled={noMorePosts}
       />
        )} 
        
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

export default Home
