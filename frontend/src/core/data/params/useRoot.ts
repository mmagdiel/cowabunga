import { graphql, useStaticQuery } from "gatsby"

const useRoot = (): string => {
  const { site } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            root
          }
        }
      }
    `),
    { siteMetadata } = site,
    { root } = siteMetadata
  return root
}

export { useRoot }
