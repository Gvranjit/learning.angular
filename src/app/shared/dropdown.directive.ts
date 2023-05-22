import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  open = false;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostBinding('classList') classList: string[];
  @HostListener('click')
  onDropdownButtonClick() {
    console.log(this.classList);
    if (!this.open) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
      this.open = true;
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
      this.open = false;
    }
  }
}
