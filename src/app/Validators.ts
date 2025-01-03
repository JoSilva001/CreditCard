import { AbstractControl } from "@angular/forms";

export function SomenteLetras(control: AbstractControl) {
  const value = control.value;
  if (value === null || value === undefined || value === '') {
    return null;
  }
  if (value && typeof value === 'string' && /^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
    return null;
  }
  return { letraInvalida: true };
}

export function SomenteNumeros(control: AbstractControl) {
  const value = control.value;

  if (value === null || value === undefined || value === '') {
    return null;
  }

  if (/^[0-9\s]*$/.test(value)) {
    return null;
  }

  return { numeroInvalido: true };
}
export function minimoDoisNomes(control: AbstractControl){
  const value = control.value?.trim();
  
  const palavras = value ? value.split(/\s+/) : [];
  if (palavras.length < 2) {
    return { minimoDoisNomes: true };
  }
  return null;
}
