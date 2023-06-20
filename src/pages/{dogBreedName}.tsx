import * as React from "react"
import { graphql, Link, Slice } from "gatsby"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

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
interface ContentfulDogBreedsProps {
    contentful_id: string;
    id: string;
    dogBreedName: string;
    breedOrigination: string;
    lifeExpectancy: number;
    maxLifeExpectancy: number;
    friendlinessOfTheBreed:number;
    shedLevel: number;
    dogImage: ImageData;
};

interface PageBreedProps {
  data: {
    contentfulDogBreeds: ContentfulDogBreedsProps;
  }
};

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
  color: #d23669;
`

export default function Page({data}: PageBreedProps){
  const { contentfulDogBreeds  } = data;
  const { contentful_id, id, dogBreedName, breedOrigination, lifeExpectancy, maxLifeExpectancy, friendlinessOfTheBreed, shedLevel, dogImage } = contentfulDogBreeds;
  console.log("props", data);

    const dogPanel = (
        <div key={id}>
          <Container width="fullbleed">
          <p>Go to: <Link to={`/`}>Home</Link></p> 
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
      return(<p>dog page {dogPanel} </p>)
}

export const pageQuery = graphql`
query($dogBreedName: String!) {
  contentfulDogBreeds(dogBreedName: { eq: $dogBreedName }) {
    contentful_id
    id
    dogBreedName
    breedOrigination
    lifeExpectancy
    maxLifeExpectancy
    friendlinessOfTheBreed
    shedLevel
  }
}
`;









