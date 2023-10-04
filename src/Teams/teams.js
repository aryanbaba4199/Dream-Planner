import React from "react";

import './teams.css'



const Service = ({ imageSrc, Name, Designation }) => (
  <div className="service">
    <img src={imageSrc} alt={Name} />
    <h6 className="ts">{Name}</h6>
    <p>{Designation}</p>
  </div>
);



const Teams = () => {
  const services = [
    {
      imageSrc : 'https://i.pinimg.com/564x/87/97/ef/8797eff6d668c8ab55ee60b86a458e73.jpg',
      Name : 'Aryan Dubey',
      Designatation : 'Co-Founder',
    },
    {
      imageSrc : 'https://i.pinimg.com/564x/f9/52/aa/f952aa91662d41c24e6a83a69c4b624b.jpg',
      Name : 'Bittu Kumar',
      Designatation : 'Co-Founder'
    },
    {
      imageSrc: 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/350849074_1361011014476767_5663175305184160066_n.jpg?ccb=11-4&oh=01_AdR32M_LZdO42HxH_DmAXNlAdbZH1uZHPGX9wvKFyHZw_w&oe=650CFA08&_nc_sid=000000&_nc_cat=108',
      Name: 'Pawan Dubey',
      Designatation: 'Production Head'
    },
    {
      imageSrc: 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/372129976_793922972420581_842570430579939041_n.jpg?ccb=11-4&oh=01_AdQGpexiutEjon8mDOsXH5s92InUeAiu57IoZWoQOl9kSg&oe=650EC4CB&_nc_sid=000000&_nc_cat=107',
      Name: 'Amar Kumar',
      Designatation: 'Operation Head'
    },
    
    {
      imageSrc: 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/377282964_857025729469067_4191904128583964251_n.jpg?ccb=11-4&oh=01_AdSCmS29caQNg49yC72uPJsp9R9Az4MGOiX_mZouPTdibg&oe=650EB0C0&_nc_sid=000000&_nc_cat=101',
      Name: 'Navin Kumar',
      Designatation: 'Director of Photography'
    },
    {
      imageSrc: 'https://media-ccu1-1.cdn.whatsapp.net/v/t61.24694-24/324800922_674111107783771_8914453364233757167_n.jpg?ccb=11-4&oh=01_AdS_oJFxDkP0C85YOEiV3hP_JNzecILX8Dm4c4K2k9Z2tA&oe=65125239&_nc_sid=000000&_nc_cat=102',
      Name: 'Kishan Tiwary',
      Designatation: 'Admin Head'
    },
    
    {
      imageSrc : 'https://scontent.fdbd4-1.fna.fbcdn.net/v/t1.6435-9/94312918_1093292124373443_3777703609785909248_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=wfdhYt8DQREAX-1W2w4&_nc_ht=scontent.fdbd4-1.fna&oh=00_AfASwhcKXMj7x8FHfsBOZkykq69TvF1tlaDHphRRIQ41RQ&oe=6534EE92',
      Name : "Neeraj Dubey",
      Designatation : "Editing Head"
    }

    
    // Add more services as needed
  ];

  return (
    <>
    <div className="teamblank"></div>
    <div className="wholt">
      <div className="headroot">
        <h3 className="dream">Team Memebers</h3>
      </div>
    </div>
    <div className="services">
      {services.map((service, index) => (
        <Service
          key={index}
          imageSrc={service.imageSrc}
          Name={service.Name}
          Designation={service.Designatation}
        />
      ))}
    </div>
    </>
  );
};

export default Teams;