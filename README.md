# nci-http-notification
HTTP notification plugin for [nci](https://github.com/node-ci/nci)

`data/config.js`

```js
notify: {
  http: {
    method: 'post',
  }
}
```

`data/projects/project/config.js`

```js
notify: {
  on: [ 'done', 'error', 'change' ],
  to: {
    http: (params, app) => ({
      url: '',
      data: {},
    })
  }
},
```
