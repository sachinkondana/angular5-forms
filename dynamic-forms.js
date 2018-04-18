<form [formGroup]="form">
    <div *ngFor="let prop of objectProps">
        <label [attr.for]="prop"></label>
        <div [ngSwitch]="prop.type">
            <input *ngSwitchCase="'text'"
                [formControlName]="prop.key"
                [id]="prop.key" [type]="prop.type">
                
            <input *ngSwitchCase="'number'"
                [formControlName]="prop.key"
                [id]="prop.key" [type]="prop.type">

            <div *ngIf="form.get(prop.key).errors.required">
               Value is required.
            </div>

        </div>
    </div>

    <button type="submit">Submit</button>

</form>



import { FormGroup, FormControl, Validators } from '@angular/forms';
class ModelFormComponent implements OnInit {
    @Input() dataObject = {
        name: {
                label: 'Name',
                value: 'Juri',
                type: 'text',
                validation: {
                required: true
            }
        },
        age: {
            label: 'Age',
            value: 32,
            type: 'text'
        }
    };


    form: FormGroup;
    objectProps;

     ngOnInit() {
        this.objectProps = 
        Object.keys(this.dataObject)
            .map(prop => {
                return Object.assign({}, { key: prop} , this.dataObject[prop]);
            });

        const formGroup = {};
        for(let prop of Object.keys(this.dataObject)) {
            formGroup[prop] = new FormControl(this.dataObject[prop].value || '', this.mapValidators(this.dataObject[prop].validation));
        }

        this.form = new FormGroup(formGroup);
    }
}