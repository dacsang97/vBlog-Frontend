/**
 * Created by sang on 11/28/16.
 */
import React, { Component } from 'react';
import { Panel, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import { Icon } from '../';

class SearchCard extends Component {
  componentDidMount() {

  }
  render() {
    const header = (<h3><Icon name="icon-magnifier" /> Tìm kiếm</h3>);
    return (
      <Panel header={header}>
        <form>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon><Icon name="icon-magnifier" /></InputGroup.Addon>
              <FormControl type="text" placeholder="Tìm kiếm" />
            </InputGroup>
          </FormGroup>
        </form>
      </Panel>
    );
  }
}

export default SearchCard;
