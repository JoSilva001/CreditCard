import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder,  Validators, ReactiveFormsModule} from '@angular/forms';
import { SomenteLetras, SomenteNumeros, minimoDoisNomes } from './Validators';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ InputMaskModule,InputTextModule, FloatLabelModule,FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  submitted: boolean = false;
  dadosEnviados: boolean = false;
  formulario: FormGroup = new FormGroup({});
  title = 'CreditCard-Validation';
  nome: string = "";
  numero:any | null = null;
  mm:number | null = null;
  yy:number | null = null;
  cvc:number | null = null;



  constructor(private formBuilder: FormBuilder) {} 
  
  ngOnInit():void{
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required,SomenteLetras, minimoDoisNomes]],
      numero: ['', [Validators.required, SomenteNumeros,Validators.minLength(19)]],
      mm: ['', [Validators.required, SomenteNumeros,Validators.minLength(2)]],
      yy: ['', [Validators.required, SomenteNumeros,Validators.minLength(2)]],
      cvc: ['', [Validators.required, SomenteNumeros, Validators.minLength(3)]],
    });
  }
  formatarComEspacos(input: string): string {
    return input.replace(/\D/g, '') 
                .replace(/(\d{4})(?=\d)/g, '$1 '); 
  }
  
  atualizarFormat(event: any): void {
    const numero = event.target.value;
    const valorFormatado = this.formatarComEspacos(numero);
    this.numero = valorFormatado;
  }
  exibirErro(campoForm:any){
    const errors = campoForm?.errors;
    return (this.submitted && campoForm?.touched) ? errors : null;
  }
  onConfirmar(): void {
    this.submitted = true;
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log('Formulário inválido:')
      return;
    }
    else{
      this.dadosEnviados = true;
      console.log('Formulário válido: ', this.formulario.value);
      console.log(this.dadosEnviados);
      
    }
  }  
  retorno(){
    this.dadosEnviados = !this.dadosEnviados
  }
}
