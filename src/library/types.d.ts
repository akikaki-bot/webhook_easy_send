export type Embed = {
    "username"?: string;
    "avater_url"?: string;
    "embeds"?: Array<EmbedBase>;
};
type EmbedBase = {
    "title"?: string;
    "description"?: string;
    "color"?: number | string;
};
export type DefineProperty = string | number | symbol;
export {};
