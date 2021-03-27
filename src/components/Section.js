/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";

const Section = props => {
  return (
    <div
      className="section-wrapper"
      style={{
        backgroundImage: `${
          props.background.url ? `url(${props.background.url})` : "none"
        }`
      }}
    >
      <div className="paper paper-large">
        <p className="section-headline-container">
          {props.sectionContent?.title && <h1>{props.sectionContent.title}</h1>}
        </p>
        {props.underline?.url && (
          <img
            className="section-headline-underline"
            src={props.underline.url}
            alt={props.underline.alt || ""}
          />
        )}
        {props.sectionContent?.subheadline && (
          <h4 className="section-subheadline">
            {props.sectionContent.subheadline}
          </h4>
        )}
        {props.sectionContent?.paragraph && (
          <div
            className="section-paragraph"
            dangerouslySetInnerHTML={{ __html: props.sectionContent.paragraph }}
          ></div>
        )}
        {props.decorationPicture?.url && (
          <img
            className="business-cards"
            src={props.decorationPicture.url}
            alt={props.decorationPicture.alt || ""}
          />
        )}
      </div>
    </div>
  );
};

Section.propTypes = {
  background: {
    url: PropTypes.string,
    alt: PropTypes.string
  },
  decorationPicture: {
    url: PropTypes.string,
    alt: PropTypes.string
  },
  underline: {
    url: PropTypes.string,
    alt: PropTypes.string
  },
  sectionContent: {
    title: PropTypes.string,
    subheadline: PropTypes.string,
    paragraph: PropTypes.string
  }
};

export default Section;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
