import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Wallet} from '../wallet';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {


  wallets:Observable<Wallet[]> | any
  constructor() { }

  ngOnInit(): void {
  }

}
