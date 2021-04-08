import React from "react";
import * as PropTypes from "prop-types";
import { Router, Redirect } from "@reach/router";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Header from "../components/Header";
import Section from "../components/Section";

const IndexPage = ({ location, data }) => (
  <Layout>
    {data?.home?.header && (
      <Header content={data.home.header} language={data.home.language}/>
    )}
    {data.home.sections.map((section, index) => (
      <Section sectionContent={section} index={index} decorationPicture={data.home.decorationPicture} verificationBadge={data.home.verificationBadge} />
    ))}
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: {
    home: {
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
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          subheadline: PropTypes.string,
          paragraph: PropTypes.string
        })
      )
    }
  }
};


export const query = graphql`
  query IndexQuery {
    home: datoCmsHome(language: { eq: "en" }) {
      header {
        logo {
          alt
          url
        }
        links {
          href
          label
        }
      }
      language
      background {
        url
        alt
      }
      decorationPicture {
        url
        alt
      }
      verificationBadge
      sections {
        title
        headlineSecondLine
        subheadline
        photo {
          url
          alt
        }
        textOnPhoto
        photoAdditional {
          url
          alt
        }
        paragraph
        paragraphWithLists {
          listItems {
            item
          }
        }
        paragraphBottom
        additionalTextBlock
      }
    }
  }
`;
