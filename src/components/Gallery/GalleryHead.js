import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const Wrapper = styled.section`
  background: ${props => props.theme.colors.tertiary};
  opacity: 0.95;
  backdrop-filter: blur(50px);
  top: 3.5rem;
  margin: 3.5rem auto 0;
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
const BackButton = styled(Link)`
  margin: 1rem 0 0.5rem;
  flex-grow: 1;
  width: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
  text-decoration: none;
  h4 {
    color: ${props => props.theme.colors.base} !important;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    position: fixed;
    left: 2rem;
    align-self: flex-start;
    justify-self: flex-start;
    text-align: left;
  }
`
const Title = styled.h1`
  color: ${props => props.theme.colors.base};
  padding: 0 1rem 1rem;
  flex-grow: 1;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
`
const List = styled.ul`
  text-transform: capitalize;
  font-weight: 600;
  width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
  text-align: center;
  display: block;
  position: relative;
`

const Tag = styled.li`
  display: inline-block;
  a {
    transition: 0.2s;
    background: ${props => props.theme.colors.base};
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-transform: capitalize;
    margin: 0.5rem;
    text-decoration: none;
    color: ${props => props.theme.colors.tertiary};
    &:last-child {
      margin: 0.5rem;
    }
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
`

const GalleryHead = props => {
  return (
    <Headroom
      style={{
        zIndex: '899',
        transition: 'all .5s ease-in-out',
      }}
    >
      <Wrapper>
        <BackButton to="/">
          <h4>⬅ Back</h4>
        </BackButton>
        <Title>{props.title}</Title>
        <List>
          {props.tags.map(tag => (
            <Tag key={tag.id}>
              <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
            </Tag>
          ))}
        </List>
      </Wrapper>
    </Headroom>
  )
}

export default GalleryHead
