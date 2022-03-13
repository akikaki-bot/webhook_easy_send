import axios from "axios"

class Wsend {
  constructor(url: string) {
    this.url = url;
  }
  /**
   * @this is embed title.
   * This option only used discord webhook.
   * @example
   * <This class>.embedtitle = "title"
   */
  public embedtitle !:string
    /**
   * @this is embed description.
   * This option only used discord webhook.
   * @example
   * <This class>.embeddescription = "description"
   */
  public embeddescription !:string
    /**
   * @this is embed color.
   * Tips: This setting will be ok without.
   * This option only used discord webhook.
   * @example
   * <This class>.color = "color"
   */
  public embedcolor !:string
  /**
   * @This is url config.
   * @example
   * new Wsend(url)
   */
  public url!: string;
 /**
  * @this is icon url.
  * @example
   * <This class>.icon = "iconurl"
  */
  public icon! :string;
  /**
   * @this is webhook account name settings.
   * @example
   * <This class>.name = "name"
  */
  public name! :string;
      /**
     * @This is Webhook send 
     * 
     * @Notice
     * This constructor is "MessageSend" only.
     * 
     * If you use "EmbedMessageSend" , You use "esend" constructor.
     * @example
     *
     * <This class>.send("nube")
     */
  send(strings: string): void{
    let config = {headers: {"Accept": "application/json","Content-Type": "application/json",}}
    let post = {}
    if(!this.icon && !this.name){
      post = {content: strings}
    } 
    if(!this.icon){
      post = {content: strings, username: this.name}
    }
    if(!this.name){
      post = {content: strings, avater_url: this.icon}
    }
    if(!this.url) throw new Error('[WebhookSendError] Webhook url not provided.')
    //if(!post) throw new Error('[WebhookSendError] Cannot send empty message.')
    try{
    axios.post(this.url, post,config)
    }catch(e){
     throw new Error('Unknown WebHook Error')
    }
  }
}

class SendEmbedMessage extends Wsend{


  constructor(url:string){
    super(url)
  }

  /**
   * @this is embed title.
   * This option only used discord webhook.
   * @example
   * SendEmbedMessage().title("title")
   */
  title(strings:string){
    this.embedtitle = strings;
  }

    /**
    * @this is embed description.
    * This option only used discord webhook.
    * @example
    * SendEmbedMessage().title("title").description("description")
    * 
    * @hint
    * If description only, throw error.
    */
  description(strings:string){
    this.embeddescription = strings;
  }
    /**
    * @this is embed color.
    * Tips: This setting will be ok without.
    * This option only used discord webhook.
    * @example
    * SendEmbedMessage().title("title").color("colorcode")
    */
  color(strings:string){
    this.embedcolor = strings;
  }
   public embedtitle !:string
   public embeddescription !:string
   public embedcolor !:string

  
   /**
   * @this is "MessageEmbed" send.
   * 
   * @Notice
   * This constructor is use to "MessageEmbed" send only.
   * 
   * @example
   * SendEmbedMessage().title('title')
   * SendEmbedMessage().esend()
   * 
   */
  esend(){
    /* 適当 is 適当 */
    let config = {headers: {"Accept": "application/json","Content-Type": "application/json",}}
    let post = {}
    if(!this.icon && !this.name &&this.embedtitle&&this.embeddescription&&this.embedcolor){
      post = {"embeds":[{"title":this.embedtitle,"description":this.embeddescription,"color":this.embedcolor}]}
    }
    if(!this.icon&&!this.name&&this.embedtitle&&this.embeddescription&&!this.embedcolor){
      post = {"embeds":[{"title":this.embedtitle,"description":this.embeddescription}]}
    }
    if(!this.icon&&!this.name&&this.embedtitle&&!this.embeddescription&&!this.embedcolor){
      post = {"embeds":[{"title":this.embedtitle}]}
    }
    if(this.icon && this.name &&this.embedtitle&&this.embeddescription&&this.embedcolor){
      post = {"username":this.name,"avater_url":this.icon,"embeds":[{"title":this.embedtitle,"description":this.embeddescription,"color":this.embedcolor}]}
    }
    if(this.icon && this.name && this.embedtitle&&this.embeddescription&&!this.embedcolor){
      post = {"username":this.name,"avater_url":this.icon,"embeds":[{"title":this.embedtitle,"description":this.embeddescription}]}
    }
    if(this.icon&&this.name&&this.embedtitle&&!this.embeddescription&&!this.embedcolor){
      post = {"username":this.name,"avater_url":this.icon,"embeds":[{"title":this.embedtitle}]}
    }
    if(this.icon&&!this.name&&this.embedtitle&&this.embeddescription&&this.embedcolor){
      post = {"avater_url":this.icon,"embeds":[{"title":this.embedtitle,"description":this.embeddescription,"color":this.embedcolor}]}
    }
    if(this.icon&&!this.name&&this.embedtitle&&this.embeddescription&&!this.embedcolor){
      post = {"avater_url":this.icon,"embeds":[{"title":this.embedtitle,"description":this.embeddescription}]}
    }
    if(this.icon&&!this.name&&this.embedtitle&&!this.embeddescription&&!this.embedcolor){
      post = {"avater_url":this.icon,"embeds":[{"title":this.embedtitle}]}
    }
    if(!this.icon&&this.name&&this.embedtitle&&this.embeddescription&&this.embedcolor){
      post = {"username":this.name,"embeds":[{"title":this.embedtitle,"description":this.embeddescription,"color":this.embedcolor}]}
    }
    if(!this.icon&&this.name&&this.embedtitle&&this.embeddescription&&!this.embedcolor){
      post = {"username":this.name,"embeds":[{"title":this.embedtitle,"description":this.embeddescription}]}
    }
    if(!this.icon&&this.name&&this.embedtitle&&!this.embeddescription&&!this.embedcolor){
      post = {"username":this.name,"embeds":[{"title":this.embedtitle}]}
    }
    if(!this.embedtitle&&this.embeddescription){
      throw new Error('[WebhookSendError] Embed title is cannot be empty.')
    }
    if(!this.url) throw new Error('[WebhookSendError] Webhook url not provided.')
    try{
      axios.post(this.url, post,config)
      }catch(e){
       throw new Error('[WebhookSendError] Unknown WebHook Error')
      }
  }
}




//All thanks for axios!
/*
Axios : 
copyright (c) 2014-present Matt Zabriskie
https://github.com/axios/axios/blob/HEAD/LICENSE


Project-type :

 <MIT License> 
copyright (c) 2022 Akikaki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Thank you for download and use! <3

Axiosに感謝！！ありがとう。
*/

export default { Wsend , SendEmbedMessage }

