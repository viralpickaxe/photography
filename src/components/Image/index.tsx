import * as React from 'react'
import Img from 'gatsby-image'
import styles from './Image.module.scss'
import { GalleryQueryResult } from '../../pages';

export interface ImageProps {
  image: GalleryQueryResult;
}

export default class Image extends React.Component<ImageProps, {}> {
  public render() {
    const { frontmatter } = this.props.image;
    return (
      <div className={styles.Image}>
        <Img fluid={frontmatter.image.childImageSharp.fluid} />
        <div className={styles.Card}>
          {frontmatter.title}
        </div>
        <div className={styles.Tick} />
      </div>
    );
  }
}
