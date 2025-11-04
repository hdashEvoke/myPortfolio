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
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with Angular showcasing projects and skills.',
      technologies: ['Angular', 'TypeScript', 'CSS3', 'HTML5'],
      link: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce application with shopping cart and payment integration.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Express'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['Angular', 'Firebase', 'RxJS', 'Material Design'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying real-time weather data and forecasts.',
      technologies: ['Angular', 'REST APIs', 'Chart.js', 'TypeScript'],
      link: '#'
    }
  ];
}
