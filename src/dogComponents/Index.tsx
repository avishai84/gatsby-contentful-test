import * as React from "react"
import styled from "styled-components"
import {Flex} from "../components/ui"

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 50%);
  background-color: #fff;
  img {
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  }
  `;

  interface MeterProps {
    title: string;
    id: string;
    maxLifeExpectancy?: number;
    min:  number | string;
    max:  number | string;
    measureText: string;
  }
  
export const MeterComponent = styled.meter`
padding:0;
margin:0;
line-height: 1.25rem;
width: 150px;
height: 1.25rem;
-webkit-appearance: none; /* Reset appearance */
border: 1px solid #ccc;
border-radius: 3px;
box-shadow: 5px 5px 15px rgb(0 0 0 / 50%);
background-image: linear-gradient(
  90deg, 
  rgba(173, 253, 188, .5) 0%,
  rgba(243, 7, 194, .6) 100%);
);
background-size: 100% 100%;
`;

  export const MeterWithProps = ({title, id, maxLifeExpectancy, measureText, min="0", max="20"}:MeterProps) => {
  
    return(
      <>
        <Flex variant="responsive">
          <p><label htmlFor={title.concat(id)}>{title}:</label></p>
          <small>{min} {measureText}</small>
          <MeterComponent title={`${title} ${maxLifeExpectancy}`} id={title.concat(id)} min={min} max={max} value={maxLifeExpectancy}> {maxLifeExpectancy} </MeterComponent>
          <small>{max} {measureText}</small>
        </Flex>
      </>
    )
  };

