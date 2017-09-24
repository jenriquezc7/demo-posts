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

    private selectedPost:Post;
    
    constructor(private postService: PostService) { }

    ngOnInit() {
        this.postService.getPosts().subscribe((posts: Post[]) => {
            this.posts = posts.reverse();
        });
    }

    onSave(post:any) {
        if(post.id === this.selectedPost.id) {
            console.log("editPost",post);
            this.postService.updatePost(post.id,post).subscribe(() =>{
                this.posts.forEach((p)=> {
                    if(p.id === this.selectedPost.id){
                        return Object.assign(p,post);
                    }
                });
                this.selectedPost = null;
            }, (error) => {
                console.log("Error");
            });
        }
        else{        
            this.postService.savePost(post).subscribe((post:Post) => {
                this.posts.unshift(post);
            }, (error) =>{
                console.log("Error");
            });
        }
    }

    onDelete(post:any) {
        this.postService.deletePost(post.id).subscribe(() => {
            this.posts.splice(this.posts.indexOf(post),1);
        }, (error) =>{
            console.log("Error");
        });
    }

    onSelected(post:any) {
        this.selectedPost = post;
    }
}