"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var axios_1 = require("axios");
var Wsend = /** @class */ (function () {
    function Wsend(url) {
        this.url = url;
    }
    /**
   * @This is Webhook send
   *
   * @Notice
   * This constructor is "MessageSend" only.
   *
   * If you use "EmbedMessageSend" , You use "esend" constructor.
   * @example
   *
   * <This class>.send("nube")
   */
    Wsend.prototype.send = function (strings) {
        var config = { headers: { "Accept": "application/json", "Content-Type": "application/json" } };
        var post = {};
        if (!this.icon && !this.name) {
            post = { content: strings };
        }
        if (!this.icon) {
            post = { content: strings, username: this.name };
        }
        if (!this.name) {
            post = { content: strings, avater_url: this.icon };
        }
        if (!this.url)
            throw new Error('[WebhookSendError] Webhook url not provided.');
        //if(!post) throw new Error('[WebhookSendError] Cannot send empty message.')
        try {
            axios_1["default"].post(this.url, post, config);
        }
        catch (e) {
            throw new Error('Unknown WebHook Error');
        }
    };
    return Wsend;
}());
var SendEmbedMessage = /** @class */ (function (_super) {
    __extends(SendEmbedMessage, _super);
    function SendEmbedMessage(url) {
        return _super.call(this, url) || this;
    }
    /**
     * @this is embed title.
     * This option only used discord webhook.
     * @example
     * SendEmbedMessage().title("title")
     */
    SendEmbedMessage.prototype.title = function (strings) {
        this.embedtitle = strings;
    };
    /**
    * @this is embed description.
    * This option only used discord webhook.
    * @example
    * SendEmbedMessage().title("title").description("description")
    *
    * @hint
    * If description only, throw error.
    */
    SendEmbedMessage.prototype.description = function (strings) {
        this.embeddescription = strings;
    };
    /**
    * @this is embed color.
    * Tips: This setting will be ok without.
    * This option only used discord webhook.
    * @example
    * SendEmbedMessage().title("title").color("colorcode")
    */
    SendEmbedMessage.prototype.color = function (strings) {
        this.embedcolor = strings;
    };
    /**
    * @this is "MessageEmbed" send.
    *
    * @Notice
    * This constructor is use to "MessageEmbed" send only.
    *
    * @example
    * SendEmbedMessage().title('title')
    * SendEmbedMessage().esend()
    *
    */
    SendEmbedMessage.prototype.esend = function () {
        /* 適当 is 適当 */
        var config = { headers: { "Accept": "application/json", "Content-Type": "application/json" } };
        var post = {};
        if (!this.icon && !this.name && this.embedtitle && this.embeddescription && this.embedcolor) {
            post = { "embeds": [{ "title": this.embedtitle, "description": this.embeddescription, "color": this.embedcolor }] };
        }
        if (!this.icon && !this.name && this.embedtitle && this.embeddescription && !this.embedcolor) {
            post = { "embeds": [{ "title": this.embedtitle, "description": this.embeddescription }] };
        }
        if (!this.icon && !this.name && this.embedtitle && !this.embeddescription && !this.embedcolor) {
            post = { "embeds": [{ "title": this.embedtitle }] };
        }
        if (this.icon && this.name && this.embedtitle && this.embeddescription && this.embedcolor) {
            post = { "username": this.name, "avater_url": this.icon, "embeds": [{ "title": this.embedtitle, "description": this.embeddescription, "color": this.embedcolor }] };
        }
        if (this.icon && this.name && this.embedtitle && this.embeddescription && !this.embedcolor) {
            post = { "username": this.name, "avater_url": this.icon, "embeds": [{ "title": this.embedtitle, "description": this.embeddescription }] };
        }
        if (this.icon && this.name && this.embedtitle && !this.embeddescription && !this.embedcolor) {
            post = { "username": this.name, "avater_url": this.icon, "embeds": [{ "title": this.embedtitle }] };
        }
        if (this.icon && !this.name && this.embedtitle && this.embeddescription && this.embedcolor) {
            post = { "avater_url": this.icon, "embeds": [{ "title": this.embedtitle, "description": this.embeddescription, "color": this.embedcolor }] };
        }
        if (this.icon && !this.name && this.embedtitle && this.embeddescription && !this.embedcolor) {
            post = { "avater_url": this.icon, "embeds": [{ "title": this.embedtitle, "description": this.embeddescription }] };
        }
        if (this.icon && !this.name && this.embedtitle && !this.embeddescription && !this.embedcolor) {
            post = { "avater_url": this.icon, "embeds": [{ "title": this.embedtitle }] };
        }
        if (!this.icon && this.name && this.embedtitle && this.embeddescription && this.embedcolor) {
            post = { "username": this.name, "embeds": [{ "title": this.embedtitle, "description": this.embeddescription, "color": this.embedcolor }] };
        }
        if (!this.icon && this.name && this.embedtitle && this.embeddescription && !this.embedcolor) {
            post = { "username": this.name, "embeds": [{ "title": this.embedtitle, "description": this.embeddescription }] };
        }
        if (!this.icon && this.name && this.embedtitle && !this.embeddescription && !this.embedcolor) {
            post = { "username": this.name, "embeds": [{ "title": this.embedtitle }] };
        }
        if (!this.embedtitle && this.embeddescription) {
            throw new Error('[WebhookSendError] Embed title is cannot be empty.');
        }
        if (!this.url)
            throw new Error('[WebhookSendError] Webhook url not provided.');
        try {
            axios_1["default"].post(this.url, post, config);
        }
        catch (e) {
            throw new Error('[WebhookSendError] Unknown WebHook Error');
        }
    };
    return SendEmbedMessage;
}(Wsend));
//All thanks for axios!
/*
Axios :
copyright (c) 2014-present Matt Zabriskie
https://github.com/axios/axios/blob/HEAD/LICENSE


Project-type :

 <MIT License>
copyright (c) 2022 Akikaki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Thank you for download and use! <3

Axiosに感謝！！ありがとう。
*/
exports["default"] = Wsend;
