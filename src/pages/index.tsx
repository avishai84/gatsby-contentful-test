import * as React from "react"
import { graphql, Link } from "gatsby"
import {Flex, Container, Box, Heading, Text } from "../components/ui"
import * as containerStyles from "../dogStyle.module.css";
import {Figure, MeterWithProps} from "../dogComponents/";

interface ImageData {  
    alt: string;
    url: string;
    title?: string;
}

type Items =  {
    id: string;
    dogBreedName: string;
    breedOrigination: string;
    lifeExpectancy?: number;
    maxLifeExpectancy: number;
    friendlinessOfTheBreed:number;
    shedLevel: number;
    dogImage: ImageData;
};

interface DataProps {
  data: {
    allContentfulDogBreeds  : {
        nodes: Items[];
    }
  }
};


const DogBreeds = ({data}:DataProps) => {
  const { allContentfulDogBreeds } = data;
  const { nodes } = allContentfulDogBreeds;

  const dogs = nodes.map(({...item}:Items) => {
    const {id, dogBreedName, breedOrigination, maxLifeExpectancy, friendlinessOfTheBreed, shedLevel, dogImage} = item;
    const { alt, url } = dogImage;

    const dogPanel = (
        <div key={id} className={containerStyles.tight}>
            <Box background="primary" radius="button">
              <Box center padding={5}>
              <Link style={{color:'inherit'}} to={`/${dogBreedName}`}>
                <Flex responsive={true}>
                <Figure>
                    <img
                      src={url}
                      alt={alt}
                      width={90}
                      height={90}
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
    return(<>{dogPanel}</>);
  });

  return(<Container width="normal" ><Flex gap={1} gutter={1}>{dogs}</Flex></Container>)
}

export const pageQuery = graphql`
{
  allContentfulDogBreeds(limit:100){
      nodes{
        id
        dogBreedName
        breedOrigination
        maxLifeExpectancy
        friendlinessOfTheBreed
        shedLevel
        dogImage{
            alt
            url
          }
        }
      }
    }
`;

export default DogBreeds;

