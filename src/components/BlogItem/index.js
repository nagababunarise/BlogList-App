import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-container">
      <div className="blog-card">
        <h1 className="heading">{title}</h1>
        <p className="date-card">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}
export default BlogItem
