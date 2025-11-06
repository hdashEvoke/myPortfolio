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
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Next.js', level: 70, category: 'Full Stack' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'HTML5', level: 90, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'Bootstrap', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express', level: 70, category: 'Backend' },
    { name: 'MongoDB', level: 70, category: 'Backend' },
    { name: 'Git', level: 80, category: 'Tools' },

    
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
