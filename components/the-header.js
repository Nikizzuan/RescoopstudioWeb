import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const TheHeader = (props) => {
  return (
    <>
      <div className={`the-header-container ${props.rootClassName} `}>
        <div className="the-header-header">
          <Link legacyBehavior href="/">
            <a className="the-header-link button">
              <img
                alt={props.rsclogo021_alt}
                src={props.rsclogo021_src}
                className="the-header-rsclogo021"
              />
            </a>
          </Link>
          <div className="the-header-group1">
            <Link legacyBehavior href="/">
              <a className="the-header-link1 button">
                <span className="the-header-text">
                  <span>{props.text1}</span>
                </span>
              </a>
            </Link>
            <button className="the-header-button1 button">
              <span className="the-header-text2">
                <span>{props.text2}</span>
              </span>
            </button>
            <button className="the-header-button2 button">
              <span className="the-header-text4">{props.text}</span>
            </button>
            <button className="the-header-button3 button">
              <svg viewBox="0 0 1024 1024" className="the-header-icon">
                <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .the-header-container {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .the-header-header {
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .the-header-link {
            display: flex;
            font-size: 16px;
            transition: 0.3s;
            font-family: Inter;
            font-weight: 400;
            line-height: 1.15;
            border-width: 0px;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            text-transform: none;
            text-decoration: none;
            background-color: transparent;
          }
          .the-header-link:hover {
            background-color: rgba(255, 254, 244, 0.61);
          }
          .the-header-rsclogo021 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: transparent;
          }
          .the-header-group1 {
            width: 301px;
            height: 23.00002098083496px;
            display: flex;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            padding-top: 0;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            padding-left: 0;
            border-radius: 0px 0px 0px 0px;
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 0;
            justify-content: flex-end;
            background-color: transparent;
          }
          .the-header-link1 {
            display: flex;
            border-width: 0px;
            flex-direction: row;
            text-decoration: none;
            background-color: transparent;
          }
          .the-header-text {
            color: #000000;
            height: auto;
            font-size: 24;
            align-self: auto;
            font-style: normal;
            text-align: left;
            transition: 0.3s;
            font-family: Lexend;
            font-weight: 400;
            border-width: 0px;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-header-text:hover {
            font-style: normal;
            font-weight: 700;
          }
          .the-header-button1 {
            display: flex;
            border-width: 0px;
            flex-direction: row;
            background-color: transparent;
          }
          .the-header-text2 {
            color: #000000;
            height: auto;
            font-size: 24;
            align-self: auto;
            font-style: normal;
            text-align: left;
            transition: 0.3s;
            font-family: Lexend;
            font-weight: 400;
            border-width: 0px;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-header-text2:hover {
            font-style: normal;
            font-weight: 700;
          }
          .the-header-button2 {
            display: flex;
            border-width: 0px;
            flex-direction: row;
            background-color: transparent;
          }
          .the-header-text4 {
            color: #000000;
            height: auto;
            font-size: 24;
            align-self: auto;
            font-style: normal;
            text-align: left;
            transition: 0.3s;
            font-family: Lexend;
            font-weight: 400;
            border-width: 0px;
            font-stretch: normal;
            text-decoration: none;
          }
          .the-header-text4:hover {
            font-style: normal;
            font-weight: 700;
          }
          .the-header-button3 {
            display: none;
            border-width: 0px;
            flex-direction: row;
            background-color: transparent;
          }
          .the-header-icon {
            width: 24px;
            height: 24px;
          }

          @media (max-width: 1366px) {
            .the-header-container {
              background-color: #d9d9d9;
            }
            .the-header-header {
              height: auto;
              background-color: rgba(255, 254, 244, 1);
            }
          }
          @media (max-width: 1280px) {
            .the-header-container {
              height: 100%;
            }
            .the-header-header {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .the-header-link {
              padding-left: var(--dl-space-space-unit);
            }
            .the-header-group1 {
              padding-right: var(--dl-space-space-unit);
              justify-content: flex-end;
            }
            .the-header-link1 {
              display: none;
            }
            .the-header-button1 {
              display: none;
            }
            .the-header-button2 {
              display: none;
            }
            .the-header-button3 {
              display: flex;
              justify-content: flex-start;
            }
            .the-header-icon {
              fill: rgb(219, 134, 134);
              color: rgb(219, 134, 134);
              display: flex;
            }
          }
          @media (max-width: 414px) {
            .the-header-header {
              background-color: #FFFFF;
            }
          }
        `}
      </style>
    </>
  )
}

TheHeader.defaultProps = {
  text1: 'Home',
  rsclogo021_alt: 'rsclogo0211525',
  rsclogo021_src: '/playground_assets/rsclogo0211525-kn3r-200h.png',
  text: 'Contact',
  rootClassName: '',
  text2: 'About',
}

TheHeader.propTypes = {
  text1: PropTypes.string,
  rsclogo021_alt: PropTypes.string,
  rsclogo021_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default TheHeader
