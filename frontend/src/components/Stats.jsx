import React from "react";

const stats_info = [
  {
    id: 1,
    number: "1K+",
    attendees_1_line: "1000+ attendees",
    attendees_2_line: "and guests.",
  },
  {
    id: 2,
    number: "15+",
    attendees_1_line: "15+ speakers, panelists",
    attendees_2_line: "and coaches.",
  },
  {
    id: 3,
    number: "100+",
    attendees_1_line: "100+ startups, SMEs and",
    attendees_2_line: "exhibitors.",
  },
  {
    id: 4,
    number: "10+",
    attendees_1_line: "Investors and",
    attendees_2_line: "venture capitalists.",
  },
];

const Stats = () => {
  return (
    <div className="stats-wrapper">
      <div className="container stats-container">
        <div className="row row-cols-1 row-cols-md-4 g-2 text-center">
          {stats_info.map((info, index) => {
            return (
              <div className="col" key={index}>
                <div className="stat-card m-3 py-5 border border-black border-2">
                  <h1>{info.number} </h1>
                  <span>
                    {info.attendees_1_line} <br /> {info.attendees_2_line}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="row row-cols-1 row-cols-md-4 g-2 text-center">
          <div className="col">
            <div className="stat-card m-3 py-5 border border-black border-2">
              <h1>1K+</h1>
              <span>
                1000+ attendees <br /> and guests.
              </span>
            </div>
          </div>
          <div className="col">
            <div className="stat-card m-3 py-5 border border-black border-2">
              <h1>15+</h1>
              <span>
                15+ speakers, panelists <br /> and coaches.
              </span>
            </div>
          </div>
          <div className="col">
            <div className="stat-card m-3 py-5 border border-black border-2">
              <h1>100+</h1>
              <span>
                100+ startups, SMEs and <br /> exhibitors.
              </span>
            </div>
          </div>
          <div className="col">
            <div className="stat-card m-3 py-5 border border-black border-2">
              <h1>10+</h1>
              <span>
                Investors and <br /> venture capitalists.
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
