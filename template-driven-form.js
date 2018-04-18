<form #form="ngForm" (ngSubmit)="form.valid && logForm(form.value)">
    <label>Name:</label>

    <input id="name" name="name" class="form-control"
       required minlength="4" appForbiddenName="bob"
       [(ngModel)]="hero.name" #name="ngModel" >

        <div *ngIf="name.invalid && (name.dirty || name.touched)"
            class="alert alert-danger">
            Name is required.
        </div>

    <button type="submit">Submit</button>

</form>