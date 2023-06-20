import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import { Container, Box, Kicker, Heading, Text } from "../components/ui"

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
    dogImage?: ImageData;
};

interface DataProps {
  data: {
    allContentfulDogBreeds  : {
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
  const { allContentfulDogBreeds } = data;
  const { nodes } = allContentfulDogBreeds;
 console.log("data", data);
  const dogs = nodes.map(({...item}:Items) => {
    const {id, dogBreedName, breedOrigination, lifeExpectancy, maxLifeExpectancy, friendlinessOfTheBreed, shedLevel} = item;
    // const { fields } = dogImage;
    // const { title, description, file } = fields;
    // const { en_US } = file;
    // const { url } = en_US;
    const dogPanel = (
        <div key={id}>
         <p>Go to Page: <Link to={`/${dogBreedName}`}>{dogBreedName}</Link></p> 
          <Container width="fullbleed">
            <Box background="muted" radius="large">
              <Box center paddingY={5}>
                <Heading>
                  <Kicker>{dogBreedName}</Kicker>
                </Heading>
                <Text>{breedOrigination}</Text>}
              </Box>
              <label htmlFor={`shedding${id}`}>Life Expectancy:</label>
                <progress id={`shedding${id}`} max={maxLifeExpectancy} value={maxLifeExpectancy}> {maxLifeExpectancy} </progress>
                <p>{lifeExpectancy}</p>
                <p>{maxLifeExpectancy}</p>
                <p>{friendlinessOfTheBreed}</p>
                <p>{shedLevel}</p>
                {/* <figure>
                  <img
                    src={url}
                    alt={title.en_US}
                    width={200}
                    height={200}
                
                  />
                  <figcaption>{description.en_US}</figcaption>
                </figure> */}
            </Box>
          </Container>
        </div>
    );
    return dogPanel;
  });


  return(<>{dogs}</>)
}

export const pageQuery = graphql`
{
    allContentfulDogBreeds(limit:100){
      nodes{
        id
        dogBreedName
        breedOrigination
        lifeExpectancy
        maxLifeExpectancy
        friendlinessOfTheBreed
        shedLevel
   
        }
      }
    }
`;

export default DogBreeds;

