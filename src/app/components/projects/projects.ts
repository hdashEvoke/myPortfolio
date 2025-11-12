import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Procurement AI',
      description: 'A responsive website built with Angular showcasing the procurement process for the vendors with the help of AI Automation.',
      technologies: ['Angular 18', 'Python', 'CSS3', 'Bootstrap', 'HTML5'],
      link: '#'
    },
    {
      title: 'CSC-LMS',
      description: 'Full-featured  application for the legal entity management.',
      technologies: ['Angular', "Spring Boot", "Angular Material", 'Bootstrap', 'HTML5'],
      link: '#'
    },
    {
      title: 'i-receivables',
      description: 'Collaborative Invoice & payments management system for small and medium businesses.',
      technologies: ['Angular', '.NET', 'RxJS', 'Material Design'],
      link: '#'
    },
    {
      title: 'Reusable components library',
      description: 'Library of reusable Angular components for Organisational developer use.',
      technologies: ['Angular', 'HTML5', 'CSS', 'Bootstrap','Angular Material', 'REST APIs', 'Chart.js', 'TypeScript'],
      link: '#'
    }
  ];
}
