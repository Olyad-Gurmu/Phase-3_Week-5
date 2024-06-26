import React, { Component } from 'react';

class NavLinks extends Component {
  render() {
    const { LinkName, LinkUrl, search, cart } = this.props.arrayData;
    return (
      <li class="nav-item">
        <a class="nav-link js-scroll-trigger" href={LinkUrl}>
          {LinkName} <img src={search} alt="" /> <img src={cart} alt="" />
        </a>
      </li>
    );
  }
}

export default NavLinks;
