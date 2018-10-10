import { Component, OnInit,Input } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  /*
  posts = [ 
     {title:'first title',content:'this is first content' },
     {title:'secound title',content:'this is sec content' },
     {title:'third title',content:'this is third content' },
  ] 
  */
   posts: Post[] = [];
  
  constructor(public postsService: PostsService) {
   }

  ngOnInit() {
    this.posts = this.postsService.getPosts(); 
  }

}
