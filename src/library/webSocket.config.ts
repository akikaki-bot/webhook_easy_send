import { DefineProperty } from "./types"

export const WebhookConfig = (options ?: { [key : DefineProperty] : DefineProperty }) => {
    if(options) {
       const Obje = {
            headers : {
                "Accept" : "application/json",
                "Content-type" : "application/json"
            },
            options
       }

       return Obje

    } else {
        const Obje = {
            headers : {
                "Accept" : "application/json",
                "Content-type" : "application/json"
            },
        }

        return Obje
    }
}