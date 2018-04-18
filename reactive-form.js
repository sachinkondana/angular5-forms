<form [formGroup]="heroForm">
    <label>Name:</label>

    <input class="form-control" formControlName="name">

    <div
    class="error"
    *ngIf="heroForm.get('name').hasError('required') && heroForm.get('name').touched">
    Name is required
    </div>

    <button type="submit">Submit</button>

</form>



import { FormGroup, FormControl, Validators } from '@angular/forms';

class ModelFormComponent implements OnInit {
    heroForm: FormGroup;

    ngOnInit() {
        this.heroForm = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)])
        });
    }
}