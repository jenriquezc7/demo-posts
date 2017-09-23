import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = "http://jsonplaceholder.typicode.com";
    }

    getPosts() {
        return this.http.get(this.baseUrl + "/posts");
    }

    getPost(postId: number) {
        return this.http.get(this.baseUrl + "/posts/" + postId);
    }

    savePost(post: any) {
        return this.http.post(this.baseUrl + "/posts",post);
    }

    deletePost(postId:number) {
        return this.http.delete(this.baseUrl + "/posts/" + postId);
    }
}