import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  
  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLikes:number=0;

	 lestring : string;
   laDate : Date;

  constructor() { 
    this.laDate = new Date();
  }

  ngOnInit() {
  }


  onClickLike(){
  	this.postLikes++;
  	}

  onClickNotLike(){
  	this.postLikes--;
  	}
}
