import React, { Component } from 'react'

export default class Achievements extends Component {
    render() {
        return (
          <div>
            <section className="colorlib-achievements" data-section="achievements">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <h2 className="colorlib-heading">Here are some of my achievements</h2>
                </div>
                </div>
                <div className="row row-pt-md">
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-1">
                    <div className="desc">
                        <h3>Round 2 of Uber HackTag</h3>
                        <p>Was a team member of one of the 10000 teams out of 25000+ teams that went through to the 2nd round in the Uber HackTag hiring challenge.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-3">
                    <div className="desc">
                        <h3>Atlassian App Development Hackathon Finalists 2021</h3>
                        <p>Was a team member of one of the 13 teams out of 2000+ teams that qualified for the finals of the Atlassian App Development Hackathon, held as part of Shaastra, IIT Madras.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-4 text-center animate-box">
                    <div className="services color-5">
                    <div className="desc">
                        <h3>Intel Edge AI Scholar</h3>
                        <p>Was selected as one of the 750 students among 20000+ applicants to the Intel Edge AI scholarship program.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
          </div>
        )
      }
}