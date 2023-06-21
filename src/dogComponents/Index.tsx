import * as React from "react"
import styled from "styled-components"
import {Flex} from "../components/ui"
import {MeterProps} from "../types";

export const Span = styled.span`
  border-radius: 50%;
  border: 1px dashed red;
  padding: 4px;
  background: red;
  width: 25px;
  line-height: 1;
  height: 25px;
  font-size: 16px;
`;

interface ImageProps {
  width:string; height:string
}
 export const Image = styled.img<ImageProps>`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
  width: ${props => props.$width || "90px"};
  height: ${props => props.$height || "90px"};
`;

export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 50%);
  background-color: #fff;
  `;
  
export const MeterComponent = styled.meter`
  padding:0;
  margin:0;
  line-height: 1.25rem;
  width: 150px;
  height: 1.25rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: 5px 5px 15px rgb(0 0 0 / 50%);
`;

  export const MeterWithProps = ({title, id, maxLifeExpectancy, measureText, min="0", max="20"}:MeterProps) => {
  
    return(
        <>
          <p><label htmlFor={title.concat(id)}>{title}:</label></p>
          <Flex>
          <small>{min} {measureText}</small>
          <MeterComponent title={`${title} ${maxLifeExpectancy}`} id={title.concat(id)} min={min} max={max} value={maxLifeExpectancy}>{maxLifeExpectancy}</MeterComponent>
          <Span>{maxLifeExpectancy}</Span>
          <small>{max} {measureText}</small>
        </Flex>
      </>
    )
  };

