const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsHome {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsHome.edges.map(({ node: homePage }) => {
        createPage({
          path: `/${homePage.slug}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            slug: homePage.slug
          }
        })
      });
      resolve();
    });
  });
};
