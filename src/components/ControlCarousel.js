import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

function ControlCarousel() {
  return (
    <Carousel fade>
{/* foto1 */}
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide"/>
        <Carousel.Caption>
          <h3>Proyecta tus mejores ideas</h3>
          <p>logra a que tus sueños de tu vivienda se conviera en realidad</p>
        </Carousel.Caption>
      </Carousel.Item>
{/* foto2 */}
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide"/>
        <Carousel.Caption>
          <h3>Proyecta tus mejores ideas</h3>
          <p>logra a que tus sueños de tu vivienda se conviera en realidad</p>
        </Carousel.Caption>
      </Carousel.Item>
{/* foto3 */}
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide"/>
        <Carousel.Caption>
          <h3>Proyecta tus mejores ideas</h3>
          <p>logra a que tus sueños de tu vivienda se conviera en realidad</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlCarousel;
