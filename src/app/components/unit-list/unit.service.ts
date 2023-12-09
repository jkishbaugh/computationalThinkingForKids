import { Injectable } from '@angular/core';
import { Unit } from './unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  getUnits(): Unit[] {
    return [
      {
        "id": 1,
        "title":"Pong",
        "starterLink":"https://scratch.mit.edu/projects/902587061",
        "description":"Create a pong style game to play with a friend",
        "imageUrl":"assets/block.svg",
        "link": '/pong',
        "challenges": [

        ]
      },
      {
        "id": 2,
        "title": "Getting to Know the Blocks",
        "starterLink": "",
        "description": " Beginning challenges to experiment with the blocks and Scratch Cat.",
        "imageUrl":"assets/block.svg",
        "link": "/blocks",
        "challenges":[]
      },
      {
        "id": 3,
        "title": "Making a GIF",
        "starterLink": "https://scratch.mit.edu/projects/897397332",
        "description": " This challenge will walk you through creating a GIF in Scratch from scratch.  That means you'll use the Scratch Paint Editor to draw each and every frame required to create the animation.  If you're not familiar with the Scratch Paint Editor, this will be a great introduction.",
        "imageUrl":"assets/block.svg",
        "link": "/gif",
        "challenges":[]
      },
      {
        "id": 4,
        "title": "Create a Painting Program",
        "starterLink": "",
        "description": " This challenge will walk you through creating an app that lets you draw on the screen, change colors, change the size of your pen, and erase what you have drawn.",
        "imageUrl":"assets/block.svg",
        "link": "/paint",
        "challenges":[]
      }
    ]
  }
}
