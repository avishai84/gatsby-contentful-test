import * as React from "react"
import { graphql, Link, Slice } from "gatsby"
import {Flex, Container, Box, Heading, Text } from "../components/ui"
import * as containerStyles from "../dogStyle.module.css";
import {Figure, MeterWithProps, Image} from "../dogComponents/";

import styled from "styled-components"

interface ImageData {  
    alt: string;
    url: string;
    title: string;
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



export default function Page({data}: PageBreedProps){
  const { contentfulDogBreeds  } = data;
  const { contentful_id, id, dogBreedName, breedOrigination, lifeExpectancy, maxLifeExpectancy, friendlinessOfTheBreed, shedLevel, dogImage } = contentfulDogBreeds;
  const { alt, url, title } = dogImage;
  console.log("props", data);

  const dogPanel = (
    <div key={id} className={containerStyles.tight}>
        <Box background="primary" radius="button">
          <Box center padding={5}>
          <Link style={{color:'inherit'}} to={`/${dogBreedName}`}>
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
         
            </Link>
            <Text>{breedOrigination}</Text>
            <MeterWithProps
              id={id}
              min={0}
              max={20}
              title={"Life Expectancy"}
              maxLifeExpectancy={maxLifeExpectancy}
              measureText="years"
            />
            <MeterWithProps
              id={id}
              min={0}
              max={5}
              title={"Friendliness Of The Breed"}
              maxLifeExpectancy={friendlinessOfTheBreed}
              measureText="Friendly"
            />
            <MeterWithProps
              id={id}
              min={0}
              max={5}
              title={"Shed Level"}
              maxLifeExpectancy={shedLevel}
              measureText="Shedding"
            />
            </Box>
        </Box>
    </div>
);





    // const dogPanel = (
    //     <div key={id}>
    //       <Container width="fullbleed">
    //       <p>Go to: <Link to={`/`}>Home</Link></p> 
    //         <Box background="muted" radius="large">
    //           <Box center paddingY={5}>
    //             <Heading>
    //               <Kicker>{dogBreedName}</Kicker>
    //             </Heading>
    //             <Text>{breedOrigination}</Text>
    //           </Box>
    //           <label htmlFor={`shedding${id}`}>Life Expectancy:</label>
    //             <progress id={`shedding${id}`} max={maxLifeExpectancy} value={maxLifeExpectancy}> {maxLifeExpectancy} </progress>
    //             <p>{lifeExpectancy}</p>
    //             <p>{maxLifeExpectancy}</p>
    //             <p>{friendlinessOfTheBreed}</p>
    //             <p>{shedLevel}</p>
    //             <figure>
    //               <img
    //                 src={url}
    //                 alt={alt}
    //                 width={200}
    //                 height={200}
                
    //               />
    //               <figcaption>{title}</figcaption>
    //             </figure>
    //         </Box>
    //       </Container>
    //     </div>
    // );
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
		dogImage{
      alt
      url
      title
    }
  }
}
`;









