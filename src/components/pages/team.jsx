import React from "react";
import Helmet from "../layout/helmet";
import axios from "axios";
import { useEffect, useState } from "react";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const { data } = await axios.get(
        "https://digi-marketing-inc-back-end.vercel.app/api/team/fetch-team"
      );
      setTeam(data);
    } catch (error) {
      console.error("Error fetching Team Members:", error);
    }
  };
  return (
    <>
      <Helmet title="Team">
        <div id="team" className="team mb-5">
          <div className="container">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-down"
            >
              <span>Team</span>
              <h2>Team</h2>
              <p>
                Meet the Minds Behind the Magic: Get to Know Our Dedicated Team
                of Experts.
              </p>
            </div>

            <div className="row">
              {team.map((item) => (
                <div className="col-xl-3 col-lg-4 col-md-6 mt-4" key={item._id}>
                  <div
                    className="member aos-init aos-animate"
                    data-aos="fade-up"
                  >
                    <img src={item.imageUrl} className="img-fluid" alt="" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>{item.name}</h4>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Helmet>
    </>
  );
};

export default Team;
