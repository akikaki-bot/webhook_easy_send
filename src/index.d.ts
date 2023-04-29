import { DefineProperty } from "./library/types";
export default class Wsend {
    private URl;
    private WebhookOptions;
    constructor(uri: string);
    /**
     * @param {string} content
     *
     * 単純なデータの送信を行います。
     *
     */
    send(content: string): Promise<void>;
    config(option: {
        [key: DefineProperty]: DefineProperty;
    }): this;
    changeURI(url: string): this;
}
