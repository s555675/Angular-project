import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  // Object to store the form values
  contactUsForm!: FormGroup;

  // Required IDs for sending the mail
  serviceID = 'service_wp191ia';
  templateID = 'template_hfx42mm';
  userID = 'jixouWKzlhJ_85m1p';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      message: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.contactUsForm.valid) {
      try {
        await emailjs.send(this.serviceID, this.templateID, this.contactUsForm.value, this.userID);
        this.contactUsForm.reset();
        Swal.fire({
          title: 'Thank you!',
          text: 'Your message has been successfully sent.',
          icon: 'success',
          iconColor: 'orange',
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        console.error('Failed to send message:', error);
        Swal.fire({
          title: 'Oops!',
          text: 'Failed to send message.',
          icon: 'error',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        text: 'Please fill the fields correctly.',
        icon: 'warning',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
}
