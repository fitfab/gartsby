import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const IndexPage = () =>
  <div>
    <Helmet
        title="Gatsby | Home"
        meta={[
          { name: 'description', content: 'Welcome ot the home page!' },
          { name: 'keywords', content: 'reactjs, gatsby, webpack, Sass, Redux, Graphql' },
        ]}
      />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/" className="button">Visit page 2</Link>
  </div>

export default IndexPage
