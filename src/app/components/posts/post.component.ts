import { Component, Input } from '@angular/core';
import { Post } from '../../interface/post.interface';

@Component({
    selector: "post",
    templateUrl: "./post.component.html",
    styleUrls: ["./post.component.css"]
})
export class PostComponent {
    
    @Input()
    private post: Post;

}