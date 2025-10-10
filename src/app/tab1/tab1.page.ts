import { Component } from '@angular/core';
import { IonImg,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton,IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonImg,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {
  imagem: string | undefined;
  titulo: string | undefined;

  mensagem: string = 'olá,Mundo!';

  constructor() {}

  changeBook(){
    this.titulo = "Flamengo";
    this.imagem = "assets/fla.jpg"
  }
}
