"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var webSocket_config_1 = require("./library/webSocket.config");
var Wsend = /** @class */ (function () {
    function Wsend(uri) {
        this.URl = uri;
    }
    /**
     * @param {string} content
     *
     * 単純なデータの送信を行います。
     *
     */
    Wsend.prototype.send = function (content) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var PostData = {
                content: content
            };
            try {
                axios_1["default"].post(_this.URl, PostData, webSocket_config_1.WebhookConfig);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    };
    Wsend.prototype.config = function (option) {
        this.WebhookOptions = option;
        return this;
    };
    Wsend.prototype.changeURI = function (url) {
        var IsurlDep = url === this.URl ? true : false;
        if (IsurlDep) {
            throw new Error("[W001] \u540C\u3058URL\u304C\u5BA3\u8A00\u3055\u308C\u3066\u3044\u307E\u3059\u3002");
        }
        this.URl = url;
        return this;
    };
    return Wsend;
}());
exports["default"] = Wsend;
