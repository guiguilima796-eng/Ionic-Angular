import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class Tab3Page {
  photo: string | undefined;

  constructor() {}

  async tirarFoto() {
    const imagem = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri, // ou Base64, caso queira salvar diretamente
      source: CameraSource.Camera,
    });

    this.photo = imagem.webPath; // caminho da imagem para exibir no <img>
  }
}
