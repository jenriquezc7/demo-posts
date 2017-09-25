import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector:'post-form',
    templateUrl:'./post-form.component.html',
    styleUrls:['./post-form.component.css']
})
export class PostFormComponent implements OnChanges {
    
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
    }

    ngOnChanges() {
        if(this.selectedPost) {
            this.form.patchValue(this.selectedPost);
            console.log("selected post component");
            console.log(this.selectedPost);
        }
    }

    onSave() {
        if(this.selectedPost) 
            this.post.emit(Object.assign(this.selectedPost,this.form.value));
        else
            this.post.emit(this.form.value);
        this.form.reset();
    }
    
    onCancel() {
        this.form.reset();
    }
}
