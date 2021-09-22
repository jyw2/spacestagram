import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({providedIn:'root'})
export class LikedPicsService{
  private likedPics:any = {};
  //an object of pic objects keyed to the title
  private updatePics:Subject<{}> = new Subject<{}>();

  addPic(pic:any){
    //pair pic object with the name
    this.likedPics[pic.title] = pic;

    this.updatePics.next(this.likedPics);


  }

  removePic(name:string){
    //remove pic from object
    delete this.likedPics[name];

    this.updatePics.next(this.likedPics);


  }

  getPics(){
    return this.likedPics;
  }

  getSub(){
    return this.updatePics;
  }
}
