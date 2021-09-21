import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {


  public liked:boolean = false

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
    this.liked = !this.liked
  }

}
