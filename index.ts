import axios from "axios"

class Wsend {
  /**
   * @This is url config.
   */
  public url!: string;
     /**
     * @This is Webhook send 
     */
  send(strings: string): void{
    let config = {headers: {"Accept": "application/json","Content-Type": "application/json",}}
    const post = {content: strings}
    if(!this.url) throw new Error('[WebhookSendError] Webhook url not provided.')
    if(!post) throw new Error('[WebhookSendError] Cannot send empty message.')
    try{
    axios.post(this.url, post,config)
    }catch(e){
     throw new Error('Unknown WebHook Error')
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

export { Wsend } ;

