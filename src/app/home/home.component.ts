import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
const ytdl = require('youtube-playlist-downloader');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

}
