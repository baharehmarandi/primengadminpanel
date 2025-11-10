import {Directive, ElementRef, inject, input, OnInit, Renderer2,} from '@angular/core';
import {AbstractControl, Validators} from '@angular/forms';

@Directive({
  selector: '[appRequiredMark]'
})
export class RequiredMarkDirective implements OnInit {

  markColor = input<string>('red', { alias: 'pRequiredMark' });
  formControl = input<AbstractControl | null>(null, {alias: 'control'});

  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  ngOnInit() {
    setTimeout(() => {
      if (this.isRequired()) this.addAsterisk();
    });
  }

  private isRequired(): boolean {
    return this.formControl()?.hasValidator(Validators.required) ?? false;
  }

  private addAsterisk() {
    const span = this.renderer.createElement('span');
    const text = this.renderer.createText(' *');
    this.renderer.setStyle(span, 'color', this.markColor() as unknown as string);
    this.renderer.appendChild(span, text);
    this.renderer.appendChild(this.el.nativeElement, span);
  }
}
