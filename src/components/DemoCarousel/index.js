import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 1000,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-jammu-special.jpg"
          alt="Jammu Specials"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-rajasthani-special.jpg"
          alt="Rajasthani Specials"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-uttar-pradesh-special.jpg"
          alt="Uttar Pradesh Specials"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/restaurants-app-project/carousel-images-north-indian-special.jpg"
          alt="North Indian Specials"
        />
      </Slider>
    </div>
  )
}

export default ReactSlick
