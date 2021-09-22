import { style, transition, trigger,  state,animate } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css'],
  animations: [
    trigger('likeState', [state('hide',style({'opacity':'1'})),
      state('show',style({'opacity':'0.1'})),
      transition('show <=> hide', animate('500ms 0ms ease-out'))
    ]),
    trigger('heartState', [state('show',style({'opacity':'1'})),
    state('hide',style({'opacity':'0',transform:'translateY(50px)'})),
    transition('hide => show', animate('550ms 0ms ease-out')),
    transition('show=> hide', animate('550ms 0ms ease-in')),
    ])
  ]
})
export class PictureComponent implements OnInit {


  public liked:boolean = false
  public likeStateC:string = 'hide'
  public hideHeart:string = 'hide'
  public hideUnlike:string = 'hide'
  private buttonState:boolean = true

  //data to display
  @Input() public pictureData: any
  //Object with
      // resource A dictionary describing the image_set or planet that the response illustrates, completely determined by the structured endpoint.
      // concept_tags A boolean reflection of the supplied option. Included in response because of default values.
      // title The title of the image.
      // date Date of image. Included in response because of default values.
      // url The URL of the APOD image or video of the day.
      // hdurl The URL for any high-resolution image for that day. Returned regardless of 'hd' param setting but will be omitted in the response IF it does not exist originally at APOD.
      // media_type The type of media (data) returned. May either be 'image' or 'video' depending on content.
      // explanation The supplied text explanation of the image.
      // concepts The most relevant concepts within the text explanation. Only supplied if concept_tags is set to True.
      // thumbnail_url The URL of thumbnail of the video.
      // copyright The name of the copyright holder.
      // service_version The service version used.

  constructor() { }

  ngOnInit(): void {
  }

  toggleLike(){
    if(this.buttonState == true){
    //if picture is not in the middle of showing user if they liked or unliked
      this.buttonState = false

      //show user if liking
      if(!this.liked){
        this.flashLiked()
      }else{
        this.flashUnliked()
      }

      this.liked = !this.liked

    }


  }

  flashLiked(){
    this.likeStateC = 'show'
    this.hideHeart = 'show'

    setTimeout(()=>{
      this.buttonState = true
      this.likeStateC = 'hide'
      this.hideHeart = 'hide'
    },2000)

  }



  flashUnliked(){
    this.likeStateC = 'show'
    this.hideUnlike = 'show'

    setTimeout(()=>{
      this.buttonState = true
      this.likeStateC = 'hide'
      this.hideUnlike= 'hide'
    },2000)

  }
}
