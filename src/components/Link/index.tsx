import * as React from 'react'
import styles from './Link.module.scss'

export interface LinkProps {
  className?: string;
  href: string;
  newTab?: boolean;
}

export default class Link extends React.Component<LinkProps, {}> {
  public render() {
    const className = this.props.className ?
      [styles.Link, this.props.className].join(' ') : styles.Link;

    const target = this.props.newTab ? '_blank' : undefined;

    return <a className={className} href={this.props.href} target={target}>{this.props.children}</a>;
  }
}
