import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text37">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text27">
                  The system has greatly improved our efficiency in managing
                  appointments and patient records. It has made our workflow
                  seamless and more organized.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Dr. Ahmed Ali
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text34">
                            Head of Cardiology Department
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text33">
                        Excellent system with user-friendly interface.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text29">
                            Dr. Fatima Abdullah
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30">
                            Chief Medical Officer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        Virtual appointments feature has been a game-changer for
                        our clinic. Our patients appreciate the convenience and
                        accessibility it provides.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Dr. Khalid Hassan
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24">
                            Director of Operations
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text28">
                        Storage tracking feature has helped us in maintaining
                        accurate inventory records and avoiding stock shortages.
                        Highly recommended.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Dr. Sara Ahmed
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Pediatrician
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        I have been using this system for a while now, and it
                        has significantly improved the way I manage my patient
                        appointments. The support team is also very responsive.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author3Src:
    'https://images.unsplash.com/photo-1678099278102-45220282ba78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzIzMTU3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: undefined,
  author4Name: undefined,
  author1Name: undefined,
  content1: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1541298645675-6cc8e127934d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzIzMTU3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzIzMTU3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Dr. Fatima Abdullah',
  author3Alt: 'Image of Dr. Khalid Hassan',
  review3: undefined,
  author2Name: undefined,
  author2Position: undefined,
  review2: undefined,
  author3Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1463227438464-68cf21a01f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzIzMTU3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Dr. Sara Ahmed',
  review1: undefined,
  author1Position: undefined,
  author4Position: undefined,
  author1Alt: 'Image of Dr. Ahmed Ali',
  review4: undefined,
  heading1: undefined,
}

Testimonial17.propTypes = {
  author3Src: PropTypes.string,
  author3Position: PropTypes.element,
  author4Name: PropTypes.element,
  author1Name: PropTypes.element,
  content1: PropTypes.element,
  author2Src: PropTypes.string,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author3Alt: PropTypes.string,
  review3: PropTypes.element,
  author2Name: PropTypes.element,
  author2Position: PropTypes.element,
  review2: PropTypes.element,
  author3Name: PropTypes.element,
  author4Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review1: PropTypes.element,
  author1Position: PropTypes.element,
  author4Position: PropTypes.element,
  author1Alt: PropTypes.string,
  review4: PropTypes.element,
  heading1: PropTypes.element,
}

export default Testimonial17
