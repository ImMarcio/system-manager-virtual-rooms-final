import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  standalone: true,
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }

    // Remova caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Adicione pontos e traço conforme o formato do CPF
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

}
