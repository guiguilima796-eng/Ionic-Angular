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
  idImagem: number = 0;
  arrayImgs: string[] = ["assets/fla.jpg","assets/fla2.jpg","assets/fla3.jpg","assets/urubuFla1.png","assets/urubuFla2.png","assets/urubuFla3.png","assets/urubuFla4.png"];
  
  mensagem: string = 'olá,Mundo!';

  constructor() {}

  changeBook(){
    this.idImagem = this.idImagem + 1; 
    

    if (this.idImagem == 1) {
      this.titulo = "Flamengo";
      this.imagem = this.arrayImgs[0];
    }else if(this.idImagem == 2){
      this.titulo = "JJ";
      this.imagem = this.arrayImgs[1];
    }else if(this.idImagem == 3){
      this.titulo = "Flamengo";
      this.imagem = this.arrayImgs[2];
    }else if(this.idImagem == 4){
      this.titulo = "UrubuFla";
      this.imagem = this.arrayImgs[3];
    }else if(this.idImagem == 5){
      this.titulo = "UrubuFla";
      this.imagem = this.arrayImgs[4];
    }else if(this.idImagem == 6){
      this.titulo = "UrubuFla";
      this.imagem = this.arrayImgs[5];
    }else if(this.idImagem == 7){
      this.titulo = "UrubuFla";
      this.imagem = this.arrayImgs[6];
    }else if(this.idImagem == 8){
      this.idImagem = 1;
      this.titulo = "Flamengo";
      this.imagem = this.arrayImgs[0];
    }
    

  }
}
