import React from 'react'

const Stats = () => {
    return (
        <div className='stats-wrapper'>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-2 text-center">
                    <div className="col">
                        <div className="stat-card m-3 py-5 border border-black border-2">
                            <h1>1K+</h1>
                            <span>1000+ attendees <br /> and guests.</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="stat-card m-3 py-5 border border-black border-2">
                            <h1>15+</h1>
                            <span>15+ speakers, panelists <br /> and coaches.</span>
                        </div>

                    </div>
                    <div className="col">
                        <div className="stat-card m-3 py-5 border border-black border-2">
                            <h1>100+</h1>
                            <span>100+ startups, SMEs and <br /> exhibitors.</span>
                        </div>

                    </div>
                    <div className="col">
                        <div className="stat-card m-3 py-5 border border-black border-2">
                            <h1>10+</h1>
                            <span>Investors and <br /> venture capitalists.</span>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Stats