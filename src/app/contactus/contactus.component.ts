import { Component, OnInit } from '@angular/core';
import { Contact } from '../../contact';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor() { }

  model = new Contact('','','','');

  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
