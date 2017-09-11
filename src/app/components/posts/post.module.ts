import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list.component';
import { PostService } from '../../services/posts.service';

@NgModule({
  imports:[CommonModule],
  declarations: [
    PostComponent,
    PostListComponent],
  exports: [
    PostComponent,
    PostListComponent],
  providers: [PostService]
})
export class PostModule { }