/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react";
import PropTypes from "prop-types";
import "../styles/index.sass";

const Section = props => {
  return (
    <div
      className={`section-wrapper section-wrapper-${props.index}`}
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
            className="section-paragraph section-paragraph-main"
            dangerouslySetInnerHTML={{ __html: props.sectionContent.paragraph }}
          />
        )}
        {props.sectionContent?.paragraphWithLists && (
          <div className="section-paragraph section-paragraph-with-lists section-paragraph-with-lists-desktop">
            {props.sectionContent?.paragraphWithLists.map((list, index) => {
              return (
                <div className={`list-container ${`list-container-${index}`}`}>
                  {list?.listItems?.map(listItem => (
                    <div className="list-item-container">
                      <div
                        className={`list-item ${
                          index === 0 || index === 1
                            ? "list-item-negative"
                            : "list-item-positive"
                        }`}
                        dangerouslySetInnerHTML={{ __html: listItem?.item }}
                      />
                      <div
                        className={`list-item-icon ${
                          index === 0 || index === 1
                            ? "list-item-icon-cross"
                            : "list-item-icon-tick"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        )}
        {props.sectionContent?.paragraphWithLists && (
          <div className="section-paragraph section-paragraph-with-lists section-paragraph-with-lists-mobile">
            {props.sectionContent?.paragraphWithLists.map((list, index) => {
              if (index === 2) {
                return (
                  <div
                    className={`list-container ${`list-container-${index}`}`}
                  >
                    {list?.listItems?.map(listItem => (
                      <div className="list-item-container">
                        <div
                          className={`list-item ${
                            index === 0 || index === 1
                              ? "list-item-negative"
                              : "list-item-positive"
                          }`}
                          dangerouslySetInnerHTML={{ __html: listItem?.item }}
                        />
                        <div
                          className={`list-item-icon ${
                            index === 0 || index === 1
                              ? "list-item-icon-cross"
                              : "list-item-icon-tick"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                );
              } else if (index === 0) {
                return (
                  <div
                    className={`list-container ${`list-container-${index}`}`}
                  >
                    {list?.listItems?.map(listItem => (
                      <div className="list-item-container">
                        <div
                          className={`list-item ${
                            index === 0 || index === 1
                              ? "list-item-negative"
                              : "list-item-positive"
                          }`}
                          dangerouslySetInnerHTML={{ __html: listItem?.item }}
                        />
                        <div
                          className={`list-item-icon ${
                            index === 0 || index === 1
                              ? "list-item-icon-cross"
                              : "list-item-icon-tick"
                          }`}
                        />
                      </div>
                    ))}
                    {props.sectionContent?.paragraphWithLists[1]?.listItems?.map(
                      listItem => (
                        <div className="list-item-container">
                          <div
                            className={`list-item ${
                              index === 0 || index === 1
                                ? "list-item-negative"
                                : "list-item-positive"
                            }`}
                            dangerouslySetInnerHTML={{ __html: listItem?.item }}
                          />
                          <div
                            className={`list-item-icon ${
                              index === 0 || index === 1
                                ? "list-item-icon-cross"
                                : "list-item-icon-tick"
                            }`}
                          />
                        </div>
                      )
                    )}
                  </div>
                );
              }
            })}
          </div>
        )}
        {props.sectionContent?.paragraphBottom && (
          <div
            className="section-paragraph section-paragraph-bottom"
            dangerouslySetInnerHTML={{
              __html: props.sectionContent.paragraphBottom
            }}
          />
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
    paragraph: PropTypes.string,
    paragraphWithLists: PropTypes.arrayOf(
      PropTypes.shape({
        listItems: PropTypes.arrayOf(
          PropTypes.shape({ item: PropTypes.string })
        )
      })
    ),
    paragraphBottom: PropTypes.string
  }
};

export default Section;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
