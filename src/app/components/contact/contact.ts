import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  onSubmit() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      console.log('Form submitted:', this.contactForm);
      this.submitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.contactForm = { name: '', email: '', message: '' };
        this.submitted = false;
      }, 3000);
    }
  }
}
