import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  misVideos:any[]=[];
  videoId:string;

  constructor(private _youtube:YoutubeService) { 
    
    this._youtube.obtenerVideos().subscribe((resp:any)=> {
      this.misVideos = resp.items;
      console.log(this.misVideos);
  
    });
  }

  ngOnInit() {
  }

  detalleVideo(a:string){
    console.log(a);
    
   this.videoId=a;
   $('#exampleModal').modal();
    
  }

  cerrarModal(){
    this.videoId=null;
    $('#exampleModal').modal('hide');
  }

}

