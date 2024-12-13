import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem/index'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {isLoading: true, blogList: []}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedBlogList = data.map(each => ({
      author: each.author,
      avatarUrl: each.avatar_url,
      id: each.id,
      imageUrl: each.image_url,
      title: each.title,
      topic: each.topic,
    }))
    this.setState({blogList: updatedBlogList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(each => <BlogItem key={each.id} items={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
