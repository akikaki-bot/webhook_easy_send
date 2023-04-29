"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookConfig = void 0;
var WebhookConfig = function (options) {
    if (options) {
        var Obje = {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            options: options
        };
        return Obje;
    }
    else {
        var Obje = {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
        };
        return Obje;
    }
};
exports.WebhookConfig = WebhookConfig;
