import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ InputMaskModule,InputTextModule, FloatLabelModule,FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CreditCard-Validation';
  nome: string = ""; // Declaração da propriedade 'text'
  numero:any | null = null;
  mm:number | null = null;
  yy:number | null = null;
  cvc:number | null = null;

  constructor() {
    
  } 
  formatarComEspacos(input: string): string {
    // Remove todos os espaços e formata a string com espaços a cada 4 caracteres
    return input.replace(/\D/g, '') // Remove tudo o que não for número
                .replace(/(\d{4})(?=\d)/g, '$1 '); 
    // Adiciona espaço a cada 4 dígitos
  }
  
  atualizarFormat(event: any): void {
    const numero = event.target.value;
    const valorFormatado = this.formatarComEspacos(numero);
    this.numero = valorFormatado;
  }
}
