import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:'post-form',
    templateUrl:'./post-form.component.html',
    styleUrls:['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
    
    private form:FormGroup;
    
    @Input()
    selectedPost:any;

    @Output()
    post = new EventEmitter<any>();
    

    constructor(private fb:FormBuilder) {
        this.form = fb.group({
            'title': ['', Validators.required],
            'body': ['', [Validators.required, Validators.minLength(3)]]
        });

        console.log("in constructor...");
    }

    ngOnInit() {
        console.log("in ngOnInit...");
    }

    onSave() {
        this.post.emit(this.form.value);
        this.form.reset();
    }
    
    onCancel() {
        this.form.reset();
    }
}