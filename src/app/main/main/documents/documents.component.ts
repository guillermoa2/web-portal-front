import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DocumentsService } from './documents.service';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  faTrash = faTrash;
  selectedFile: File;
  documents: File[] = [];
  isLoading: boolean = false;

  // converts file to Base64
  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  constructor(private http: HttpClient,
    private documentsService: DocumentsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.documentsService.download().then((document) => {
      this.documents = document
      this.isLoading = false;
    })

    // console.log("down",this.documentsService.download())
    // this.documents.concat(x)
    // let x = async res => {this.documentsService.download({image: res})}
    // console.log(x);
  }

  // select file and upload with one button
  async onFileChanged(event) {
    this.selectedFile = await event.target.files[0]
    // console.log('this is selectedFile',this.selectedFile)
    this.toBase64(this.selectedFile)
      .then(async res => {
        // console.log('this is res',res);
        const image = await this.documentsService.upload({image: res})
        this.ngOnInit();
      })
      .catch(err => {
        // console.log('this is err',err)
      })
    // console.log(event)
  }

}
