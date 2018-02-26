import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../../models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client ={
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    lastAppt: '',
    currentProject: ''
  
  }
  @ViewChild('clientForm') form: any;






  constructor( private flashMessage: FlashMessagesService,
            private clientService : ClientService ,
            private router: Router){ }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}){
    if(!valid){
    this.flashMessage.show('Please fill out the form correctly', {cssClass: 'alert-danger',timeout: 4000})
   } else{
     // add new client and show message and redirect to dash
    this.clientService.newClient(value);
    
    this.flashMessage.show('New client added', {cssClass: 'alert-success',timeout: 3000});
    this.router.navigate(['/']);
  
  }}};
  