import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LIST} from '../../mocks/items.mocks';


/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  item = '';
  ToDoList = LIST;
  task:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("variable")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }
moreTasks(){
 LIST.push({task:this.task})
 this.navCtrl.push("SecondPage")
}
}
