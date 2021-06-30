import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  faTrash = faTrash;
  selectedFile: File
  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  }); 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  async onFileChanged(event) {
    this.selectedFile = await event.target.files[0]
    this.toBase64(this.selectedFile)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
    // console.log(event)
    // console.log(this.selectedFile)
    this.http.post('', this.selectedFile)
      .subscribe(data => {
        console.log(data);
      })

  }



}
