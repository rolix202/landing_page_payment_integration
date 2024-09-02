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
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2 g-md-0 text-center">
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
      </div>
    </div>
  );
};

export default Stats;
