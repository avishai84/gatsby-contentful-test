import * as React from "react"
import { graphql, Link } from "gatsby"
import {Flex, Box, Heading, Text } from "../components/ui"
import * as containerStyles from "../dogStyle.module.css";
import {Figure, MeterWithProps, Image} from "../dogComponents/";
import {PageBreedProps} from "../types";

export default function Page({data}: PageBreedProps){
  const { contentfulDogBreeds  } = data;
  const { id, dogBreedName, breedOrigination, maxLifeExpectancy, friendlinessOfTheBreed, shedLevel, dogImage } = contentfulDogBreeds;
  const { alt, url, title } = dogImage;
  const dogPanel = (
    <div key={id} className={containerStyles.tight}>
        <Box background="primary" radius="button">
          <Box center padding={5}>
            <Flex responsive={true}>
            <Figure>
              <Image 
                width="140vw"
                height="140vh"
                src={url} 
                alt={alt} 
                title={title} 
              />
              </Figure>
            <Heading style={{fontSize:"2rem"}}>
                {dogBreedName}
              </Heading>
            </Flex>
            <Text>{breedOrigination}</Text>
            <MeterWithProps
              id={`${id}${maxLifeExpectancy}`}
              min={0}
              max={20}
              title={"Life Expectancy"}
              maxLifeExpectancy={maxLifeExpectancy}
              measureText="years"
            />
            <MeterWithProps
              id={`${id}${friendlinessOfTheBreed}`}
              min={0}
              max={5}
              title={"Friendliness Of The Breed"}
              maxLifeExpectancy={friendlinessOfTheBreed}
              measureText="Friendly"
            />
            <MeterWithProps
              id={`${id}${shedLevel}`}
              min={0}
              max={5}
              title={"Shed Level"}
              maxLifeExpectancy={shedLevel}
              measureText="Shedding"
            />
            </Box>
        </Box>
      </div>);

      return(<>
      <Box background="muted">
       <Link style={{color:'inherit'}} to={'/'}>Home</Link>
      </Box>
      {dogPanel}
      <Box background="muted">&nbsp;</Box>
    </>)
}

export const pageQuery = graphql`
query($dogBreedName: String!) {
  contentfulDogBreeds(dogBreedName: { eq: $dogBreedName }) {
    id
    dogBreedName
    breedOrigination
    lifeExpectancy
    maxLifeExpectancy
    friendlinessOfTheBreed
    shedLevel
		dogImage{
      alt
      url
      title
    }
  }
}
`;









