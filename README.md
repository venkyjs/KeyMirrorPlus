# KeyMirrorPlus

This library allows you to create constants by just defining the `key` in the constant. 
The library will create the values same as the constant. This library also supports 
creation of multi-level constants. This work has been inspired from
[bloody-keymirror](https://github.com/bloodyowl/keymirror) and [mirrorkey](https://github.com/janhancic/mirrorkey)

## Installation

```sh
$ npm install keymirrorplus
```

## Require

```javascript
var keyMirrorPlus = require("keymirrorplus")
```

## API

```javascript
keyMirrorPlus(object) > mirroredObject
```

It takes an object or an array of strings and 
creates a new object having original object's keys
and value would be the same as the key

## example

```javascript
var constants = keyMirrorPlus({
  GET_DATA : null,
  RECEIVED_DATA : null
});

console.log(constants.GET_DATA); // "GET_DATA"
```



## Credits

Inspiration from:
- [bloody-keymirror](https://github.com/bloodyowl/keymirror)
- [mirrorkey](https://github.com/janhancic/mirrorkey)

## License

[MIT](LICENSE.md)