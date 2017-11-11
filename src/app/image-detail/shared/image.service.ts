import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];
  getImages() {
     return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
      return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
   {'id': 1, 'category': 'ubers', 'caption': 'Uber has also launched Uber POOL in India.', 'url': 'assets/img/uber_01.jpg'},
   {'id': 2, 'category': 'ubers', 'caption': 'View from a boat', 'url': 'assets/img/uber_02.jpg'},
   {'id': 3, 'category': 'ubers', 'caption': 'View from a boat', 'url': 'assets/img/uber_03.jpg'},
   {'id': 4, 'category': 'ubers', 'caption': 'boat deck', 'url': 'assets/img/air_01.jpg'},
   {'id': 5, 'category': 'ola', 'caption': 'nature plant', 'url': 'assets/img/ola_01.jpg'},
   {'id': 6, 'category': 'ola', 'caption': 'natural beauty', 'url': 'assets/img/ola_02.jpg'},
   {'id': 7, 'category': 'ola', 'caption': 'natural beauty', 'url': 'assets/img/ola_03.jpg'},
   {'id': 8, 'category': 'meru', 'caption': 'View from a boat', 'url': 'assets/img/meru_01.jpg'},
   {'id': 9, 'category': 'meru', 'caption': 'sun set', 'url': 'assets/img/meru_02.jpg'},
   {'id': 10, 'category': 'meru', 'caption': 'rising sun', 'url': 'assets/img/meru_03.jpg'}
];
