import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { ProjectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ruben-web';
}
