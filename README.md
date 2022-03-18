# webhookをもっと簡単に。
## More easy to Webhook.
Install

```cmd
npm i project-type
```

## How to use 
### import this module
```js
// node.js
const w = require('project-type')
const sw = new w.Wsend(webhookurl)
```
```ts
// typescript
import w from "project-type"
const sw = new w(webhookurl)
```
### Send the webhook
```js
sw.send('nube')
```

## How to send embed messages
```js
// javascript and typescript
sw.embedtitle = 'Hi there'
sw.embeddescrition = "there is a captain hook. "//if this description only, throw the error.

sw.esend()
```


