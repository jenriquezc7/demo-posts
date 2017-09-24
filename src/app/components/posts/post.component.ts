import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interface/post.interface';

@Component({
    selector: "post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"]
})
export class PostComponent {
    
    @Input()
    post: Post;

    @Output()
    deletePost = new EventEmitter<Post>();

    @Output()
    selectedPost = new EventEmitter<Post>();

    onDelete() {
        this.deletePost.emit(this.post);
    }

    onSelect() {
        this.selectedPost.emit(this.post);
    }
}