import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="projects">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Oxind <span>Made using HTML, CSS, JavaScript and Firebase</span></h2>
                        <p>Built a website to act as a centralized source of information for oxygen cylinders as part of the fight against the second wave of COVID 19.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Conversion Rate Predictor <span>Made using Jupyter Notebook and Flask</span></h2>
                        <p>Built and compared Machine Learning models that can be used to facilitate the prediction and optimization of the conversion rate of a product.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Kanbanize - Zoom integrated Kanban board <span>Made using MERN stack, Zoom SDK and Twilio API</span></h2>
                        <p>Created a Chrome web app. It is a Kanban board with the added functionality of automatic creation of Zoom meeting based on text in the cards created.</p> 
                      </div>
                    </div>
                  </article>
				  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>DigiMark - A Digital Marketing Discord bot <span>Made using Discord.py and Heroku</span></h2>
                        <p>Created a Discord bot with multiple commands to serve digital marketing and SEO needs. Is being used by the largest Digital Marketing Discord server.</p> 
                      </div>
                    </div>
                  </article>
				  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Voice Prescription <span>Made using HTML, CSS, JavaScript, Python and NLP</span></h2>
                        <p>Built a responsive web app that helps transcribe doctor voice input into prescriptions in pdf form.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
