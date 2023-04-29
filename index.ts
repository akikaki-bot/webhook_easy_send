
import axios from "axios"
import { WebhookConfig } from "./src/library/webSocket.config"
import { DefineProperty } from "./src/library/types"

export default class Wsend {

    private URl : string
    private WebhookOptions : { [key : DefineProperty] : DefineProperty}

    constructor(
        uri : string
    ) {
        this.URl = uri
    }

    /**
     * @param {string} content
     * 
     * 単純なデータの送信を行います。
     * 
     */
    send(content : string) : Promise<void> {
       return new Promise((resolve,reject) => {
           const PostData = {
              content
           }
           try {
                axios.post(
                        this.URl,
                        PostData,
                        WebhookConfig(this.WebhookOptions)
                )
                resolve()
           } catch(error) {
                reject(error)
           }
       })
    }

    config(option : { [key : DefineProperty] : DefineProperty }) : this {
        this.WebhookOptions = option
        return this
    }

    changeURI(url : string) : this {
        const IsurlDep = url === this.URl ? true : false
        if(IsurlDep) {
            throw new Error(`[W001] 同じURLが宣言されています。`)
        }
        this.URl = url
        return this
    }

}

