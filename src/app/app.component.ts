import { Component } from '@angular/core';
import { Persona, Hobbies } from './model/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persona: Persona = {
    nome: 'Lorenzo Eduardo',
    cognome: 'Furio',
    descrizione: `Sviluppatore Junior determinato a raggiungere risultati concreti. 
    Approccio pragmatico nel risolvere sfide, con un’attenzione 
    particolare all’efficacia e alla funzionalià delle soluzioni. Abilità 
    nell’instaurare rapporti positivi e collaborativi con il team. Flessibile
    nell’adattarsi a nuovi contesti. Appassionato di informatica
    e constantemente aggiornato sulle ultime novità del settore.`,
    direzione: 'Via isonzo n 11',
    mestiere: 'Junior Web Developer',
    email: 'eduardofurio22@gmail.com',
    gitHub: 'left000',
    lingue: 'Italiano Spagnolo',
    linkedln: 'Lorenzo Eduardo Furio',
    nazionalita: 'Italiano',
    telf: '+38 3278993018',
    eta: '29-12-1998',
    hobbies: [
      { icona: 'fa-solid fa-gamepad', descrizione: 'Giocare a calcio' },
      { icona: 'fa-solid fa-headphones', descrizione: 'Ascoltare musica' },
      { icona: 'fa-solid fa-plane', descrizione: 'Leggere libri' },
      { icona: 'fa-brands fa-apple', descrizione: 'Giocare a calcio' },
      { icona: 'fa-solid fa-person-hiking', descrizione: 'Ascoltare musica' },
      { icona: 'fa-solid fa-book', descrizione: 'Leggere libri' },
      { icona: 'fa-solid fa-car', descrizione: 'Ascoltare musica' },
      { icona: 'fa-solid fa-camera', descrizione: 'Leggere libri' }
    ],
    socials: [
      { icona: 'fa-brands fa-github', link: '#', social: 'GitHub' },
      { icona: 'fa-brands fa-instagram', link: 'https://www.instagram.com/left29/', social: 'Instagram' },
      { icona: 'fa-brands fa-linkedin-in', link: 'https://www.linkedin.com/in/lorenzo-eduardo-furio-84729b226/', social: 'GitHub' },
    ],
    skills: [
      {
        softSkills: [
          { competenze: 'Flessibilità e capacità di adattamento' },
          { competenze: 'Propensione al lavoro per obiettivi' },
          { competenze: 'Autonomia operativa' },
          { competenze: 'Problem solving' },
          { competenze: 'Propensione a lavorare in team' },
        ],
        hardSkills: [
          { linguaggi: 'JavaScript', icona: 'fa-brands fa-js' },
          { linguaggi: 'Java', icona: 'fa-brands fa-java' },
          { linguaggi: 'Spring Boot', icona: '' },
          { linguaggi: 'Angular', icona: 'fa-brands fa-angular' },
          { linguaggi: 'Jasmine', icona: 'f' },
          { linguaggi: 'HTML', icona: 'fa-brands fa-html5' },
          { linguaggi: 'CSS', icona: 'fa-brands fa-css3-alt' },
          { linguaggi: 'Git', icona: 'fa-brands fa-git-alt' },
          { linguaggi: 'SQL', icona: 'fa-solid fa-database' },
          { linguaggi: 'Jasmine', icona: 'f' },
          { linguaggi: 'PHP', icona: 'fa-brands fa-php' },
          { linguaggi: 'Laravel', icona: 'fa-brands fa-laravel' },
          { linguaggi: 'Laravel', icona: 'fa-brands fa-laravel' },
          { linguaggi: 'Laravel', icona: 'fa-brands fa-laravel' },

        ]
      }
    ]
  }

}
