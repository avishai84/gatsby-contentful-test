export interface MeterProps {
    title: string;
    id: string;
    maxLifeExpectancy?: number;
    min:  number | string;
    max:  number | string;
    measureText: string;
  }

  export interface ImageData {
    alt: string
    url: string
    title?: string
  }
  
  export interface Item {
    id: string
    dogBreedName: string
    breedOrigination: string
    dogImage: ImageData
  }
  
  export interface DataProps {
    data: {
      allContentfulDogBreeds: {
        nodes: Item[]
      }
    }
  }

  interface ImageDataSingle extends ImageData {  
    title: string;
}

interface ContentfulDogBreedsProps {
    id: string;
    dogBreedName: string;
    breedOrigination: string;
    lifeExpectancy: number;
    maxLifeExpectancy: number;
    friendlinessOfTheBreed:number;
    shedLevel: number;
    dogImage: ImageDataSingle;
};

export interface PageBreedProps {
  data: {
    contentfulDogBreeds: ContentfulDogBreedsProps;
  }
};