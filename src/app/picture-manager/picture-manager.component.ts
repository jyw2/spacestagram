import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-manager',
  templateUrl: './picture-manager.component.html',
  styleUrls: ['./picture-manager.component.css']
})
export class PictureManagerComponent implements OnInit {

  //holds picture data
  public pictures:any = []

  //helper variable for controlling picture rendering on end of page
  private delay = false

  //var that controls loading indicator
  public loading:boolean = false

  //date filter vars
  public yearStart:string
  public monthStart:string
  public dayStart:string
  public yearEnd:string
  public monthEnd:string
  public dayEnd:string
  public isFilterValid:boolean
  public alert:boolean = false
  private startString = ''
  private endString = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    //load initial images
    this.render(6)

    //for loading more pictures as you scroll
    document.addEventListener('scroll',() => {

      if( this.delay == false){
        //Load more pictures if enough time has elapsed and user scrolls
          this.render(4)
          this.loading = true
          this.delay = true

          setTimeout(() =>{
              this.delay = false
          }, 500)

      }
    })
  }

  render(count:number){
    //render 'count' images to the page
    this.http.get('https://api.nasa.gov/planetary/apod?api_key=nFKHqhHAVxceoivZOecNVilXyp3ygfsBG9vpSKLX' +
     '&count='+count
     + (this.isFilterValid? ('&start_date=' + this.startString + '&end_date='+this.endString):'')
     .subscribe(
      (images:any)=>{
        //images received

        //remove any videos
        for (let i = 0; i < images.length ; i++){
          if ( images[i].media_type == 'video'){

            images.splice(i,1)
          }
        }

        this.pictures = this.pictures.concat(images)
        this.loading = false
    },()=>{
        //image was not reveceived
        console.log('API call failed')
    })
  }

  toggleLoading(){
    //toggles loading message
    this.loading = !this.loading
  }

  filter(){
    //removes all pictures and regrabs pictures based on filters after validating

    //clear inputs
      this.yearEnd = ''
      this.yearStart = ''
      this.monthEnd = ''
      this.monthStart = ''
      this.dayEnd = ''
      this.dayStart = ''


    //is input valid?
    if(
      (parseInt(this.yearStart) && parseInt(this.yearEnd))&&
      (parseInt(this.monthStart) && parseInt(this.monthEnd))&&
      (parseInt(this.dayStart) && parseInt(this.dayEnd))&&

      (parseInt(this.yearEnd) < parseInt(this.yearStart)) &&
      (parseInt(this.monthEnd) < parseInt(this.monthStart)) &&
      (parseInt(this.dayEnd) < parseInt(this.dayStart)) &&

      (parseInt(this.yearStart) <= new Date().getFullYear())&&
      (parseInt(this.monthStart) <= 12 )&&
      (parseInt(this.dayStart) <= 31)&&

      (parseInt(this.yearStart) >= 1900)&&
      (parseInt(this.monthStart) >= 0 )&&
      (parseInt(this.dayStart) >= 0)

    ){
      //valid input
      this.pictures = []
      this.isFilterValid = true

      //show alert
      setTimeout(()=>{
        this.alert = false
      },3000)

      this.render(6)

      this.startString = `${this.yearStart}-${this.monthStart}-${this.dayStart}`
      this.endString = `${this.yearEnd}-${this.monthEnd}-${this.dayEnd}`
    }else{
      //invalid range
    }





  }

}
