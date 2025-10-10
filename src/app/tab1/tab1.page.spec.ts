import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { getIonPageElement } from '@ionic/angular';
import { getHtmlTagDefinition } from '@angular/compiler';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // function mudar(){
  //   let variavel = getHtmlTagDefinition("p1").;


  // }
});
