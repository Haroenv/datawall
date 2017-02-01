import React, {Component} from 'react';
import styled from 'styled-components';

import icons from '../img/icons';
import {colors, sizes, zIndex} from '../constants';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  z-index: ${zIndex.list};
  flex-basis: ${sizes.list.height};
  flex-grow: 0;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: ${props => props.direction};
  width: 100%;
  height: 100%;
`;

const Item = styled.div`
  flex-grow: 1;
  max-width: 50vw;
  display: flex;
  flex-direction: column;

  &:nth-of-type(even) {
    background-color: ${colors.lightGrey};
  }

  &:nth-of-type(odd) {
    background-color: ${colors.darkGrey};
  }
`;

const Heading = styled.div`
  text-transform: uppercase;
  text-align: right;
  font-size: .8em;
  padding: .4rem;
  color: ${colors.veryLightGrey};
`;

const Info = styled.div`
  padding: .4rem;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  margin: .4rem;
`;

const InfoItem = styled.div`
  padding: .4rem;
  width: ${sizes.list.info.width};
  background-color: ${colors.red};
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class List extends Component {
  renderInbound() {
    const {inbound} = this.props.queries;

    return inbound.map((query,index) => (
      <Item key={index}>
        <Heading>{query.destination.name}</Heading>
        <Info>
          <img src={icons.right} alt='inbound request' style={{width: sizes.icon.width, height: sizes.icon.height}}/>
          <Text>{query.origin.name}</Text>
        </Info>
      </Item>
    ));
  }

  renderOutbound() {
    const {outbound} = this.props.queries;

    return outbound.map((query,index) => (
      <Item key={index}>
        <Heading>{query.origin.name}</Heading>
        <Info>
          <img src={icons.right} alt='outbound request' style={{width: sizes.icon.width, height: sizes.icon.height}}/>
          <Text>{query.destination.name}</Text>
        </Info>
      </Item>
    ));
  }

  render() {
    return (
      <Wrapper>
        <Container direction="row">
          <InfoItem>
            <img src={icons.outbound} alt="outbound requests" style={{height: '100%', width: '100%'}}/>
          </InfoItem>
          {this.renderOutbound()}
        </Container>
        <Container direction="row-reverse">
          <InfoItem>
            <img src={icons.inbound} alt="inbound requests" style={{height: '100%', width: '100%'}}/>
          </InfoItem>
          {this.renderInbound()}
        </Container>
      </Wrapper>
    );
  }
}
