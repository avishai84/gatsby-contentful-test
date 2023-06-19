import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

import styled from "styled-components"



interface ImageData {  
    fields: {
        title: {
            en_US: string;
          },
          description: {
            en_US:string;
          }
        file: {
            en_US: {
                url: string;
            }
        }
    }    
}

type Items =  {
    id: string;
    dogBreedName: string;
    breedOrigination: string;
    lifeExpectancy: number;
    maxLifeExpectancy: number;
    friendlinessOfTheBreed:number;
    shedLevel: number;
    dogImage: ImageData;
};

interface DataProps {
  data: {
    dogBreedsCollection: {
        nodes: Items[];
    }
  }
};

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  color: #d23669;
`

const DogBreeds = ({data}:DataProps) => {
//   const { dogBreedsCollection } = data;
//   const { items } = allContentfulProductReview;

console.log("data", data);
// return(<Username>
//   {nodes.map((node) => {
//     const { shortText, timeString, image} = node;
//     const { url, alt, description } = image;
//     return <>
//     <p>{shortText} <small><time>{timeString}</time></small></p>
//     <figure>
//       <img
//         src={url}
//         alt={alt}
//         width={200}
//         height={200}
//       />
//       <figcaption>{description}</figcaption>
//     </figure>
   
//     </>
//   })}
// </Username>)
  // return(
  // <Layout pageTitle="Home Page">
  //   <p>using layout</p>
  //   <Username>Avishai</Username>
  // </Layout>)
  return(<>Dogs</>)
}

export const pageQuery = graphql`
{
    allContentfulDogBreeds(limit:1000){
      nodes{
        id
        dogBreedName
        breedOrigination
        lifeExpectancy
        maxLifeExpectancy
        friendlinessOfTheBreed
        shedLevel
              dogImage{
          fields{
            title{
              en_US
            }
            description{
              en_US
            }
            file{
              en_US{
                url
              }
            }
          }
        }
        }
      }
    }
`;

export default DogBreeds;

