import { Injectable } from "@angular/core";


@Injectable({providedIn:'root'})
export class LikedPicsService{
  private likedPics:any = {};
  //an object of pic objects keyed to the title


  addPic(pic:any){
    //pair pic object with the name
    this.likedPics[pic.title] = pic;

    console.log(this.likedPics)
  }

  removePic(name:string){
    //remove pic from object
    delete this.likedPics[name]

    console.log(this.likedPics)
  }

  getPics(){
    return this.likedPics;
  }
}
