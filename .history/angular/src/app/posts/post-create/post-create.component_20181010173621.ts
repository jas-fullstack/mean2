import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  entredTitle = '';
  entredContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddPost(){
  const post = {
    title:this.entredTitle,
    content: this.entredContent
  }
  }

}
