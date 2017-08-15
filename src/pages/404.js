import React from 'react'
import Helmet from 'react-helmet'

const NotFoundPage = () =>
  <div>
    <Helmet
      title="Gatsby | 404"
      meta={[
        { name: 'description', content: '404 page for our Gatsby!' },
        { name: 'keywords', content: '404, 404 page, Oops, Sorry, Not Found' },
      ]}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>

export default NotFoundPage
