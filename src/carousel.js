import React from 'react';
import Carousel from 'react-multi-carousel';
import Image from 'react-bootstrap/Image';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function CarouselComp() {
  return (
    <Carousel responsive={responsive}
      keyBoardControl={true}
      infinite={true}>
      <div><Image src={'img/cat.jpg'} alt="cat" fluid /></div>
      <div><Image src={'img/burger.jpg'} alt="burger" fluid /></div>
      <div><Image src={'img/pizza.jpg'} alt="pizza" fluid /></div>
      <div><Image src={'img/unagi.jpg'} alt="eel" fluid /></div>
      <div><Image src={'img/california.jpg'} alt="California" fluid /></div>
      <div><Image src={'img/japan.jpg'} alt="Japan" fluid /></div>
      <div><Image src={'img/akihabara.jpg'} alt="Akihabara, Tokyo" fluid /></div>
      <div><Image src={'img/la.jpg'} alt="Los Angeles" fluid /></div>
    </Carousel>
  );
}

export default CarouselComp;

// import React, { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import Image from 'react-bootstrap/Image';

// export default function CarouselComp() {
//   const [subtitle, setSubtitle] = useState('');

//   const images = [
//     { src: 'img/cat.jpg', alt: 'cat', subtitle: 'cat explanation' },
//     { src: 'img/burger.jpg', alt: 'burger', subtitle: 'burger explanation' },
//     { src: 'img/pizza.jpg', alt: 'pizza', subtitle: 'pizza explanation' },
//     { src: 'img/unagi.jpg', alt: 'eel', subtitle: 'eel explanation' },
//     { src: 'img/california.jpg', alt: 'California', subtitle: 'California explanation' },
//     { src: 'img/japan.jpg', alt: 'Japan', subtitle: 'Japan explanation' },
//     { src: 'img/akihabara.jpg', alt: 'Akihabara, Tokyo', subtitle: 'Akihabara, Tokyo explanation' },
//     { src: 'img/la.jpg', alt: 'Los Angeles', subtitle: 'Los Angeles explanation' }
//   ];

//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 1
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 1
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1
//     }
//   };

//   const handleAfterChange = (currentSlide) => {
//     setSubtitle(images[currentSlide].subtitle);
//   };

//   return (
//     <>
//       <Carousel 
//         afterChange={handleAfterChange}
//         responsive={responsive}
//         keyBoardControl={true}
//         infinite={true}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <Image src={image.src} alt={image.alt} fluid />
//           </div>
//         ))}
//       </Carousel>
//       <p>{subtitle}</p>
//     </>
//   );
// }