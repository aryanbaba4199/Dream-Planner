import React from 'react';
import './service.css'

const Service = ({ imageSrc, serviceName }) => (
    <div className="service">
      <img src={imageSrc} alt={serviceName} className='imgprop'  />
      <h5 className="serviceNameBackground">{serviceName}</h5>
    </div>
  );
  

const ServicesList = () => {
  const services = [
    {
        imageSrc : 'https://img.freepik.com/premium-photo/speaker-business-conference-presentation_916191-61697.jpg?w=1060',
        serviceName : 'Wedding Planning'
    },
    { imageSrc: 'https://img.freepik.com/free-photo/camera-photographic-with-smartphone-devices-generative-ai_188544-12171.jpg?w=1060&t=st=1694590755~exp=1694591355~hmac=763631ac2f57c06c12f7244434582f80a7d155ae83e8491a9671c1bac7eaab7e',
     serviceName: 'Photography & VideoGraphy' },
     {
        imageSrc : 'https://img.freepik.com/premium-photo/man-sits-desk-front-two-computer-screens-with-man-looking-screen-that-says-video-it_853677-20490.jpg?w=1380',
        serviceName : 'Video Editing'
     },
    { imageSrc: 'https://img.freepik.com/free-photo/luxurious-dinner-hall-with-large-crystal-chandelier_8353-565.jpg?w=1060&t=st=1694591608~exp=1694592208~hmac=d1502c020641f4e38dc9a89ab225bfaa899c0c9ac967117dcc17174851b6d99d',
     serviceName: 'Wedding Decorators' },

    { imageSrc: 'https://img.freepik.com/free-photo/wedding-setting_1127-3211.jpg?w=1060&t=st=1694591711~exp=1694592311~hmac=2fb9caf2a9cd097f93895a520f454a752c842205b4640cf0495c9f400ee2312c'
    , serviceName: 'Wedding Venues' },

    { imageSrc: 'https://img.freepik.com/premium-photo/dj-night-dance-club-disco-musician-stage-party-mixing-music_234209-1670.jpg?w=1380',
     serviceName: 'DJs' },

     {imageSrc : 'https://img.freepik.com/premium-photo/rihanna-s-phoenix-2020-jeep-cherokee-ralph-mcquarrieinspired_899449-50786.jpg?w=740',
    serviceName : 'Wedding Cars'},

    {
        imageSrc : 'https://img.freepik.com/free-photo/beautiful-young-woman-applying-make-up-indoors-generated-by-ai_188544-33123.jpg?t=st=1694592133~exp=1694595733~hmac=827fba35963e9ef8f8faadeac6b119289ba34d4243e51607dc04756b6436adc4&w=1060',
        serviceName : 'Bridal Makeup Artist'
    },
    {
        imageSrc : 'https://img.freepik.com/free-photo/ornate-henna-tattoo-adds-elegance-hand-generated-by-ai_188544-20463.jpg?t=st=1694592209~exp=1694595809~hmac=026e7a0307da1e8691cb8ca4a2f57f8efbc07695b551fee20e4d3ce10c07f429&w=1060',
        serviceName : 'Mehndi Artist'
    },
    {
        imageSrc : 'https://img.freepik.com/premium-photo/elegant-vintage-wedding-invitation-template_956414-2013.jpg?w=740',
        serviceName : 'Invitation Card'
    },
    {
        imageSrc : 'https://img.freepik.com/free-photo/group-people-stand-front-neon-light-that-says-word-club-it_1340-32810.jpg?t=st=1694592341~exp=1694595941~hmac=23dbde7485ef4673a96e16a3a6b1605c4c3a734ea57da2823aa042b8d6e0b81d&w=360',
        serviceName : 'Choreographer'
    },
    {
        imageSrc : 'https://img.freepik.com/free-photo/man-with-guitar-front-dark-background_1340-41516.jpg?t=st=1694592442~exp=1694596042~hmac=791f28ad3d2a0227f5f7f82e4ea0668cd091f6ebff4d62028526ac9c3a4d1d17&w=740',
        serviceName : 'Artist Booking'
    },
    {
        imageSrc : 'https://img.freepik.com/premium-photo/people-group-catering-buffet-food-indoor-restaurant_916191-56937.jpg?w=1060',
        serviceName : 'Catering Service'
    },
    {
        imageSrc : 'https://img.freepik.com/free-photo/people-dancing-club-with-blue-background_1340-32842.jpg?t=st=1694592626~exp=1694596226~hmac=e4fc2703c32bdfb977a6e0fddddfd1c0801c124643ec8708eeb2cd5cde6c2575&w=1060',
        serviceName : 'Dance Troupe'
    },
    {
        imageSrc : 'https://img.freepik.com/free-photo/luxury-hotel-bedroom-candlelight-glowing-elegance-generated-by-ai_188544-16466.jpg?t=st=1694592691~exp=1694596291~hmac=4fa5cb8d42ce2169c60d199d6232f4f79606252376e64f3e7177142588bb7279&w=1060',
        serviceName : 'Honeymoon'
    },
    {
        imageSrc : 'https://img.freepik.com/free-photo/couple-posing-photo-front-bridge_1340-41357.jpg?t=st=1694592787~exp=1694596387~hmac=896b0dd5fea50366908762e5eb5d7d9f68d7354cb87b9be296e756c3cb236a42&w=360',
        serviceName : 'Wedding Clothes'
    }
    // Add more services as needed
  ];

  return (
    <div className="services">
      {services.map((service, index) => (
        <Service
          key={index}
          imageSrc={service.imageSrc}
          serviceName={service.serviceName}
        />
      ))}
    </div>
  );
};

export default ServicesList;