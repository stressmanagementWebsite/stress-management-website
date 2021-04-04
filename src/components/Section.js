/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react";
import PropTypes from "prop-types";
import "../styles/index.sass";

const anchorNames = ["session1", "stress", "session2", "sessions1-10", "start", "contacts"];

const Section = props => {
  return (
    <a id={anchorNames[props.index]}>
      <div
        className={`section-wrapper section-wrapper-${props.index}`}
        style={{
          backgroundImage: `${
            props.background?.url ? `url(${props.background?.url})` : "none"
          }`
        }}
      >
        <div className="paper paper-large">
          <p className="section-headline-container">
            {props.sectionContent?.title && (
              <h1 className="section-headline">{props.sectionContent.title}</h1>
            )}
          </p>
          <p className="section-headline-container">
            {props.sectionContent?.headlineSecondLine && (
                <h1 className="section-headline">{props.sectionContent.headlineSecondLine}</h1>
            )}
          </p>
          {props.sectionContent?.subheadline && (
            <div
              className="section-subheadline"
              dangerouslySetInnerHTML={{
                __html: props.sectionContent.subheadline
              }}
            />
          )}
          {props.index !== 0 && props.sectionContent?.photo && (
            <div className="photo-container first-image">
              <img
                src={props.sectionContent.photo.url}
                alt={props.sectionContent.photo.alt || "photo"}
              />
            </div>
          )}
          {props.sectionContent?.paragraph && (
            <div
              className="section-paragraph section-paragraph-main"
              dangerouslySetInnerHTML={{
                __html: props.sectionContent.paragraph
              }}
            />
          )}
          {props.index === 0 && props.sectionContent?.photo && (
              <div className="photo-container first-image">
                <img
                    src={props.sectionContent.photo.url}
                    alt={props.sectionContent.photo.alt || "photo"}
                />
              </div>
          )}
          {props.index === 0 && props.sectionContent?.photoAdditional && (
              <div className="photo-container second-image">
                <img
                    src={props.sectionContent.photoAdditional.url}
                    alt={props.sectionContent.photoAdditional.alt || "photo"}
                />
              </div>
          )}
          {props.sectionContent?.paragraphWithLists && (
            <div className="section-paragraph section-paragraph-with-lists section-paragraph-with-lists-desktop">
              {props.sectionContent?.paragraphWithLists.map((list, index) => {
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
                              dangerouslySetInnerHTML={{
                                __html: listItem?.item
                              }}
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
          {props.sectionContent?.additionalTextBlock && (
            <div
              className="section-paragraph section-additional-text-block"
              dangerouslySetInnerHTML={{
                __html: props.sectionContent.additionalTextBlock
              }}
            />
          )}
          {props.sectionContent?.paragraphBottom && (
            <div
              className="section-paragraph section-paragraph-bottom"
              dangerouslySetInnerHTML={{
                __html: props.sectionContent.paragraphBottom
              }}
            />
          )}
          {props.index !== 0 && props.decorationPicture?.url && (
            <img
              className="business-cards"
              src={props.decorationPicture.url}
              alt={props.decorationPicture.alt || ""}
            />
          )}
        </div>
      </div>
    </a>
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
    additionalTextBlock: PropTypes.string,
    photo: {
      url: PropTypes.string,
      alt: PropTypes.string
    },
    photoAdditional: {
      url: PropTypes.string,
      alt: PropTypes.string
    },
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
