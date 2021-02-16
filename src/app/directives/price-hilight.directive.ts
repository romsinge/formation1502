import { Product } from './../models/product.model';
import { Directive, ElementRef, Input, HostBinding, Injector } from '@angular/core';

@Directive({
  selector: '[appPriceHilight]'
})
export class PriceHilightDirective {

  @Input('appPriceHilight') colors = {
    low: '',
    high: ''
  }

  @Input() product: Product

  @HostBinding('class.low-price') isLow: boolean = false

  constructor(private el: ElementRef) {}

  ngOnInit() {
    let color = this.product.price <= 50 ? this.colors.low : this.colors.high
    this.el.nativeElement.style.backgroundColor = color

    this.isLow = this.product.price <= 50
  }

}
