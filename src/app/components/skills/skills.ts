import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express', level: 75, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },
    { name: 'Git', level: 85, category: 'Tools' },
    
  ];

  get frontendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'Frontend');
  }

  get backendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'Backend');
  }

  get toolSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'Tools');
  }
}
