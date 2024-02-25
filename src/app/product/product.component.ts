import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product, ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent 
{

  product:Product=new Product('','',0);

  constructor(private service:ProductService){}

  saveProduct()
  {
    this.service.saveProduct(this.product).subscribe();
  }

  


  
}
