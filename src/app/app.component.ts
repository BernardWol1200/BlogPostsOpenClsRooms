import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-posts-openclassrooms';

  lestring="ouaoua";
  leNom="Nestor";

  posts = [
    {
      title: 'Mon premier post',
      content: 'Opinion neutre au départ',
      loveIts:0,
      created_at:0
    },
    {
      title: 'Mon deuxième post',
      content: 'Veut des dislikes',
      loveIts:1,
      created_at:0
    },
    {
      title: 'Encore un post',
      content: 'Veut des likes',
      loveIts:-1,
      created_at:0
    }
  ];



}
