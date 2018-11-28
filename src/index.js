import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowMore extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    enabled: PropTypes.any,
    length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    tag: PropTypes.string,
    style: PropTypes.object,
    ellipsis: PropTypes.string,
  }

  static defaultProps = {
    enabled: true,
    length: 170,
    className: '',
    tag: 'span',
    style: {},
    ellipsis: '...'
  }
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
    };
  }

  shouldTruncateString = string => string.length > parseInt(this.props.length)

  truncatedString = string => string.slice(0, this.props.length).split(' ').slice(0, -1).join(' ')

  toggleShowMore = (event) => {
    if (event && event.preventDefault) event.preventDefault()
    this.setState(prevState => ({ showMore: !prevState.showMore }));
  }

  render() {
    const { showMore } = this.state;
    const { text, enabled, className, style, ellipsis } = this.props;
    const Tag = this.props.tag;
    if (enabled && this.shouldTruncateString(text)) {
      return (
        <React.Fragment>
          {!showMore && `${this.truncatedString(text)}${ellipsis}`}
          {showMore && text}
          <Tag
            className={className}
            onClick={this.toggleShowMore}
            style={style}
          >{showMore ? 'Show less' : 'Show more'}
          </Tag>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {text}
      </React.Fragment>
    );
  }
}

export default ShowMore;
