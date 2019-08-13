import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent implements OnInit {
  fileToUpload: File = null;

  constructor() { }

  ngOnInit() {

  }

  runFileUpload(files: FileList) {
    console.log(FileList);
    // this.fileToUpload = files.item(0);
    // console.log(new FileReader().readAsText(this.fileToUpload));
  }
}
