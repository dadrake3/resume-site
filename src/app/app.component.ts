import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {DialogOverviewExampleDialogComponent} from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {FormControl} from '@angular/forms';


export interface DialogData {
  skill: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chipselection = '';
  skillLangs = [
    'C / C++',
    'Python',
    'C#',
    'Javascript',
    'Matlab',
    'HTML',
    'CSS',
    'Typescript'
  ];
  skillFrames = [
    'Angular',
    'Amazon Web Services',
    'Microsoft .NET',
    'Unity',
    'Cuda'
  ];
  skillMisc = [
    'Adobe Photoshop',
    'Adobe Lightroom',
    'Adobe Illustrator',
    'Microsoft Office'
  ];
  projs = [
    'Operating System',
    'First Person Headtracking Drone',
    'Hardware Tetris',
    'Personal Gallery',
    'Resume Site',
    'Architectural Gallery',
    'CadaVR',
    'Unity Games',
    'Python Bots',
  ];
  profileDesc = 'Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitionometext to enable scrolling.. Lorem ipsum dolor sit amet, illum definitionome text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo,';
  experienceDesc = 'Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.';
  experience = [
    'Research',
    'Volunteering',
    'Abbvie',
    'Jump',
    'Epic'
  ];
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
  public scroll(el) {
    el.scrollIntoView();
  }



  public test(event) {
    console.log(event);
  }
  constructor(public dialog: MatDialog) {}
  openDialog(event): void {
    // const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
    //   width: '250px',
    //   data: {skill: event.srcElement.innerText}
    // });
    this.chipselection = event.srcElement.innerText;
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }
}




