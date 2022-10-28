"use strict";
exports.__esModule = true;
exports.Wsend = void 0;
var axios_1 = require("axios");
/**
 * hi ! This is Wsend class!
 *
 * ....Do you know how to use it?
 *
 * ummm........................
 *
 * ok! I write example in this down~
 *
 * ([You can see it](https://npmjs.com/package/project-type))
 *
 * @example on JavaScript
 * const Wsend = require('project-type')
 * const w = new Wsend(here webhookurl)
 *
 * w.send('There are two birds on garden.')
 *
 * @example on TypeScript
 * import Wsend from 'project-type'
 *
 * const w = new Wsend(here webhookurl)
 * w.send('There is a typescript on vscode!')
 *
 * @end
 *
 * Have a good webhook day~ :)
 */
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
    Wsend.prototype.jsend = function (strings, options) {
        var sends = strings;
        var option = options;
        try {
            axios_1["default"].post(this.url, sends, option);
        }
        catch (e) {
            throw new Error('[WebhookSendError] ' + e.message);
        }
    };
    return Wsend;
}());
exports.Wsend = Wsend;
//exports default Wsend;
// ----------------------------------------------------------------
