import React from 'react'
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../../styles/projects.module.css'

export default function Projects({data}) {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  console.log(projects)

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt="" />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at { contact } for a quote.</p>
      </div>
    </Layout>
  );
}

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`