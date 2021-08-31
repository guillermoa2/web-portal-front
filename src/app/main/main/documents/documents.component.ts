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
      // console.log("document", document)
      this.documents = document.filter(image => image.name.startsWith(`sizes/25_percent`))

      this.isLoading = false;
    })
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

  async onDeleteDoc(index) {
    // console.log("doc index",this.documents[index].name)
    await this.documentsService.delete(this.documents[index]);
    this.ngOnInit();
  }

  async onExpand(index) {
    // console.log("index", this.documents[index].name)
    const selectedDocument = this.documents[index].name
    const originalSizeDocumentName = selectedDocument.replace('25_', '100_')
    await this.documentsService.download().then((document) => {
      let originalDocument = document.filter((image) => image.name == originalSizeDocumentName)
      // console.log("selected",p[0].image)
      window.open(originalDocument[0].image)
    })
  }

}
