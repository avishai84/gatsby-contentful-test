import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

import styled from "styled-components"

type ImageData = {
  alt: string;
  description: string;
  url:string; 
}
type NodeData =  {
  "shortText": string;
  "timeString": string;
  image: ImageData;
};

interface DataProps {
  data: {
    "allContentfulProductReview": {
        "nodes": NodeData[];
    }
  }
};

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  color: #d23669;
`

const Home = ({data}:DataProps) => {
  const { allContentfulProductReview } = data;
  const { nodes } = allContentfulProductReview;

console.log("data", data);
return(<Username>
  {nodes.map((node) => {
    const { shortText, timeString, image} = node;
    const { url, alt, description } = image;
    return <>
    <p>{shortText} <small><time>{timeString}</time></small></p>
    <figure>
      <img
        src={url}
        alt={alt}
        width={200}
        height={200}
      />
      <figcaption>{description}</figcaption>
    </figure>
   
    </>
  })}
</Username>)
  // return(
  // <Layout pageTitle="Home Page">
  //   <p>using layout</p>
  //   <Username>Avishai</Username>
  // </Layout>)
}

export const pageQuery = graphql`
{
  allContentfulProductReview(skip:0, limit:100){
     nodes{
      shortText
      timeString
      image{
        alt
        url
        description
      }
    }
  }
}
`;

export default Home;

// interface HomepageProps {
//   data: {
//     homepage: {
//       id: string
//       title: string
//       description: string
//       image: { id: string; url: string }
//       blocks: sections.HomepageBlock[]
//     }
//   }
// }

// export default function Homepage(props: HomepageProps) {
//   const { homepage } = props.data

//   return (
//     <Layout>
//       {homepage.blocks.map((block) => {
//         const { id, blocktype, ...componentProps } = block
//         const Component = sections[blocktype] || Fallback
//         return <Component key={id} {...(componentProps as any)} />
//       })}
//     </Layout>
//   )
// }
// export const Head = (props: HomepageProps) => {
//   const { homepage } = props.data
//   return <SEOHead {...homepage} />
// }


// export const query = graphql`
//   {
//     homepage {
//       id
//       title
//       description
//       image {
//         id
//         url
//       }
//       blocks: content {
//         id
//         blocktype
//         ...HomepageHeroContent
//         ...HomepageFeatureListContent
//         ...HomepageCtaContent
//         ...HomepageLogoListContent
//         ...HomepageTestimonialListContent
//         ...HomepageBenefitListContent
//         ...HomepageStatListContent
//         ...HomepageProductListContent
//       }
//     }
//   }
// `
