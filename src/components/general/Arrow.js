import React from 'react'

import styled, { keyframes } from 'styled-components'

const arrow = keyframes`
  0% {
    opacity: .75;
  }
  100% {
    opacity: 0;
    transform: translate(-10px, -10px) scale(0.382);
  }
`

const DownArrow = styled.div`
  position: relative;
  margin: 0 auto;
  width: 30px;
  height: 30px;
  -webkit-transform: rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 2px var(--color-secondary) solid;
  border-bottom: 2px var(--color-secondary) solid;
  @media screen and (min-width: 52em) {
    position: absolute;
    bottom: 5rem;
  }
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    position: absolute;
    left: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 1px var(--color-secondary) solid;
    border-bottom: 1px var(--color-secondary) solid;
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-name: ${arrow};
  }
`

const Arrow = props => {
  return (
    <a href={props.anchor}>
      <DownArrow />
    </a>
  )
}

export default Arrow
