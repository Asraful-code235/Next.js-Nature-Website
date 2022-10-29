import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Work = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };

  return (
    <div
      id="work"
      className="flex flex-col  items-center container  justify-center  "
    >
      <div>
        <h1 className="capitalize text-center text-2xl lg:text-5xl font-bold text-slate-500 p-6">
          Some of our accomplishment
        </h1>
      </div>
      <div className="w-full   h-full mt-24 my-own-custom-container ml-3 md:ml-0 lg:ml-0 mb-24 ">
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customRightArrow={<CustomRightArrow />}
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1800}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style "
          className="sm:grid place-items-center"
          itemClass="carousel-item-padding-20-px"
        >
          <div className=" ">
            {' '}
            <Image
              src="https://images.pexels.com/photos/11130997/pexels-photo-11130997.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image1"
              width={400}
              height={250}
              className="rounded-md sm:p-2 lg:p-4"
              // layout="fill"
              // objectFit="contain"
              // sizes="320 640 750"
              layout="responsive"

              // object-fit="cover"
            />
          </div>

          <div className="">
            <Image
              src={
                'https://images.pexels.com/photos/3783052/pexels-photo-3783052.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
              alt="image"
              className="rounded-md sm:p-2 lg:p-4"
              width={400}
              height={250}
              // objectFit="cover"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src={
                'https://images.unsplash.com/photo-1535090467336-9501f96eef89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwcGxhbnRpbmclMjB0cmVlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              }
              alt="image"
              className="rounded-md sm:p-2 lg:p-4"
              width={400}
              height={250}
              // objectFit="cover"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src={
                'https://images.unsplash.com/photo-1523515405008-65ac0dc327a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZSUyMHBsYW50aW5nJTIwdHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              }
              alt="image"
              className="rounded-md sm:p-2 lg:p-4"
              width={400}
              height={250}
              // objectFit="cover"
              layout="responsive"
            />
          </div>
        </Carousel>
      </div>
      <div className="flex mb-24 items-center justify-center w-[80%] mx-auto sm:w-[100%] ">
        <p className="text-salate-400 text-lg text-center">
          Our team gathers and raises seeds from numerous species, teaching,
          learning, and creating tools to further scientific knowledge. More
          than half of the worlds terrestrial biodiversity is supported by
          rainforests. In order to combat the deteriorating climate and
          extinction crises, we must restore these ecosystems. There is a strong
          group of committed individuals here who are prepared to take immediate
          action on your behalf.
        </p>
      </div>
    </div>
  );
};

export default Work;
