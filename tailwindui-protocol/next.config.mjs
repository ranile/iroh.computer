import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}


export async function redirects() {
  return [
    // old design section
    {
      source: '/design',
      destination: '/layers',
      permanent: true,
    },
    {
      source: '/design/content-addressing',
      destination: '/layers/blobs',
      permanent: true,
    },
    {
      source: '/design/data-transfer',
      destination: '/layers/blobs',
      permanent: true,
    },
    {
      source: '/design/dsht',
      destination: '/layers/sync',
      permanent: true,
    },

    // old docs section
    {
      source: '/docs/beetle',
      destination: '/docs/ipfs',
      permanent: true,
    },
  ]
}

export default withSearch(withMDX(nextConfig))
