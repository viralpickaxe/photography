import * as React from 'react'
import Img from 'gatsby-image'
import styles from './Gallery.module.scss'
import { GalleryQueryResult } from '../../pages';

export interface GalleryProps {
  images: GalleryQueryResult[];
}

export default class Gallery extends React.Component<GalleryProps, {}> {
  public render() {
    return (
      <div className={styles.Gallery}>
        {this.props.images.map((image) => (
          <div key={image.frontmatter.index} className={styles.Image}>
            <Img fluid={image.frontmatter.image.childImageSharp.fluid} />
          </div>
        ))}
      </div>
    );
  }
}
