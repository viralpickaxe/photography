import * as React from 'react'
import styles from './Gallery.module.scss'
import { GalleryQueryResult } from '../../pages';
import Image from '../Image';

export interface GalleryProps {
  images: GalleryQueryResult[];
}

export default class Gallery extends React.Component<GalleryProps, {}> {
  public render() {
    return (
      <div className={styles.Gallery}>
        {this.props.images.map((image) => <Image key={image.frontmatter.index} image={image} />)}
      </div>
    );
  }
}
