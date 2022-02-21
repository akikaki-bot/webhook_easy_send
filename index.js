"use strict";
exports.__esModule = true;
exports.Wsend = void 0;
var axios_1 = require("axios");
var Wsend = /** @class */ (function () {
    function Wsend() {
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
exports.Wsend = Wsend;
