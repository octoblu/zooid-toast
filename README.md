# zooid-toast

[![Build Status](https://travis-ci.org/octoblu/zooid-toast.svg?branch=master)](https://travis-ci.org/octoblu/zooid-toast)
[![npm version](https://badge.fury.io/js/zooid-toast.svg)](http://badge.fury.io/js/zooid-toast)
[![Code Climate](https://codeclimate.com/github/octoblu/zooid-toast.png)](https://codeclimate.com/github/octoblu/zooid-toast)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

## Install
```
npm install --save zooid-toast
```

## Props
| Prop      | Type   | Default | Description                          |
| ----------| -------| --------| -------------------------------------|
| className | string |         | Additional css classes to merge into the component |
| message | string |         | Message to show. Should be concise. |
| timeout | number |    4000  | timeout in milliseconds |


## Example
```js
import Toast from 'zooid-toast'

<Toast message="Device Updated!" />
<Toast message="Device Updated!" timeout="7777" />
<Toast message="Device Updated!" timeout="7777" className="AwesomeClass" />
```
