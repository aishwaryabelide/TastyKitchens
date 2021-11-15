import {MdSort} from 'react-icons/md'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const MenuSorter = () => (
  <>
    <h1 className="heading-restaurant">Popular Restaurants</h1>
    <div className="menu-list-selector">
      <p className="homepage-description">
        Select your favorite restaurant special dish and make your day happy...
      </p>

      <div className="sort-by">
        <MdSort className="sort-icon" />
        <p className="homepage-description">Sort by Lowest</p>
      </div>
    </div>
    <hr className="line" />
  </>
)

export default MenuSorter
