import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-form-badges',
  templateUrl: './form-badges.component.html',
  styleUrls: ['./form-badges.component.scss']
})
export class FormBadgesComponent implements OnInit {

  @Input() name: string;
  @Input() lastName: string;
  @Input() job: string;
  @Input() twitter: string;
  @Input() email: string;
  @Input() isEditing: boolean;
  @Output() handleChangeForm = new EventEmitter<User>();
  @Output() handleSaveData = new EventEmitter<User>();

  form: FormGroup

  constructor(private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.buildForm();
    if (this.isEditing) {
      this.form.get('name').setValue(this.name)
      this.form.get('lastName').setValue(this.lastName)
      this.form.get('job').setValue(this.job)
      this.form.get('email').setValue(this.email)
      this.form.get('twitter').setValue(this.twitter)
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      job: ['', [Validators.required, Validators.minLength(6)]],
      twitter: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  handleSave() {
    this,this.handleSaveData.emit();
  }

  handleChange() {
    this.handleChangeForm.emit(this.form.value);
  }

  get nameField() { return this.form.get('name') }
  get lastNameField() { return this.form.get('lastName') }
  get emailField() { return this.form.get('email') }
  get jobField() { return this.form.get('job') }
  get twitterField() { return this.form.get('twitter') }

}
