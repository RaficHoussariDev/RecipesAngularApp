import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private eltRef: ElementRef) { }

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  //For a click anywhere on the screen instead of just the button
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.eltRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}
