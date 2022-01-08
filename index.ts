import axios from "axios"

class Wsend {
  /**
   * @This is url config.
   */
  public url!: string;
     /**
     * @This is Webhook send 
     */
  send(strings: string): any {

    const config = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    }

    const post = {
        content: strings
    }
   
    if(!this.url) throw new Error('[WebhookSendError] Webhook url not provided.')
    
    try{
    axios.post(this.url, post,config)
    }catch(e){
     throw new Error('Unknown WebHook Error')
    }

  }

}

export { Wsend } ;

