import { Component, OnInit } from '@angular/core';
import { Slip, RootObject } from 'src/app/services/advice';
import { AdvicesService } from 'src/app/services/advices.service';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.scss']
})
export class AdvicesComponent implements OnInit {

  Phrase!: RootObject;

  constructor(public phrase: AdvicesService) { }

  ngOnInit(): void {

  }

  NewMessager() {
    this.phrase.getPhrase().subscribe(res => this.Phrase = res)
  }



}
