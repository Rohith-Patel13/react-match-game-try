import './index.css'

const AppItem = props => {
  const {eachObjectItemProp} = props
  const {thumbnailUrl} = eachObjectItemProp
  return (
    <li className="liTabContainer">
      <img src={thumbnailUrl} alt="thumbnail" className="tabItemImage" />
    </li>
  )
}

export default AppItem
