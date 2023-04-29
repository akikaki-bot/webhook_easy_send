export declare type Embed = {
    "username"?: string;
    "avater_url"?: string;
    "embeds"?: Array<EmbedBase>;
};
declare type EmbedBase = {
    "title"?: string;
    "description"?: string;
    "color"?: number | string;
};
export declare type DefineProperty = string | number | symbol;
export {};
