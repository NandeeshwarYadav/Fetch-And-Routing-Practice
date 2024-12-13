// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogData: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="bg">
        <div>
          <h1>{title}</h1>
        </div>
        <div className="avatar-author">
          <img src={avatarUrl} className="avatar-img" alt={author} />
          <p className="author-name">{author}</p>
        </div>
        <div>
          <img src={imageUrl} className="image" alt={title} />
        </div>
        <div>
          <p>{content}</p>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
