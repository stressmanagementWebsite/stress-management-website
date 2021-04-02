import React from "react";
import * as PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Section from "../components/Section";
import Header from "../components/Header";

const IndexPage = ({ data }) => (
  <Layout>
    {data?.home?.header && (
      <Header content={data.home.header} language={data.home.language} />
    )}
    <Section sectionContent={data.home.sections[0]} index={0} />
    <Section
      sectionContent={data.home.sections[1]}
      index={1}
      decorationPicture={data.home.decorationPicture}
    />
    <Section
      sectionContent={data.home.sections[2]}
      index={2}
      decorationPicture={data.home.decorationPicture}
    />
    <Section
      sectionContent={data.home.sections[3]}
      index={3}
      decorationPicture={data.home.decorationPicture}
    />
    <Section
      sectionContent={data.home.sections[4]}
      index={4}
      decorationPicture={data.home.decorationPicture}
    />
  </Layout>
);

export default IndexPage;

IndexPage.propTypes = {
  data: {
    home: {
      language: PropTypes.string,
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
          photo: {
            url: PropTypes.string,
            alt: PropTypes.string
          },
          paragraph: PropTypes.string,
          additionalTextBlock: PropTypes.string,
          paragraphWithLists: PropTypes.arrayOf(
            PropTypes.shape({
              listItems: PropTypes.arrayOf(
                PropTypes.shape({ item: PropTypes.string })
              )
            })
          ),
          paragraphBottom: PropTypes.string
        })
      )
    }
  }
};

export const query = graphql`
  query HomeQuery($slug: String!) {
    home: datoCmsHome(slug: { eq: $slug }) {
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
      underline {
        url
        alt
      }
      sections {
        title
        subheadline
        photo {
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
