# webhookをもっと簡単に。
## More easy to Webhook.

- How to use 
in NormalWebhookSend in node.js
```
const web = require('project-type')

const webhook = new web.Wsend()

webhook.url = "WebhookURL"

function send (){
    webhook.send('test!!!')
}

send()
```
in DiscordEmbedMessageSend in node.js
```
const web = require('project-type')

const wsend = new web.Wsend()

wsend.url = "WebhookURL"
wsend.embedtitle='abcdefghijklmnopqrstuvwxyz'
wsend.embeddescription='This is project-type version2.1.0 embed send test.'
wsend.embedcolor="5620992"
wsend.esend()
```
