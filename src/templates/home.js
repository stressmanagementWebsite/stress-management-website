import React from "react";
import * as PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Section from "../components/Section";

const IndexPage = ({ data }) => (
  <Layout>
    <Section
      background={data.home.background}
      decorationPicture={data.home.decorationPicture}
      underline={data.home.underline}
      sectionContent={data.home.sections[0]}
      index={0}
    />
    <Section
      background={data.home.background}
      decorationPicture={data.home.decorationPicture}
      underline={data.home.underline}
      sectionContent={data.home.sections[1]}
      index={1}
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
          paragraph: PropTypes.string,
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
        paragraph
        paragraphWithLists {
          listItems {
            item
          }
        }
        paragraphBottom
      }
    }
  }
`;
