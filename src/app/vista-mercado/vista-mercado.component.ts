

import { Component } from '@angular/core';

interface MarketItem {
  name: string;
  price: number;
  posicion: string;
  prediccion: number;
}

@Component({
  selector: 'app-vista-mercado',
  templateUrl: './vista-mercado.component.html',
  styleUrl: './vista-mercado.component.scss'
})
export class VistaMercadoComponent {
  items: MarketItem[] = [
    { name: 'Manzana', price: 1.20 , posicion: 'Manzana',prediccion: 100},
    { name: 'Plátano', price: 0.80 ,posicion: 'Manzana' ,prediccion: 50},
    { name: 'Naranja', price: 1.00 ,posicion: 'Manzana' ,prediccion: 50},
    { name: 'Uva', price: 2.00 ,posicion: 'Manzana' ,prediccion: 20 }
  ];

  selectedSort: string = 'priceAsc';
  selectedItem: MarketItem | null = null;

  sortTable() {
    switch (this.selectedSort) {
      case 'priceAsc':
        this.items.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        this.items.sort((a, b) => b.price - a.price);
        break;
      case 'nameAsc':
        this.items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'nameDesc':
        this.items.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  selectItem(item: MarketItem) {
    this.selectedItem = item;
  }

  hoverItem(item: MarketItem | null) {
    if (this.selectedItem !== item) {
      this.selectedItem = item;
    }
  }
  refrescarPagina() {
    window.location.reload();
  }
}
