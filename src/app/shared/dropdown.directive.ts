import { Directive, ElementRef, Host, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding('class.show') isOpen = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2){}



    @HostListener ('click') toggleOpen (){
        this.isOpen = !this.isOpen; 
        const dropdown = this.elRef.nativeElement.nextElementSibling;
        if (!this.isOpen){
            this.renderer.removeClass(dropdown, 'show')

        }
        if (this.isOpen){
            this.renderer.addClass(dropdown, 'show')
        }


        document.addEventListener('click', (event) => {
            if (event.target !== this.elRef.nativeElement) {
                this.isOpen = false;
                this.renderer.removeClass(dropdown, 'show');
            }
        });
        
    }


}