import { Component, OnInit } from '@angular/core';
import { Image } from '../image'
import { ImageService } from '../image.service'

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: Image[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(): void {
    this.images = this.imageService.getImages();
  }

}
