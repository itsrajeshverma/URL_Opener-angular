import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'url-opener';

  public userInput  : string = '';
  public urlArray : Array<any> = [];
  public count : number = 0

  public stringToArray(){
    this.urlArray = []
    let array = this.userInput.split("\n");
    array.forEach(element=>{
      if(element != ""){
        this.urlArray.push(element)
      }
    })
    this.count = this.urlArray.length
  }

  public openUrl(){

    try {
      //  open each url in new tab
       this.urlArray.forEach((element : string) => {
       if(element.includes("http:")|| element.includes("https:")){
        window.open(element , '_blank')
       }else{
        element = "https://" + element
        window.open(element , '_blank')
       }
    });
    } catch (error) {

    }
  }

}
