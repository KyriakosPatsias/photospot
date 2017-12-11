import { Injectable } from '@angular/core';
import { IMAGES } from './mock-images'
import { Image } from './image'

@Injectable()
export class ImageService {

  constructor() { }

  getImages(): Image[] {
    return IMAGES;
  }

}
