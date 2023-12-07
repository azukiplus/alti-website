import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import {Image, Container} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css'
import "./css/carousel.css";

export default function CarouselComp() {
  /**
   * Note: subtitle isn't working; work is commented out 
   */

  const [subtitle, setSubtitle] = useState(
    {
      cat: true,
      pizza: true,
      unagi: true,
      california: true,
      japan: true,
      akihabara: true,
      la : true,
    }
  );

  const [hidden, setHidden] = useState(false)

  const images = [
    { src: 'img/cat.jpg', subtitle: 'A close up image of a brown cat with pale green eyes and long, white whiskers. ' },
    { src: 'img/pizza.jpg', subtitle: 'A whole pizza with tomato sauce, black olive slices, and a generous amount of cheese topped with leafy greens.' },
    { src: 'img/unagi.jpg', subtitle: 'White rice inside a black bowl with Japanese grilled eel on top. The eel is slightly charred.' },
    { src: 'img/california.jpg', subtitle: 'A partially cloudy landscape with red grass, a rocky path, and a tree on the left. The ocean is visible in the distance.' },
    { src: 'img/japan.jpg', subtitle: 'A Japanese street with a road in the middle surrounded by brown buildings. There is a bar and a bank visible on the left side, and a crosswalk on the street.' },
    { src: 'img/akihabara.jpg', subtitle: 'A picture of Akihabara, Tokyo on a sunny day. There are steep buildings with colorful Japanese ads plastered on them. It is crowded, with many people and cars.' },
    { src: 'img/la.jpg', subtitle: 'A wooden boardwalk in Los Angeles with the ocean and beach visible around it. There are people crossing the boardwalk, and palm trees in the distance.' }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const clickImage = (src) => {
    let key = src.replace('img/','').replace('.jpg','')
    console.log(subtitle)
    setSubtitle(prev => ({
      ...subtitle,
      [key] : !subtitle[key]
    }))

  };

  

  return (
    <>
      <Container className="p-4">
        <h4 className='text-center pt-4'>Click an image below to see some example alt text.</h4>
      </Container>
      <Carousel
        infinite={true}
        responsive={responsive}
        keyBoardControl={true}
      // autoPlay={true}
      // autoPlaySpeed={5000}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-card">
            <Image className="image" src={image.src} alt={image.subtitle} onClick={() => clickImage(image.src)} fluid />
            <div className={subtitle[image.src.replace('img/','').replace('.jpg','')] ? 'fadeIn' : 'fadeOut'}>
              <p className='subtitle' aria-hidden='true'>{image.subtitle}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}