import { Wsend } from '../index'

export class DMsgEmbed extends Wsend {
    private title!:string
    private description:string
    private color!:number

   constructor(){
       super(Wsend)

        let post = {}

        new Promise(reject => {

        if(!this.icon && !this.name &&this.title&&this.description&&this.color){
            post = {"embeds":[{"title":this.title,"description":this.description,"color":this.color}]}
          }
          if(!this.icon&&!this.name&&this.title&&this.description&&!this.color){
            post = {"embeds":[{"title":this.title,"description":this.description}]}
          }
          if(!this.icon&&!this.name&&this.title&&!this.description&&!this.color){
            post = {"embeds":[{"title":this.title}]}
          }
          if(this.icon && this.name &&this.title&&this.description&&this.color){
            post = {"username":this.name,"avater_url":this.icon,"embeds":[{"title":this.title,"description":this.description,"color":this.color}]}
          }
          if(this.icon && this.name && this.title&&this.description&&!this.color){
            post = {"username":this.name,"avater_url":this.icon,"embeds":[{"title":this.title,"description":this.description}]}
          }
          if(this.icon&&this.name&&this.title&&!this.description&&!this.color){
            post = {"username":this.name,"avater_url":this.icon,"embeds":[{"title":this.title}]}
          }
          if(this.icon&&!this.name&&this.title&&this.description&&this.color){
            post = {"avater_url":this.icon,"embeds":[{"title":this.title,"description":this.description,"color":this.color}]}
          }
          if(this.icon&&!this.name&&this.title&&this.description&&!this.color){
            post = {"avater_url":this.icon,"embeds":[{"title":this.title,"description":this.description}]}
          }
          if(this.icon&&!this.name&&this.title&&!this.description&&!this.color){
            post = {"avater_url":this.icon,"embeds":[{"title":this.title}]}
          }
          if(!this.icon&&this.name&&this.title&&this.description&&this.color){
            post = {"username":this.name,"embeds":[{"title":this.title,"description":this.description,"color":this.color}]}
          }
          if(!this.icon&&this.name&&this.title&&this.description&&!this.color){
            post = {"username":this.name,"embeds":[{"title":this.title,"description":this.description}]}
          }
          if(!this.icon&&this.name&&this.title&&!this.description&&!this.color){
            post = {"username":this.name,"embeds":[{"title":this.title}]}
          }
          if(!this.title&&this.description){
            throw new Error('[Embed] Embed title is cannot be empty.')
          }

          reject(post)

        })

        
      }


 
   stitle(string:string){
     this.title = string
   }

   sdescription(string:string){
       this.description = string
   }

   scolor(colorcode:number){
       this.color = colorcode
   }

   
}