import { Component } from '@angular/core'
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import { AuthService } from './../../services/auth.service';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    form
    
    constructor(private auth: AuthService, private fb: FormBuilder) {
        this.form = fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
}