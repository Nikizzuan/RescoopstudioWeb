import React from 'react'

import PropTypes from 'prop-types'

const TheFooter = (props) => {
  return (
    <>
      <div className="the-footer-footer">
        <a href="tel:+60164639033" className="the-footer-link">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="the-footer-image"
          />
        </a>
        <a
          href="mailto:wutsgoodrescoop@gmail.com?subject=Re:scoop, assemble!"
          className="the-footer-link1"
        >
          <img
            alt={props.Image_alt}
            src={props.Image_src}
            className="the-footer-image1"
          />
        </a>
      </div>
      <style jsx>
        {`
          .the-footer-footer {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-fourunits);
            justify-content: flex-end;
          }
          .the-footer-link {
            display: contents;
          }
          .the-footer-image {
            width: 36px;
            margin-top: var(--dl-space-space-fourunits);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .the-footer-link1 {
            display: contents;
          }
          .the-footer-image1 {
            width: 36px;
            margin-top: var(--dl-space-space-fourunits);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

TheFooter.defaultProps = {
  image_alt1: 'image',
  Image_src: '/playground_assets/mail_duetone%20%5B1%5D.svg',
  Image_alt: 'image',
  image_src1: '/playground_assets/whatsapp%20%5B1%5D.svg',
}

TheFooter.propTypes = {
  image_alt1: PropTypes.string,
  Image_src: PropTypes.string,
  Image_alt: PropTypes.string,
  image_src1: PropTypes.string,
}

export default TheFooter
