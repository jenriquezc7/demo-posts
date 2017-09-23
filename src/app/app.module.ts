import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostModule } from './components/posts/post.module';
import { PostService } from './services/posts.service';
import { LayoutModule } from './components/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostModule,
    LayoutModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }