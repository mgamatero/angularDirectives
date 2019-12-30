import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngforof-demo",
  templateUrl: "./ngforof-demo.component.html",
  styleUrls: ["./ngforof-demo.component.css"]
})
export class NgforofDemoComponent implements OnInit {
  people: Array<any>;
  imgStyles = {
    "height.px": 100,
    "border-radius.px": 5,
    "margin.px": 5
  };

  constructor() {}

  ngOnInit() {
    this.initArray();
  }

  getCSSClass(age) {
    if (age > 45) {
      return "text-success";
    } else return "text-danger";
  }

  delete(index){
    this.people.splice(index,1)
  }
  initArray(){
    this.people = [
      {
        name: "Mike",
        age: 45,
        city: "Manila",
        picture: "./assets/images/biker.jpg"
      },
      {
        name: "Doug",
        age: 49,
        city: "Irving",
        picture: "./assets/images/biker.jpg"
      },
      {
        name: "Minka",
        age: 42,
        city: "Tustin",
        picture: "./assets/images/biker.jpg"
      }
    ];
  }

}
