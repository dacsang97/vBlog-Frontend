/**
 * Created by sang on 11/28/16.
 */
import React, { Component } from 'react';
import { Card, Input } from 'antd';
import { Icon } from '../';

const Search = Input.Search;

class SearchCard extends Component {
  renderHeader() {
    return (
      <h6>
        <Icon name="icon-magnifier" /> Tìm kiếm
      </h6>
    );
  }
  render() {
    return (
      <Card className="widget">
        <Search placeholder="Tìm kiếm" onSearch={value => console.log(value)} style={{ width: '100%' }} />
      </Card>
    );
  }
}


export default SearchCard;
