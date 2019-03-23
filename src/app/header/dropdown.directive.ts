import { Directive, HostListener, HostBinding } from '@angular/core';

/**
 * this directive is used to open/close dropdown menus
 */
@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    /**
     * here we initialize variable and give it the value false (not open)
     */
    @HostBinding('class.open') isOpen = false;
    /**
     * toggle this value if open => close and if close => open
     */
    @HostListener('click')toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
