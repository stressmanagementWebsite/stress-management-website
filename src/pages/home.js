import React from 'react'
import * as PropTypes from "prop-types";
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ location, data }) => (
  <Layout>
      <p>This page is blank</p>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
    data: {
        home: {
            background: {
                url: PropTypes.string,
                alt: PropTypes.string,
            },
            decorationPicture: {
                url: PropTypes.string,
                alt: PropTypes.string,
            },
            underline: {
                url: PropTypes.string,
                alt: PropTypes.string,
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
}
