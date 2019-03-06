import * as React from 'react'
import styles from './Sidebar.module.scss'

export interface SidebarProps {

}

export default class Sidebar extends React.Component<SidebarProps, {}> {
  public render() {
    return (
      <div className={styles.Sidebar}>
        <div className={styles.Title}>Jamie<br />Davies<br />Photography</div>
      </div>
    );
  }
}
