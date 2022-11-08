// Write your code here
import {Component} from 'react'
import Slider from 'react-slick'

// {
//     id: 'c22777fe-f72e-11eb-9a03-0242ac130003',
//     name: 'Mercury',
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/planets-app/mercury-img.png',
//     description:
//       'Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun planets.',
//   },
import PlanetItem from '../PlanetItem'
import './index.css'

class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <div className="main-container">
        <h1 className="head">Planets</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} details={each} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
