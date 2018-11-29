# React Simple Show More

[![npm package][npm-badge]][npm]



[npm-badge]: https://img.shields.io/npm/v/react-simple-show-more.png
[npm]: https://www.npmjs.org/package/react-simple-show-more


Demo: https://elated-curran-7104e4.netlify.com/

Very simple and lightweight `Show More` feature. 

It is in alpha testing. Please make an issue if you have any suggestion or feature request.

## Table of contents
- [Installation](#installation)
- [Overview](#overview)
- [Usage](#usage)
- [Demo](#demo)
- [Props](#props)
- [Contribution](#contribution)


## Installation
```
npm i react-simple-show-more
```

## Overview
Very simple Show more feature.   
This package guarantees you not to collapse in middle of the word.  
For example: with length `23` = "I just want to say Hello" => "I just want to say" (not "I just want to say Hell")

## Usage
Super easy to use:
```
import ShowMore from "react-simple-show-more"

class YourComponent extends Component {
  render() {
    return (
      <ShowMore
        text="Very long text"
      />
    );
  }
}

```

You can also configure it as your demand:
```
import ShowMore from "react-simple-show-more"

class YourComponent extends Component {
  render() {
    return (
      <ShowMore
        text="Very long text"
        length={170}
        showMoreLabel=" Expand"
        showLessLabel=" Collapse"
        tag="a"
        className="text-blue"
        ellipsis="..."
        style={{
          cursor: 'pointer',
          color: 'green',
          fontWeight: 'bold',
        }}
        enabled
      />
    );
  }
}

```
## Demo
You can see demo via this [https://elated-curran-7104e4.netlify.com/](https://elated-curran-7104e4.netlify.com/)  


## Props

| Parameter     | value          | is required |         default         |
|---------------|----------------|:-----------:|:-----------------------:|
| text          |    string      |     yes     |                         |
| length        | string, number |     no      |          170            |
| showMoreLabel |    string      |     no      |       'Show more'       |
| showLessLabel |    string      |     no      |       'Show less'       |
| tag           |    string      |     no      |          'span'         |
| className     |    string      |     no      |          ''             |
| ellipsis      |    string      |     no      |          '...'          |
| style         |    object      |     no      |       default Style     |
| enabled       |    boolean     |     no      |          true           |
 
```
defaultStyle = {
  cursor: 'pointer',
  color: '#007bff',
}
```

## Contribution  
All helps are welcome. Please open a PR and describe what do you want to improve. 

## Issues  
Please create an issue at [https://github.com/nvh95/react-simple-show-more/issues](https://github.com/nvh95/react-simple-show-more/issues). I will spend time to help you.
