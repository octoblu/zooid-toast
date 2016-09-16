# zooid-toast

[![Build Status](https://travis-ci.org/octoblu/zooid-toast.svg?branch=master)](https://travis-ci.org/octoblu/zooid-toast)
[![Test Coverage](https://codecov.io/gh/octoblu/zooid-toast/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/zooid-toast)
[![Dependency status](http://img.shields.io/david/octoblu/zooid-toast.svg?style=flat)](https://david-dm.org/octoblu/zooid-toast)
[![devDependency Status](http://img.shields.io/david/dev/octoblu/zooid-toast.svg?style=flat)](https://david-dm.org/octoblu/zooid-toast#info=devDependencies)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

[![NPM](https://nodei.co/npm/zooid-toast.svg?style=flat)](https://npmjs.org/package/zooid-toast)

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
