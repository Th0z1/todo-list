import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LIST} from '../../mocks/items.mocks';


/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
item = '';
ToDoList = LIST;
task:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("task")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  yourList(){
    this.navCtrl.push("ResultsPage")
  }
}
