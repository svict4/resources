import React from 'react'
import { SEO } from './SEO'
import siteMetadata from 'components/config/siteMetadata'

export function Head({ title }) {
  
  return (
    <SEO
      title={
        title
          ? `${title} - ${siteMetadata.title}`
          : siteMetadata.title
      }
    />
  )
}
