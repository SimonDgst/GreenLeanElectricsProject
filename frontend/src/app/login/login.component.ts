import { Component, OnInit } from '@angular/core';
import { ProsumerService} from '../services/prosumer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private prosumerService: ProsumerService) { }

  ngOnInit() {
  }

  login(): void {
    console.log('Connected');
    this.prosumerService.getProsumers().subscribe((prosumers) => { console.log(prosumers); });

  }

}
