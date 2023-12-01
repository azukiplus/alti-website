import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'react-bootstrap/Image';
import 'react-multi-carousel/lib/styles.css'

export default function CarouselComp() {
  /**
   * Note: subtitle isn't working; work is commented out 
   */

  // const [subtitle, setSubtitle] = useState('cat explanation');

  const images = [
    { src: 'img/cat.jpg', alt: 'cat', subtitle: 'cat explanation' },
    { src: 'img/burger.jpg', alt: 'burger', subtitle: 'burger explanation' },
    { src: 'img/pizza.jpg', alt: 'pizza', subtitle: 'pizza explanation' },
    { src: 'img/unagi.jpg', alt: 'eel', subtitle: 'eel explanation' },
    { src: 'img/california.jpg', alt: 'California', subtitle: 'California explanation' },
    { src: 'img/japan.jpg', alt: 'Japan', subtitle: 'Japan explanation' },
    { src: 'img/akihabara.jpg', alt: 'Akihabara, Tokyo', subtitle: 'Akihabara, Tokyo explanation' },
    { src: 'img/la.jpg', alt: 'Los Angeles', subtitle: 'Los Angeles explanation' }
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

  // const handleAfterChange = (currentSlide) => {
  //   const correctIndex = currentSlide % images.length;
  //   console.log(correctIndex)
  //   setSubtitle(images[correctIndex].subtitle);
  // };

  return (
    <>
      <Carousel
        // afterChange={handleAfterChange}
        infinite={true}
        responsive={responsive}
        keyBoardControl={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        >
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} alt={image.alt} fluid />
          </div>
        ))}
      </Carousel>
      {/* <p>{subtitle}</p> */} 
    </>
  );
}