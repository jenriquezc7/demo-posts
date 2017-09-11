import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';
import { Post } from '../../interface/post.interface';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    private posts: Post[];

    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getPosts().subscribe((posts: Post[]) => {
            this.posts = posts;
        });
    }

}