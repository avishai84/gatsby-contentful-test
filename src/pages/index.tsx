import * as React from "react"
import { graphql, Link } from "gatsby"
import { Flex, Container, Box, Heading, Text } from "../components/ui"
import * as containerStyles from "../dogStyle.module.css"
import { Figure, Image } from "../dogComponents/Index"
interface ImageData {
  alt: string
  url: string
  title?: string
}

interface Item {
  id: string
  dogBreedName: string
  breedOrigination: string
  dogImage: ImageData
}

interface DataProps {
  data: {
    allContentfulDogBreeds: {
      nodes: Item[]
    }
  }
}

const DogBreeds = ({ data }: DataProps) => {
  const { allContentfulDogBreeds } = data
  const { nodes } = allContentfulDogBreeds

  const dogs = nodes.map(({ ...item }: Item) => {
    const { id, dogBreedName, breedOrigination, dogImage } = item
    const { alt, url } = dogImage

    const dogPanel = (
      <div key={id} className={containerStyles.tight}>
        <Box background="primary" radius="button">
          <Box center padding={5}>
            <Link style={{ color: "inherit" }} to={`/${dogBreedName}`}>
              <Flex responsive={true}>
                <Figure>
                  <Image src={url} alt={alt} width={"100vw"} height={"100vh"} />
                </Figure>
              </Flex>
              <Flex responsive={true}>
                <Heading style={{ fontSize: "2rem" }}>{dogBreedName}</Heading>
              </Flex>
            </Link>
            <Text variant="kicker">{breedOrigination}</Text>
          </Box>
        </Box>
      </div>
    )
    return <>{dogPanel}</>
  })

  return (
    <Container width="normal">
      <Flex gap={1} gutter={1}>
        {dogs}
      </Flex>
    </Container>
  )
}

export const pageQuery = graphql`
  {
    allContentfulDogBreeds(limit: 100) {
      nodes {
        id
        dogBreedName
        breedOrigination
        dogImage {
          alt
          url
        }
      }
    }
  }
`

export default DogBreeds
