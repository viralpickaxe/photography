import * as React from 'react'
import { graphql } from 'gatsby';
import styles from './index.module.scss'
import Head from '../components/Head';
import Sidebar from '../components/Sidebar';
import Gallery from '../components/Gallery';

interface IndexPageProps {
  data: {
    gallery: {
      edges: {
        node: GalleryQueryResult
      }[]
    }
  }
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div className={styles.Container}>
        <Head />
        <main className={styles.Main}>
          <div className={styles.Sidebar}><Sidebar /></div>
          <div className={styles.Gallery}><Gallery images={this.props.data.gallery.edges.map((({ node }) => node))} /></div>
        </main>
      </div>
    )
  }
};

export interface GalleryQueryResult {
  frontmatter: {
    index: number;
    title: string;
    image: ChildImageSharpResult;
  }
  html: string;
}

export interface ChildImageSharpResult {
  childImageSharp: {
    fluid: {
      aspectRatio: number;
      sizes: string;
      src: string;
      srcSet: string;
      srcSetWebp: string;
      srcWebp: string;
      tracedSVG: string;
    }
  }
}

export const query = graphql`
  query IndexQuery {
    gallery: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/gallery/" } }
      sort: { fields: [frontmatter___index], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            index
            title
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;
