import React from 'react';

import Wrapper from './styled-components/Wrapper';
import Title from './styled-components/Title';
import DropDown from './styled-components/DropDown';
import DropDownEntry from './styled-components/DropDownEntry';
import Button from './styled-components/Button';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Title>Make a Reservation</Title>
        <DropDown calendar />
        <br />
        <DropDown time>
          <DropDownEntry>5:00 PM</DropDownEntry>
          <DropDownEntry>5:30 PM</DropDownEntry>
          <DropDownEntry>6:00 PM</DropDownEntry>
          <DropDownEntry>6:30 PM</DropDownEntry>
          <DropDownEntry>7:00 PM</DropDownEntry>
          <DropDownEntry>7:30 PM</DropDownEntry>
          <DropDownEntry>8:00 PM</DropDownEntry>
          <DropDownEntry>8:30 PM</DropDownEntry>
          <DropDownEntry>9:00 PM</DropDownEntry>
        </DropDown>
        &nbsp;
        <DropDown partySize>
          <DropDownEntry>2 people</DropDownEntry>
          <DropDownEntry>3 people</DropDownEntry>
          <DropDownEntry>4 people</DropDownEntry>
          <DropDownEntry>5 people</DropDownEntry>
          <DropDownEntry>6 people</DropDownEntry>
          <DropDownEntry>7 people</DropDownEntry>
          <DropDownEntry>8 people</DropDownEntry>
        </DropDown>
        <Button>Find a Table</Button>
      </Wrapper>
    );
  }
}

export default Reservation;
