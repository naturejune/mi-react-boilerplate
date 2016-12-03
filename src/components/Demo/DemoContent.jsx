import React from 'react';

class DemoContent extends React.Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    content: 'Demo Content Component',
  }

  constructor(props) {
    super(props);
    this.displayName = 'DemoContent';
  }

  render() {
    return <span>this.props.content</span>;
  }
}

export default DemoContent;
