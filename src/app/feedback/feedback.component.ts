import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  // Object to store the form values
  feedbackForm!: FormGroup;

  // Required IDs for sending the mail
  serviceID = 'service_wp191ia';
  templateID = 'template_hfx42mm';
  userID = 'jixouWKzlhJ_85m1p';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.feedbackForm = this.formBuilder.group({

    });
  }

  async onSubmit() {
    if (this.feedbackForm.valid) {
      try {
        await emailjs.send(this.serviceID, this.templateID, this.feedbackForm.value, this.userID);
        this.feedbackForm.reset();
        Swal.fire({
          title: 'Thank you!',
          text: '',
          icon: 'success',
          iconColor: 'orange',
          showConfirmButton: false,
          timer: 2000,
        });
      } catch (error) {
        console.error('Failed to send message:', error);
        Swal.fire({
          title: 'Oops!',
          text: '',
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
