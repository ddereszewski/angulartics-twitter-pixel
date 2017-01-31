## angulartics-twitter-pixel

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

Twitter Pixel plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-twitter-pixel
```

Then add `angulartics.twitter.pixel` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics', 
  require('angulartics-twitter-pixel')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-twitter-pixel
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-twitter-pixel/dist/angulartics-twitter-pixel.min.js"></script>
```

Then add `angulartics.twitter.pixel` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics', 
  'angulartics.twitter.pixel'
]);
```

## How your tracking code should look like


```html
<!-- Twitter universal website tag code -->
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nw5za');
</script>
<!-- End Twitter universal website tag code -->
```

## Changes in the Twitter Pixel snippet

The snippet code provided by Twitter Pixel does an automatic pageview hit, but this is already done by Angulartics (unless you disable it) so make sure to delete the tracking line:

```js
      ...
      twq('track','PageView');
      ...
    </script>
```

Done. Open your app, browse across the different routes and check your account https://ads.twitter.com/accounts

## twitter Pixel Helper (Chrome Extension)

The Twitter Pixel Helper is a troubleshooting tool that helps you validate your instalation. You can use this helper to validate that PageView was sent to Twitter correctly.

[Download on Chrome Webstore](https://chrome.google.com/webstore/detail/twitter-pixel-helper/jepminnlebllinfmkhfbkpckogoiefpd)

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-twitter-pixel.svg
[npm-url]: https://npmjs.org/package/angulartics-twitter-pixel
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-twitter-pixel.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-twitter-pixel
[bower-image]: https://img.shields.io/bower/v/angulartics-twitter-pixel.svg
[bower-url]: http://bower.io/search/?q=angulartics-twitter-pixel
[dep-status-image]: https://img.shields.io/david/mooyoul/angulartics-twitter-pixel.svg
[dep-status-url]: https://david-dm.org/mooyoul/angulartics-twitter-pixel
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com