import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookDetails } from '../book-details';


@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
constructor(public activeModal:NgbActiveModal, public formBuilder:FormBuilder){}

bookForm = this.formBuilder.group({
  title: ['', Validators.required],
  author: ['', Validators.required],
  pages: ['', Validators.required, Validators.min(4)],
  details:['Write Book Summary Here', ]

})
}
