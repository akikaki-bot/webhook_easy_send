"use strict";
exports.__esModule = true;
exports.Wsend = void 0;
var axios_1 = require("axios");
var Wsend = /** @class */ (function () {
    function Wsend() {
    }
    /**
    * @This is Webhook send
    */
    Wsend.prototype.send = function (strings) {
        var config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        };
        var post = {
            content: strings
        };
        if (!this.url)
            throw new Error('[WebhookSendError] Webhook url not provided.');
        try {
            axios_1["default"].post(this.url, post, config);
        }
        catch (e) {
            throw new Error('Unknown WebHook Error');
        }
    };
    return Wsend;
}());
exports.Wsend = Wsend;
