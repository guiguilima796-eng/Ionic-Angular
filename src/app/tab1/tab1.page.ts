import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonImg, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page implements OnInit, OnDestroy {
  imagem: string | undefined;
  titulo: string | undefined;
  idImagem: number = 0;
  arrayImgs: string[] = ["assets/fla.jpg", "assets/fla2.jpg", "assets/fla3.jpg", "assets/urubuFla1.png", "assets/urubuFla2.png", "assets/urubuFla3.png", "assets/urubuFla4.png"];
  mensagem: string = 'Olá, Mundo!';
  intervalo: any;
  progresso: number = 0;
  tempoTrocaImagem: number = 3000; // 3 segundos para cada troca

  constructor() {}

  ngOnInit() {
    this.iniciarTemporizador();
  }

  ngOnDestroy() {
    if (this.intervalo) {
      clearInterval(this.intervalo); // Limpa o temporizador quando o componente for destruído
    }
  }

  iniciarTemporizador() {
    this.atualizarImagem(); // Atualiza a imagem imediatamente ao iniciar

    this.intervalo = setInterval(() => {
      this.atualizarImagem();
    }, this.tempoTrocaImagem);

    this.atualizarBarraProgresso();
  }

  atualizarImagem() {
    this.idImagem = (this.idImagem + 1) % this.arrayImgs.length; // Círculo: volta à primeira imagem após a última

    this.titulo = `Imagem ${this.idImagem + 1}`;
    this.imagem = this.arrayImgs[this.idImagem];
  }

  trocarImagem() {
    this.atualizarImagem(); // Troca a imagem manualmente ao clicar
  }

  atualizarBarraProgresso() {
    let tempoRestante = this.tempoTrocaImagem;
    let progressoIntervalo = setInterval(() => {
      if (tempoRestante <= 0) {
        clearInterval(progressoIntervalo);
        document.getElementById("progress-bar")!.style.width = "0%"; // Reset progress bar
      } else {
        let percentual = ((this.tempoTrocaImagem - tempoRestante) / this.tempoTrocaImagem) * 100;
        document.getElementById("progress-bar")!.style.width = `${percentual}%`;
        tempoRestante -= 100;
      }
    }, 100); // Atualiza a barra a cada 100ms
  }
}
// ngOnInit(): Inicia o temporizador assim que o componente é carregado.

// iniciarTemporizador(): Usa setInterval para chamar atualizarImagem() a cada 3 segundos (tempo definido por tempoTrocaImagem). O temporizador também é usado para atualizar a barra de progresso.

// atualizarImagem(): Troca a imagem com base no índice do array arrayImgs. Quando chega na última imagem, ele volta à primeira.

// trocarImagem(): Função chamada ao clicar no botão para trocar a imagem manualmente.

// atualizarBarraProgresso(): Atualiza a barra de progresso que reflete o tempo restante até a próxima troca de imagem. Ela é resetada toda vez que a troca acontece.
