import { DefineProperty } from "./types";
export declare const WebhookConfig: (options?: {
    [key: string]: DefineProperty;
    [key: number]: DefineProperty;
    [key: symbol]: DefineProperty;
}) => {
    headers: {
        Accept: string;
        "Content-type": string;
    };
};
