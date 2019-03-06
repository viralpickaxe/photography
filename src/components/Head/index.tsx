import * as React from 'react'
import { Helmet } from 'react-helmet'

export default class Head extends React.Component<{}, {}> {
  public render() {
    return (
      <Helmet>
        <title>Jamie Davies Photography</title>
        <meta name="description" content="" />

        <link rel="apple-touch-icon" sizes="57x57" href="/assets/favicon/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/favicon/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/assets/favicon/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/favicon/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/assets/favicon/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/favicon/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/assets/favicon/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/favicon/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon-180x180.png" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/assets/favicon/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/assets/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="manifest" href="/assets/favicon/manifest.json" />
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-TileImage" content="assets/favicon/mstile-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#0099FF" />

        <meta property="fb:app_id" content="401937653302924" />
        <meta property="og:title" content="Jamie Davies Photography" />
        <meta property="og:site_name" content="photography.iamjamiedavies.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://photography.iamjamiedavies.com/assets/favicon/apple-touch-icon-180x180.png" />
        <meta property="og:description" content="" />

        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@viralpickaxe" />
        <meta property="twitter:title" content="Jamie Davies Photography" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://photography.iamjamiedavies.com/assets/favicon/apple-touch-icon-180x180.png" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
    )
  }
}
