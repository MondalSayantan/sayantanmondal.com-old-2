import React from "react";
import * as componentStyles from "./ProjectCard.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/(projects)/" } }) {
        nodes {
          frontmatter {
            title
            link
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            hero_image_alt
          }
          id
          body
        }
      }
    }
  `);

  return (
    <>
      {data.allMdx.nodes.map((node) => {
        const image = getImage(node.frontmatter.hero_image);
        return (
          <div className={componentStyles.projectCard}>
            <div className={componentStyles.projectCardBody}>
              <div>
                <h1 className={componentStyles.title}>
                  {node.frontmatter.title}
                </h1>
              </div>
              <div>
                <p className={componentStyles.description}>
                  <MDXRenderer>{node.body}</MDXRenderer>
                </p>
              </div>
              <div className={componentStyles.link}>
                <a href={node.frontmatter.link} target="_blank">
                  <button>Link</button>
                </a>
              </div>
            </div>
            <div className={componentStyles.projectCardImageContainer}>
              <GatsbyImage
                objectFit={"fill"}
                image={image}
                alt={node.frontmatter.hero_image_alt}
                className={componentStyles.projectCardImage}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
