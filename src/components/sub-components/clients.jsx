import React from "react";

const Clients = () => {
  const box = [
    {
      id: 1,
      imageUrl: "assets/img/clients/client-1.png",
      delay: "100",
    },
    {
      id: 2,
      imageUrl: "assets/img/clients/client-2.png",
      delay: "100",
    },
    {
      id: 3,
      imageUrl: "assets/img/clients/client-3.png",
      delay: "100",
    },
    {
      id: 4,
      imageUrl: "assets/img/clients/client-4.png",
      delay: "100",
    },
    {
      id: 5,
      imageUrl: "assets/img/clients/client-5.png",
      delay: "100",
    },
    {
      id: 6,
      imageUrl: "assets/img/clients/client-6.png",
      delay: "100",
    },
  ];
  return (
    <>
      <div id="clients" className="clients">
        <div className="container">
          <div className="row">
            {box.map((item, index) => (
              <div className="col-lg-2 col-md-4 col-6" key={index}>
                <img
                  src={item.imageUrl}
                  className="img-fluid aos-init aos-animate"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay={item.delay}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
