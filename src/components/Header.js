import React from 'react';
import { Container } from 'react-bootstrap';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { HeaderWrapper, LogoWrapper, MenuWrapper, InnerHeader, HeaderButton } from '../style';
import { HeaderData } from '../data';
import { Button } from '../components';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }
  return (
    <>
      <HeaderWrapper>
        <Container>
          <InnerHeader>
            <LogoWrapper>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </LogoWrapper>
            <MenuWrapper>
              <ul>
                {HeaderData?.map((item, index) => {
                  return (
                    <li>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </MenuWrapper>
            <HeaderButton>
              <Button btnText='Get in Touch' />
            </HeaderButton>
          </InnerHeader>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Header;
