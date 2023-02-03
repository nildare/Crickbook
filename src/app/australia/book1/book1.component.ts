import { Component} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
// @Injectable()
// export class StepperIntl extends MatStepperIntl {
//   // the default optional label text, if unspecified is "Optional"
//   override optionalLabel = 'Optional Label';
// }

@Component({
  selector: 'app-book1',
  templateUrl: './book1.component.html',
  styleUrls: ['./book1.component.css'],
})


 export class Book1Component {

//   optionalLabelText!: string;
//   optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
//   firstFormGroup = this._formBuilder.group({
//     firstCtrl: ['', Validators.required],
//   });
//   secondFormGroup = this._formBuilder.group({
//     secondCtrl: ['', Validators.required],
//   });

//   constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl) {}

  // updateOptionalLabel() {
  //   this._matStepperIntl.optionalLabel = this.optionalLabelText;
  //   // Required for the optional label text to be updated
  //   // Notifies the MatStepperIntl service that a change has been made
  //   this._matStepperIntl.changes.next();
  // }


  tiles:Tile[] = [
  {text: 'Right Bay', cols: 3, rows: 1, color: 'lightblue'},
  {text: 'Left Side', cols: 1, rows: 2, color: 'lightgreen'},
  {text: 'Back Row', cols: 1, rows: 1, color: 'lightpink'},
  {text: 'Front Balcony', cols: 2, rows: 1, color: '#DDBDF1'},
];

 }


 
