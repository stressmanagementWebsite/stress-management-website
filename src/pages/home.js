import React from "react";
import * as PropTypes from "prop-types";
import { Router, Redirect } from "@reach/router";
import Layout from "../components/layout";

const IndexPage = ({ location, data }) => (
  <Redirect to="/en">
    <Layout>
      <p>This page is blank</p>
    </Layout>
  </Redirect>
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
