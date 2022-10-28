import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {

  
  nama = "Julio Ronaldi";
  nim = "202102368";

  constructor() { }

  ngOnInit(): void {
  }

}
