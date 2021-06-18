import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a 3rd year Computer Science Student at Amrita School of Engineering, Coimbatore.</p>
                    <p>I am passionate about machine learning, web development and problem solving.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What do I do?</span>
                <h2 className="colorlib-heading">Here are some of my areas of expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <div className="desc">
                    <h3>Backend Web Development</h3>
                    <p>I am proficient in developing backend systems to serve websites using Flask, Django and Express.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>I have a good grasp over the fundamental concepts of data structures and algorithms.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>I am proficient in machine learning algorithms and using data to build machine learning models.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <div className="desc">
                    <h3>Testing</h3>
                    <p>I am proficient in Selenium and I also have used tools such as Mocha and Jest for unit testing.</p>
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
