# keyMirrorPlus

## install

```sh
$ npm install keymirrorplus
```

## require

```javascript
var keyMirrorPlus = require("keymirrorplus")
```

## api

### keyMirrorPlus(object) > mirroredObject

It takes an object or an array of strings and 
creates a new object having original object's keys
and value would be the same as the key

## example

```javascript
var constants = keyMirrorPlus({
  GET_DATA : null,
  RECEIVED_DATA : null
})

constants.GET_DATA // "GET_DATA"
```

## Credits

The concept has been inspired from https://github.com/bloodyowl/keymirror (for mirroring)
and https://github.com/janhancic/mirrorkey (for support for Array). Both of the above
APIs do not support multi-level objects - which is supported in KeyMirrorPlus

## License

[MIT](LICENSE.md)