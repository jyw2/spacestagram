import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-picture-manager',
  templateUrl: './picture-manager.component.html',
  styleUrls: ['./picture-manager.component.css']
})
export class PictureManagerComponent implements OnInit {
  //manages all liked and unliked photos

  //holds picture data
  public pictures:any = [];

  //helper variable for controlling picture rendering on end of page
  private delay = false;

  //var that controls loading indicator
  public loading:boolean = false;


  constructor(private http: HttpClient) { }



  ngOnInit(): void {

    //load initial images
    this.render(6);

    //for loading more pictures as you scroll
    document.addEventListener('scroll',() => {

      if( this.delay == false){
        //Load more pictures if enough time has elapsed and user scrolls
          this.render(4);
          this.loading = true;
          this.delay = true;

          setTimeout(() =>{
              this.delay = false;
          }, 500);

      }
    })
  }

  render(count:number){
    //render 'count' images to the page
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=nFKHqhHAVxceoivZOecNVilXyp3ygfsBG9vpSKLX' +
     '&count='+count)
     .subscribe(
      (images:any)=>{
        //images received

        //remove any videos
        for (let i = 0; i < images.length ; i++){
          if ( images[i].media_type == 'video'){

            images.splice(i,1);
          }
        }

        this.pictures = this.pictures.concat(images);
        this.loading = false;
    },()=>{
        //image was not reveceived
        console.log('API call failed');
    })
  }

  toggleLoading(){
    //toggles loading message
    this.loading = !this.loading;
  }




}
