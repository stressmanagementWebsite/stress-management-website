import React from 'react'
import * as PropTypes from "prop-types";
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
    <Layout>
        <p>{data.home.language}</p>
        {/*{data.allDatoCmsWork.edges.map(({ node: work }) => (*/}
        {/*  <div key={work.id} className="showcase__item">*/}
        {/*    <figure className="card">*/}
        {/*      <Link to={`/works/${work.slug}`} className="card__image">*/}
        {/*        <Img fluid={work.coverImage.fluid} />*/}
        {/*      </Link>*/}
        {/*      <figcaption className="card__caption">*/}
        {/*        <h6 className="card__title">*/}
        {/*          <Link to={`/works/${work.slug}`}>{work.title}</Link>*/}
        {/*        </h6>*/}
        {/*        <div className="card__description">*/}
        {/*          <p>{work.excerpt}</p>*/}
        {/*        </div>*/}
        {/*      </figcaption>*/}
        {/*    </figure>*/}
        {/*  </div>*/}
        {/*))}*/}
    </Layout>
)

export default IndexPage

IndexPage.propTypes = {
    data: {
        home: {
            language: PropTypes.string,
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
       }
    }
  }
`
