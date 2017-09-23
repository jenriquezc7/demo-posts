import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostListComponent } from './post-list.component';
import { PostService } from '../../services/posts.service';
import { PostFormComponent } from './post-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports:[CommonModule,
    ReactiveFormsModule],
  declarations: [
    PostComponent,
    PostListComponent,
    PostFormComponent],
  exports: [
    PostComponent,
    PostListComponent,
    PostFormComponent],
  providers: [PostService]
})
export class PostModule { }