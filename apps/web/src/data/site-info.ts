export type SiteInfo = {
  name: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
}

const siteInfo: SiteInfo = {
  name: 'Astro',
  title: 'Build the web you want',
  description: 'Site description here',
  image: {
    src: '/og-image.png',
    alt: 'Build the web you want',
  },
}

export default siteInfo
