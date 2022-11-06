import React from 'react'
import Link from 'next/link'
import Head from 'next/head'



const HomeNina = (props) => {
  return (
    <>
      <main className="home-nina-container">
        <Head>
          <title>Re:Scoop Studio</title>
        </Head>
        <div className="home-nina-home-nina">
          <div className="home-nina-container1">
            <div className="home-nina-header">
              <Link legacyBehavior href="/">
                <a className="home-nina-link button">
                  <img
                    alt="rsclogo0211525"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/308940ba-b109-4f8e-b1b8-633813b8f839/34c61b25-d159-4372-9053-d6cd8ca80dac?org_if_sml=12432"
                    className="home-nina-rsclogo021"
                  />
                </a>
              </Link>
              <div className="home-nina-group1">
                <a href="#contact" className="home-nina-button2 button">
                  <span className="home-nina-text04">Contact</span>
                </a>
                <button className="home-nina-button3 button">
                  <svg viewBox="0 0 1024 1024" className="home-nina-icon">
                    <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="home-nina-body">
            <div className="home-nina-row">
              <span className="home-nina-text05">
                We create and build
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-nina-text06">powerful brands</span>

            </div>
            <img
              alt="image"
              src="/playground_assets/image12487-tny6-1500w.png"
              className="home-nina-image"
            />
          </div>
          <div id="about" className="home-nina-about-and-contact-colum">
            <div className="home-nina-about-row">
              <span className="home-nina-text07">
                <span className="home-nina-text08">
                  We’re your partner in
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-nina-text09">defining</span>
                <span className="home-nina-text10">
                  {' '}
                  &amp;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-nina-text11">articulating</span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>your brand.</span>
              </span>
              <span className="home-nina-text15">
                You need a partner that understands more than just how to design
                great products and services. We understand how to create strong
                bonds with the larger world of your brand, which is how true
                loyalty is earned.
              </span>
            </div>
            <div className="home-nina-services-row">
              <span className="home-nina-text16">Our Services Expertise</span>
              <div className="home-nina-service">
                <span className="home-nina-text17">
                  <span>Website Design</span>
                  <br></br>
                  <span> &amp; Development</span>
                </span>
                <span className="home-nina-text21">
                  <span>
                    <span>Digital Marketing</span>
                    <br></br>
                    <span> &amp; content</span>
                  </span>
                </span>
                <span className="home-nina-text26">
                  <span>Branding</span>
                  <br></br>
                  <span> &amp; Packaging Design</span>
                </span>
                <span className="home-nina-text30">
                  <span>Game Design</span>
                  <br></br>
                  <span> &amp; Development</span>
                </span>
              </div>
            </div>
            <div id="contact" className="home-nina-contact-row">
              <span className="home-nina-text34">
                Let’s talk
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-nina-text35">
                We are always looking for great partners who are passionate
                about their products and customers.
              </span>
            </div>
          </div>
        
        </div>
      </main>
      <style jsx>
        {`
          .home-nina-container {
            width: 100%;
            display: flex;  
            overflow: auto;
            min-height: 100vh;
            flex-direction: column;
          }
          .home-nina-home-nina {
            flex: 1;
            width: 100%;
            height: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            flex-wrap: wrap;
            max-width: auto;
            box-sizing: border-box;
            align-items: center;
            flex-shrink: 0;
            border-color: transparent;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .home-nina-container1 {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-nina-header {
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .home-nina-link {
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
          .home-nina-link:hover {
            background-color: rgba(255, 254, 244, 0.61);
          }
          .home-nina-rsclogo021 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            border-color: transparent;
          }
          .home-nina-group1 {
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
          .home-nina-link1 {
            display: flex;
            border-width: 0px;
            flex-direction: row;
            text-decoration: none;
            background-color: transparent;
          }
          .home-nina-text {
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
          .home-nina-text:hover {
            font-style: normal;
            font-weight: 700;
          }
          .home-nina-button1 {
            display: flex;
            border-width: 0px;
            flex-direction: row;
            background-color: transparent;
          }
          .home-nina-text02 {
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
          .home-nina-text02:hover {
            font-style: normal;
            font-weight: 700;
          }
          .home-nina-button2 {
            display: flex;
            border-width: 0px;
            flex-direction: row;
            text-decoration: none;
            background-color: transparent;
          }
          .home-nina-text04 {
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
          .home-nina-text04:hover {
            font-style: normal;
            font-weight: 700;
          }
          .home-nina-button3 {
            display: none;
            border-width: 0px;
            flex-direction: row;
            background-color: transparent;
          }
          .home-nina-icon {
            width: 24px;
            height: 24px;
          }
          .home-nina-body {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            justify-content: space-between;
          }
          .home-nina-row {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-left: 10%;
            margin-bottom: 12%;
            flex-direction: column;
          }
          .home-nina-text05 {
            color: #000000;
            height: auto;
            font-size: 500%;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Lexend;
            font-weight: 600;
            line-height: 0.8;
            padding-top: var(--dl-space-space-halfunit);
            font-stretch: normal;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .home-nina-text06 {
            color: #9b00fe;
            width: auto;
            height: auto;
            font-size: 430%;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 0.8;
            padding-top: var(--dl-space-space-halfunit);
            font-stretch: normal;
            padding-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;

            &:nth-of-type(1) { 
              animation: rotate-text-up 1.5s .75s; 
            }
            
            &:nth-of-type(2) { 
              animation: rotate-text-up 1.5s 2s; 
            }  
            
            &:nth-of-type(3) { 
              animation: fade-text-in 1.5s 3.25s forwards;
            }
          }
          .home-nina-image {
            width: 552.18px;
            height: 511px;
            object-fit: cover;
            margin-right: 12%;
          }
          .home-nina-about-and-contact-colum {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-nina-about-row {
            flex: 1;
            width: 100%;
            height: 60%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            padding-bottom: 40%;
            justify-content: space-between;
          }
          .home-nina-text07 {
            top: 15%;
            left: 10%;
            color: rgba(255, 255, 255, 1);
            width: 870px;
            height: auto;
            position: absolute;
            font-size: 90px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Lexend;
            font-weight: 600;
            line-height: 108.5px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-nina-text15 {
            top: 55%;
            left: 48%;
            color: rgba(255, 255, 255, 1);
            width: 45%;
            height: auto;
            position: absolute;
            font-size: 26px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 50px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-nina-services-row {
            flex: 1;
            width: 100%;
            height: 60%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            padding-bottom: 60%;
            justify-content: space-between;
          }
          .home-nina-text16 {
            top: 15%;
            left: 10%;
            color: rgba(255, 255, 255, 1);
            width: 870px;
            height: auto;
            position: absolute;
            font-size: 90px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Lexend;
            font-weight: 600;
            line-height: 108.5px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-nina-service {
            top: 24%;
            left: 50%;
            width: auto;
            height: 596px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-nina-text17 {
            color: rgb(214, 150, 255);
            width: 100%;
            height: auto;
            font-size: 430%;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 51px;
            padding-top: var(--dl-space-space-twounits);
            font-stretch: normal;
            padding-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nina-text21 {
            color: rgba(214, 150, 255, 1);
            width: 100%;
            height: auto;
            font-size: 430%;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 51px;
            padding-top: var(--dl-space-space-twounits);
            font-stretch: normal;
            padding-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nina-text26 {
            color: rgba(214, 150, 255, 1);
            width: 100%;
            height: auto;
            font-size: 430%;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 51px;
            padding-top: var(--dl-space-space-twounits);
            font-stretch: normal;
            padding-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nina-text30 {
            color: rgb(214, 150, 255);
            width: 100%;
            height: auto;
            font-size: 430%;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 51px;
            padding-top: var(--dl-space-space-twounits);
            font-stretch: normal;
            padding-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-nina-contact-row {
            flex: 1;
            width: 100%;
            height: 60%;
            display: flex;
            position: relative;
            flex-wrap: wrap;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            padding-left: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-sixunits);
            padding-bottom: 20%;
            justify-content: space-between;
          }
          .home-nina-text34 {
            top: 15%;
            left: 10%;
            color: rgba(255, 255, 255, 1);
            width: 870px;
            height: auto;
            position: absolute;
            font-size: 90px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Lexend;
            font-weight: 600;
            line-height: 108.5px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-nina-text35 {
            top: 20%;
            left: 50%;
            color: rgba(255, 255, 255, 1);
            width: 45%;
            height: auto;
            position: absolute;
            font-size: 26px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Lexend;
            font-weight: 400;
            line-height: 50px;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-nina-text09 {
            color: #9ee3b6;
          }

   .home-nina-text11 {
            color: #d696ff;
          }

          // Animations
@keyframes rotate-text-up { 
  0% {
    transform: translate3d(0, 80px, 0);
    opacity: 0;
  }
  
  20%, 80% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  
  100% {
    transform: translate3d(0, -40px, 0);
    opacity: 0;
  }
}

@keyframes fade-text-in { 
  0% {
    opacity: 0;
    transform: translate3d(0, 80px, 0);
  }
  
  50%, 100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
          @media (max-width: 1536px) {
            
           .home-nina-text11 {
            color: #d696ff;
            }
            .home-nina-home-nina {
              flex-wrap: wrap;
              align-items: stretch;
            }
            .home-nina-row {
              margin-left: 8%;
            }
            .home-nina-text06 {
              font-family: Lexend;
              font-weight: 400;
              line-height: 0.8;
              text-decoration: none;

              &:nth-of-type(1) { 
                animation: rotate-text-up 1.5s .75s; 
              }
              
              &:nth-of-type(2) { 
                animation: rotate-text-up 1.5s 2s; 
              }  
              
              &:nth-of-type(3) { 
                animation: fade-text-in 1.5s 3.25s forwards;
              }
            }
            .home-nina-text09 {
             color: #9ee3b6;
             }
            .home-nina-image {
              margin-right: 2%;
            }
            .home-nina-about-row {
              flex-wrap: wrap;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nina-text15 {
              top: 60%;
              left: 55%;
              color: rgb(255, 255, 255);
              width: 36%;
              display: flex;
              font-size: 24px;
              align-items: flex-end;
              font-family: Lexend;
              font-weight: 400;
              line-height: 40px;
              text-decoration: none;
            }
            .home-nina-services-row {
              flex-wrap: wrap;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nina-service {
              top: 23%;
              left: 55%;
            }
            .home-nina-text17 {
              font-size: 400%;
            }
            .home-nina-text21 {
              font-size: 400%;
            }
            .home-nina-text26 {
              font-size: 400%;
            }
            .home-nina-text30 {
              font-size: 400%;
            }
            .home-nina-contact-row {
              flex-wrap: wrap;
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-nina-text35 {
              top: 20%;
              left: 55%;
              color: rgb(255, 255, 255);
              width: 36%;
              display: flex;
              font-size: 24px;
              align-items: flex-end;
              font-family: Lexend;
              font-weight: 400;
              line-height: 40px;
              text-decoration: none;
            }
          }
          @media (max-width: 1366px) {
                        
           .home-nina-text11 {
            color: #d696ff;
            }
            .home-nina-container1 {
              background-color: #d9d9d9;
            }
            .home-nina-header {
              height: auto;
              background-color: rgba(255, 254, 244, 1);
            }
            .home-nina-body {
              height: auto;
              margin-top: var(--dl-space-space-threeunits);
            }
            
           .home-nina-text09 {
             color: #9ee3b6;
             }
            .home-nina-row {
              width: 691px;
            }
            .home-nina-text05 {
              line-height: normal;
            }
            .home-nina-image {
              width: 40%;
              height: auto;
              margin-right: 1%;
            }
            .home-nina-about-row {
              height: auto;
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-nina-text07 {
              font-size: 80px;
            }
            .home-nina-text15 {
              top: 64%;
              left: 52%;
              font-size: 18px;
            }
            .home-nina-services-row {
              height: auto;
              margin-top: var(--dl-space-space-threeunits);
              padding-bottom: 70%;
            }
            .home-nina-text16 {
              font-size: 80px;
            }
            .home-nina-service {
              top: 25%;
            }
            .home-nina-contact-row {
              height: auto;
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-nina-text34 {
              font-size: 80px;
            }
            .home-nina-text35 {
              top: 20%;
              left: 55%;
              font-size: 18px;
            }
          }
          @media (max-width: 1280px) {
            .home-nina-container1 {
              height: 100%;
            }
            .home-nina-header {
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-nina-link {
              padding-left: var(--dl-space-space-oneandhalfunits);
              background-color: transparent;
            }
            .home-nina-group1 {
              padding-right: var(--dl-space-space-unit);
              justify-content: flex-end;
            }
            .home-nina-button3 {
              display: none;
              justify-content: flex-start;
            }
            .home-nina-icon {
              fill: rgb(219, 134, 134);
              color: rgb(219, 134, 134);
              display: flex;
            }
            .home-nina-row {
              flex: 1;
              width: 55%;
              margin-left: 8%;
            }
            .home-nina-text05 {
              width: 100%;
              font-size: 350%;
              font-style: normal;
              text-align: left;
              font-weight: 600;
            }
            .home-nina-text06 {
              color: rgb(155, 0, 254);
              font-size: 330%;
              font-family: Lexend;
              font-weight: 400;
              line-height: 0.8;
              text-decoration: none;

              &:nth-of-type(1) { 
                animation: rotate-text-up 1.5s .75s; 
              }
              
              &:nth-of-type(2) { 
                animation: rotate-text-up 1.5s 2s; 
              }  
              
              &:nth-of-type(3) { 
                animation: fade-text-in 1.5s 3.25s forwards;
              }
            }
            .home-nina-image {
              width: 35%;
            }
            .home-nina-about-row {
              padding-bottom: 47%;
            }
            .home-nina-text07 {
              color: rgb(255, 255, 255);
              font-size: 350%;
              font-family: Lexend;
              font-weight: 600;
              line-height: 130%;
              text-decoration: none;
            }
            .home-nina-text08 {
              color: #ffffff;
            }
            .home-nina-text09 {
              color: #9ee3b6;
            }
            .home-nina-text10 {
              color: #ffffff;
            }
            .home-nina-text11 {
              color: #d696ff;
            }
            .home-nina-text15 {
              top: 55%;
              color: rgb(255, 255, 255);
              width: 42%;
              font-size: 100%;
              font-family: Lexend;
              font-weight: 400;
              line-height: 200%;
              text-decoration: none;
            }
            .home-nina-services-row {
              flex-wrap: wrap;
              margin-top: 0px;
              align-items: center;
              padding-bottom: 0px;
              justify-content: center;
            }
            .home-nina-text16 {
              color: rgb(255, 255, 255);
              position: static;
              font-size: 350%;
              text-align: center;
              font-family: Lexend;
              font-weight: 600;
              line-height: 108.5px;
              text-decoration: none;
            }
            .home-nina-service {
              position: static;
            }
            .home-nina-text17 {
              font-size: 250%;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text21 {
              font-size: 250%;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text26 {
              font-size: 250%;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text30 {
              font-size: 250%;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-contact-row {
              flex: 1;
              height: auto;
              flex-wrap: wrap;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: 0%;
              justify-content: center;
            }
            .home-nina-text34 {
              font-size: 180%;
            }
            .home-nina-text35 {
              color: rgb(255, 255, 255);
              font-size: 100%;
              text-align: center;
              align-items: center;
              font-family: Lexend;
              font-weight: 400;
              line-height: normal;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: center;
              text-decoration: none;
            }
          }
          @media (max-width: 769px) {
            .home-nina-link1 {
              display: none;
            }
            .home-nina-button1 {
              display: none;
            }
            .home-nina-button2 {
              display: none;
            }
            .home-nina-button3 {
              display: flex;
            }
            .home-nina-body {
              flex: 0;
              width: 100%;
              height: 816px;
              flex-flow: column-reverse;
              align-self: flex-start;
              margin-top: TwoUnits;
              align-items: center;
              padding-top: HalfUnit;
              justify-content: flex-end;
            }
            .home-nina-row {
              width: 100%;
              margin-left: 0px;
            }
            .home-nina-text05 {
              color: rgb(0, 0, 0);
              width: auto;
              font-size: 300%;
              align-self: center;
              font-style: normal;
              text-align: center;
              font-family: Lexend;
              font-weight: 500;
              line-height: 0.1;
              text-decoration: none;
            }
            .home-nina-text06 {
              width: 100%;
              font-size: 280%;
              align-self: center;
              text-align: center;
              line-height: 120%;
              margin-bottom: HalfUnit;

              &:nth-of-type(1) { 
                animation: rotate-text-up 1.5s .75s; 
              }
              
              &:nth-of-type(2) { 
                animation: rotate-text-up 1.5s 2s; 
              }  
              
              &:nth-of-type(3) { 
                animation: fade-text-in 1.5s 3.25s forwards;
              }
            }
            .home-nina-image {
              width: 411px;
              height: auto;
              align-self: center;
              margin-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .home-nina-about-row {
              flex: 1;
              height: auto;
              flex-wrap: wrap;
              align-self: center;
              margin-top: TwoUnits;
              align-items: center;
              padding-top: HalfUnit;
              padding-bottom: 0%;
              justify-content: center;
            }
            .home-nina-text07 {
              color: rgb(255, 255, 255);
              width: auto;
              position: static;
              font-size: 220%;
              text-align: center;
              font-family: Lexend;
              font-weight: 600;
              line-height: inherit;
              text-decoration: none;
            }
            .home-nina-text08 {
              color: #ffffff;
            }
            .home-nina-text09 {
              color: #9ee3b6;
            }
            .home-nina-text10 {
              color: #ffffff;
            }
            .home-nina-text11 {
              color: #d696ff;
            }
            .home-nina-text15 {
              color: rgb(255, 255, 255);
              width: auto;
              position: static;
              font-size: 110%;
              align-self: center;
              text-align: center;
              align-items: center;
              font-family: Lexend;
              font-weight: 400;
              line-height: normal;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: FourUnits;
              padding-right: FourUnits;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
              text-decoration: none;
            }
            .home-nina-services-row {
              flex: 1;
              height: auto;
              flex-wrap: wrap;
              align-self: center;
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              padding-top: HalfUnit;
              padding-bottom: 0%;
              justify-content: center;
            }
            .home-nina-text16 {
              color: rgb(255, 255, 255);
              width: auto;
              position: static;
              font-size: 220%;
              text-align: center;
              font-family: Lexend;
              font-weight: 600;
              line-height: inherit;
              text-decoration: none;
            }
            .home-nina-service {
              height: auto;
              position: static;
              flex-wrap: wrap;
              margin-top: OneAndHalfUnits;
              align-items: center;
              justify-content: center;
            }
            .home-nina-text17 {
              font-size: 220%;
              text-align: center;
              line-height: normal;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text21 {
              font-size: 220%;
              text-align: center;
              line-height: normal;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text26 {
              font-size: 220%;
              text-align: center;
              line-height: normal;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text30 {
              font-size: 220%;
              text-align: center;
              line-height: normal;
              padding-top: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text34 {
              font-size: 220%;
            }
          }
          @media (max-width: 414px) {
            .home-nina-text05 {
              font-size: 230%;
            }
            .home-nina-text06 {
              font-size: 200%;

              &:nth-of-type(1) { 
                animation: rotate-text-up 1.5s .75s; 
              }
              
              &:nth-of-type(2) { 
                animation: rotate-text-up 1.5s 2s; 
              }  
              
              &:nth-of-type(3) { 
                animation: fade-text-in 1.5s 3.25s forwards;
              }
            }
            .home-nina-text07 {
              font-size: 190%;
            }
            .home-nina-text15 {
              font-size: 90%;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-nina-text16 {
              font-size: 190%;
            }
            .home-nina-text17 {
              font-size: 180%;
            }
            .home-nina-text21 {
              font-size: 180%;
            }
            .home-nina-text26 {
              font-size: 180%;
            }
            .home-nina-text30 {
              font-size: 180%;
            }
            .home-nina-text34 {
              color: rgb(255, 255, 255);
              font-size: 190%;
            }
            .home-nina-text35 {
              font-size: 90%;
              font-family: Lexend;
              font-weight: 400;
              line-height: normal;
              text-decoration: none;
            }
            @keyframes rotate-text-up { 
              0% {
                transform: translate3d(0, 80px, 0);
                opacity: 0;
              }
              
              20%, 80% {
                transform: translate3d(0, 0, 0);
                opacity: 1;
              }
              
              100% {
                transform: translate3d(0, -40px, 0);
                opacity: 0;
              }
            }
            
            @keyframes fade-text-in { 
              0% {
                opacity: 0;
                transform: translate3d(0, 80px, 0);
              }
              
              50%, 100% {
                opacity: 1;
                transform: translate3d(0, 0, 0);
              }
          }
        `}
      </style>
    </>
  )
}

export default HomeNina
