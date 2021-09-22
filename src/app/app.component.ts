import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LikedPicsService } from './likedPics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'spacestagram';



  constructor(private likedPicsService:LikedPicsService){}

  //holdsliked pics from the service
  public likedPics:any = []

  //controls page state
  public isLikedPics:boolean = false

  //listens for liked post updates
  private likeChange:Subscription

  switchState(){
    this.isLikedPics = ! this.isLikedPics

    if(this.isLikedPics){
      //switching to liked pics
    this.updatePics()

    }

  }

  updatePics(){
    this.likedPics = []

    let pics = this.likedPicsService.getPics()

    console.log(pics)

    for(let pic in pics){
      this.likedPics.push(pics[pic])

      console.log(this.likedPics)
    }
  }

  ngOnInit():void{
    this.likeChange =this.likedPicsService.getSub().subscribe(()=>{
      this.updatePics()
      console.log('updated')
    })
  }

  ngOnDestroy():void{
    this.likeChange.unsubscribe()
  }
}
