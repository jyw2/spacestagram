
import { Component, Input, OnInit } from '@angular/core';
import { LikedPicsService } from '../likedPics.service';

@Component({
  selector: 'app-my-liked-pics',
  templateUrl: './my-liked-pics.component.html',
  styleUrls: ['./my-liked-pics.component.css']
})
export class MyLikedPicsComponent implements OnInit {
  //is a photo

   //holds picture data
   @Input() public pictures:any = [];

   public loading = false;

   constructor(private likedPics: LikedPicsService) {}

   ngOnInit(): void {

   }


}
