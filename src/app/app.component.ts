import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion du SLS';
  modificationHidden = true;
  finalHidden = true;

  Nom = "LAFORET";
  Prenom = "Albert";
  DateDeNaissance = new Date(1976, 3, 1);

  NomModif = "LAFORET";
  PrenomModif = "Albert";
  DateDeNaissanceModif = new Date(1976, 3, 1);

  onModifier() {
    this.modificationHidden = !this.modificationHidden;
    
  }
  onValider() {
    this.modificationHidden = true;

    if (this.Nom != this.NomModif || 
      this.Prenom != this.PrenomModif ||
      this.DateDeNaissance != this.DateDeNaissanceModif) {
        this.finalHidden = false;
      }
      else {
        this.finalHidden = true;
      }
  }

  onReinit() {

    this.NomModif = this.Nom;
    this.PrenomModif = this.Prenom;
    this.DateDeNaissanceModif = this.DateDeNaissance;
    
    this.finalHidden = true;
    this.modificationHidden = true;
  }
}
