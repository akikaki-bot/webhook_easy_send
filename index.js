"use strict";
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
    /**
     * @this is "MessageEmbed" send.
     *
     * @Notice
     * This constructor is use to "MessageEmbed" send only.
     *
     * @example
     * <This class>.embedtitle('title')
     * <This class>.esend()
     *
     */
    Wsend.prototype.esend = function () {
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
    return Wsend;
}());
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
