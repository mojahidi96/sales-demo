import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {StepComponentAbstract} from '@lumen/client-angular';


import { getPluralCategory } from '@angular/common/src/i18n/localization';
import { CATALOGPRODUCTINTERFACE } from './catalog-product-detail.config.interface';


@Component(
    {
        selector: "dashboard",
        templateUrl: "./catalog-product-detail.component.html",
        styleUrls: ["./catalog-product-detail.component.scss"]
    }
)
export class ProductDetailComponent extends StepComponentAbstract implements OnInit{

  public item;
  public config: CATALOGPRODUCTINTERFACE;
  public data: any;
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.data = this.rootNode.getValue();
    this.item = JSON.parse(this.data.selectedItemJson);
    console.log(this.item);
  }

}
