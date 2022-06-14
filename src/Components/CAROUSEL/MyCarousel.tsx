import { Carousel} from "react-bootstrap";
import img from "../../images/7.jpg"
import img2 from "../../images/8.jpg"
import img3 from "../../images/9.jpg"
import "./MyCarousel.css"

const MyCarousel = ()=>{
return(

    <div id="Carousel">
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={img3}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
)
}

export default MyCarousel