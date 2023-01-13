import React from 'react'

import PropTypes from 'prop-types'

import './accordion.css'

const Accordion = (props) => {
  return (
    <div className={`accordion-accordion ${props.rootClassName} `}>
      <div data-role="accordion-container" className="accordion-element">
        <div className="accordion-details">
          <span className="accordion-text">{props.text}</span>
          <span data-role="accordion-content" className="accordion-text01">
            {props.text1}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element1 accordion-element"
      >
        <div className="accordion-details1">
          <span className="accordion-text02">{props.text2}</span>
          <span data-role="accordion-content" className="accordion-text03">
            {props.text3}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon02"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element2 accordion-element"
      >
        <div className="accordion-details2">
          <span className="accordion-text04">{props.text4}</span>
          <span data-role="accordion-content" className="accordion-text05">
            {props.text5}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon04"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element3 accordion-element"
      >
        <div className="accordion-details3">
          <span className="accordion-text06">{props.text41}</span>
          <span data-role="accordion-content" className="accordion-text07">
            {props.text51}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon06"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
      <div
        data-role="accordion-container"
        className="accordion-element4 accordion-element"
      >
        <div className="accordion-details4">
          <span className="accordion-text08">{props.text411}</span>
          <span data-role="accordion-content" className="accordion-text09">
            {props.text511}
          </span>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          data-role="accordion-icon"
          className="accordion-icon08"
        >
          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
        </svg>
      </div>
    </div>
  )
}

Accordion.defaultProps = {
  text41: 'Client retention',
  text51:
    'Our large team focuses on creating a more personalized bond with every fan. By doing this we also gather the biggest amount of profit from each fan.',
  text2: 'Social media management',
  text1:
    'We setup your account to maximize profit directly. We also create external funnels to lead more',
  text411: 'Marketing & Growth',
  text: 'Account management',
  text4: 'Content strategies',
  text511:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text5:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  text3:
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud',
  rootClassName: '',
}

Accordion.propTypes = {
  text41: PropTypes.string,
  text51: PropTypes.string,
  text2: PropTypes.string,
  text1: PropTypes.string,
  text411: PropTypes.string,
  text: PropTypes.string,
  text4: PropTypes.string,
  text511: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Accordion
