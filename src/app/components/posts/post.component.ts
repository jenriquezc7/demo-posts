import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interface/post.interface';

@Component({
    selector: "post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"]
})
export class PostComponent {
    
    @Input()
    private post: Post;

    @Output()
    selectedPost = new EventEmitter<any>();

    onDelete() {
        this.selectedPost.emit(this.post);
    }
}