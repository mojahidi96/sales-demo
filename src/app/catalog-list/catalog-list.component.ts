import { Component, OnInit } from '@angular/core';
import { StepComponentAbstract } from '@lumen/client-angular';
import { from } from "rxjs/index";
import { groupBy, mergeMap, toArray } from "rxjs/internal/operators";
import { CATALOGLISTINTERFACE } from './catalog-list.interface';


@Component(
  {
    selector: "dashboard",
    templateUrl: "./catalog-list.component.html",
    styleUrls: ["./catalog-list.component.scss"]
  }
)
export class CatalogListComponent extends StepComponentAbstract implements OnInit {
  public filterOptions = [];
  public filterid = [];
  public items = [];
  public config: CATALOGLISTINTERFACE;
  public data: any;
  active: boolean = false;
  modalOpened: boolean = false;
  details: any;
  choosenFilter: Array<any> = [];
  tempItems: any[];
  constructor() {
    super();
  }

  ngOnInit(): void {
    this.data = this.rootNode.getValue();
    console.log(this.data);
    this.getCategory()
  }
  public onFilterClick() {
    this.modalOpened = !this.modalOpened;
  }
  getCategory() {
    let filter = [];
    this.data.CatalogList.Items.forEach(item => {
      if (item.itemType == 'FILTER') {
        item.attributes.forEach(attribute => {
          if (attribute.attributeName == "NAME") {
            filter.push(attribute.value);
          }
          if (attribute.attributeName == "FILTEROPTIONS") {
            this.filterid.push(attribute.value);
          }
        })
      }

    })
    let catitems = this.data.CatalogList.Categories[0].CategoryItems;
    catitems.forEach(element => {

      let result = this.data.CatalogList.Items.find(ele => ele.itemID == element.CategoryItemId);
      let item = this.generateObject(result);
      this.getFilter(result);
      this.items.push(item);
      this.tempItems = this.items;
    });
  }

  getFilter(item: any) {
    item.attributes.forEach(ele => {
      this.filterid.forEach(filtername => {
        if (ele.attributeName.toLowerCase() == filtername.toLowerCase()) {
          let Filter = {}
          if (this.filterOptions[filtername]) {
            this.filterOptions[filtername].push({ value: ele.value, checked: false })
          } else {
            this.filterOptions[filtername] = [{ value: ele.value, checked: false }];
          }
          this.filterOptions[filtername] = this.getUniqueArray(this.filterOptions[filtername]);
        }
      })
    })

  }

  getUniqueArray(filterList) {
    const uniqueArray = filterList.filter((thing, index) => {
      return index === filterList.findIndex(obj => {
        return JSON.stringify(obj) === JSON.stringify(thing);
      });
    });
    return uniqueArray;
  }


  generateObject(item) {
    let obj = {};
    obj['itemID'] = item.itemID;
    item.attributes.forEach(ele => {
      (ele.attributeName) ? obj[ele.attributeName.toString().toLowerCase()] = ele.value : '';
    });
    if (item.prices) {
      item.prices.forEach(ele => {
        obj['price'] = ele.amount;
      })
    }
    return obj;
  }

  displayProductDetails(item) {
    let result = this.data.CatalogList.Items.find(ele => ele.itemID == item.itemID);
    let features = this.getRelations(result);
    item['features'] = features;
    this.modalOpened = false;
    if (item) {
      this.details = { ...item };
    }
  }
  getRelations(item) {
    let relations = [];
    item.relations.forEach(rel => {
      let relation = this.data.CatalogList.Items.find(ele => ele.itemID == rel.relationItemID);
      let item = this.generateObject(relation);
      relations.push(item);
    })
    return relations;
  }

  public filterProductList() {

    let list = this.tempItems;

    let filterData: Array<any> = [];
    let source = from(this.choosenFilter);
    let obs = source.pipe(
      groupBy(obj => obj.filterType),
      mergeMap(group => group.pipe(toArray())),
      toArray()
    );

    obs.subscribe(multiList => {
      if (list) {
        multiList.forEach(multiItem => {
          if (filterData && filterData.length == 0)
            filterData = this.runOrFilter(multiItem, list);
          else
            filterData = this.runOrFilter(multiItem, filterData);
        });
        this.items = filterData;
        this.modalOpened = false;
      }
    });
  }

  private runOrFilter(multiItem: any, list: any) {
    let data: Array<any> = [];
    multiItem.forEach(item => {
      item.filterType = item.filterType.toLowerCase();
      let dataList = list.filter(listItem => {
        if (listItem[item.filterType])
          return (listItem[item.filterType].toLowerCase().indexOf(item.filterTitle) > -1);
        else
          return false;
      });
      data = [...data, ...dataList];
    });
    return data;
  }

  public onChangeEvent(event: any, data: any, filterType) {
    data = data.toLowerCase();
    filterType = filterType.toLowerCase();
    let fiterItem = this.choosenFilter.find(item => item.filterType.toLowerCase() === filterType && item.filterTitle.toLowerCase() === data);
    let index = this.choosenFilter.indexOf(fiterItem)
    if (event.checked && index < 0) {
      this.choosenFilter.push({ 'filterTitle': data, 'filterType': filterType });
    } else {
      if (index >= 0)
        this.choosenFilter.splice(index, 1);
    }
  }

  public clear() {
    this.filterid.forEach(item => {
      this.filterOptions[item].forEach(x => {
        x.checked = false;
      })
    });
    this.choosenFilter = [];
    this.modalOpened = false;
    this.items = this.tempItems;
  }
}
