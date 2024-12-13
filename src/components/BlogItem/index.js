// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {items} = props
  const {id, author, title, avatarUrl, topic, imageUrl} = items
  return (
    <Link to={`/blogs/${id}`} className="link">
      <div className="blog-item">
        <div className="card">
          <div>
            <img src={imageUrl} className="img" alt={`item${id}`} />
          </div>
          <div className="details">
            <div>
              <p className="topic">{topic}</p>
              <h1 className="title">{title}</h1>
            </div>
            <div className="avatar-author">
              <img
                src={avatarUrl}
                className="avatar-img"
                alt={`avatar${id} `}
              />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
