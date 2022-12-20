import "./styles.css"

export const PostCard = ({title , cover , body , id}) => (
  //const post = props.post
  //const {post} = props
          <div className='post'>
            <img src={cover} alt={title}/>
            <div className="content">
              <h2>{title}</h2>
              <h3>{body} {id}</h3>
            </div>
          </div>
  
)

//remove the return{}