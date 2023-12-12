import { Injectable } from '@angular/core';
import { Unit } from '../interfaces/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  units = [
    {
      "id": 1,
      "title":"Pong Game",
      "starterLink":"https://scratch.mit.edu/projects/902587061",
      "description":"Create a pong style game to play with a friend",
      "imageUrl":"assets/pongImage.png",
      "link": '/pong',
      "challenges": [
        {
          resourceUrl: "",
          challengeDetails: "Remix Starter Project",
          blockTypes: [],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "Get the downBar Sprite to move left and right with the arrow keys.",
          blockTypes: ["bg-ctfk-motion", "bg-ctfk-event", "bg-ctfk-control", "bg-ctfk-sensing"],
          hint: "you will need a loop and an if block"
        },
      ]
    },
    {
      "id": 2,
      "title": "Getting to Know the Blocks",
      "starterLink": "",
      "description": " Beginning challenges to experiment with the blocks and Scratch Cat.",
      "imageUrl":"assets/talkingCat1.gif",
      "link": "/blocks",
      "challenges": []
    },
    {
      "id": 3,
      "title": "Making a GIF",
      "starterLink": "https://scratch.mit.edu/projects/897397332",
      "description": " This challenge will walk you through creating a GIF in Scratch from scratch.  That means you'll use the Scratch Paint Editor to draw each and every frame required to create the animation.  If you're not familiar with the Scratch Paint Editor, this will be a great introduction.",
      "imageUrl":"assets/gif.png",
      "link": "/gif",
      "challenges": []
    },
    {
      "id": 4,
      "title": "Create a Painting Program",
      "starterLink": "",
      "description": " This challenge will walk you through creating an app that lets you draw on the screen, change colors, change the size of your pen, and erase what you have drawn.",
      "imageUrl":"assets/canvas.png",
      "link": "/paint",
      "challenges": [
        {
          resourceUrl: "",
          challengeDetails: "Login to Scratch and click create to get a new project.",
          blockTypes: [],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "Delete the Scratch Cat Sprite and Add a pencil sprite with a second costume of a magic wand",
          blockTypes: [],
          hint: "For the second costume you will need to be in the Costume Editor Tab"
        },
    ]
    },
    {
      "id": 5,
      "title": "Create a Multiplication Game",
      "starterLink": "https://scratch.mit.edu/projects/934044682",
      "description": " This challenge will walk you through creating an racing game that helps you practice your multiplication skills.",
      "imageUrl":"assets/race.png",
      "link": "/paint",
      "challenges": [
        {
          resourceUrl: "",
          challengeDetails: "Remix Starter Project",
          blockTypes: [],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "Get the number sprite to ask a question(Ex: 0 X 1) and wait for an answer. ",
          blockTypes:["bg-ctfk-event","bg-ctfk-sensing"],
          hint: "Remember your green flag"
        },
        {
          resourceUrl: "",
          challengeDetails: "Create a way to set and save two numbers for the question.",
          blockTypes:["bg-ctfk-var", "bg-ctfk-op"],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "Fix it so one number is set to a random number between 0 and 13",
          blockTypes:["bg-ctfk-op"],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "Make sure that the number sprite asks another question after an answer is given.",
          blockTypes:["bg-ctfk-control"],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "After you give an answer get your sprite to say whether it is correct or not.",
          blockTypes:["bg-ctfk-op", "bg-ctfk-control", "bg-ctfk-sensing", "bg-ctfk-look"],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "After you give an incorrect answer get the number sprite to move forward 20.",
          blockTypes:[ "bg-ctfk-control", "bg-ctfk-motion"
          ],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "If your answer is correct have the Noah sprite move foward 20.",
          blockTypes:[
            "bg-ctfk-event","bg-ctfk-motion"],
          hint: "You will need to change code on the Number Sprite and the Noah sprite."
        },
        {
          resourceUrl: "",
          challengeDetails: "If the number sprite touches the finish line change the background to show Game Over.",
          blockTypes:[
            "bg-ctfk-sensing","bg-ctfk-control",
          "bg-ctfk-look"],
          hint: "You will click on the background and add text box. You can style it how you want."
        },
        {
          resourceUrl: "",
          challengeDetails: "If the number sprite touches the finish line hide each of the sprites.",
          blockTypes:[
          "bg-ctfk-look",
          "bg-ctfk-event"],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "Make sure when you restart the game that the background changes back and the sprites show.",
          blockTypes:[
          "bg-ctfk-look",
          "bg-ctfk-event"],
          hint: ""
        },
        {
          resourceUrl: "",
          challengeDetails: "Make sure when you restart the game that the both sprites return to the starting line.",
          blockTypes:[
          "bg-ctfk-motion"
          ],
          hint: ""
        }

      ]
    }
  ]
  getUnits(): Unit[] {
    return this.units
  }

getUnitByTitle(title: string): Unit {
    const selectedUnit = this.units.find(unit => unit.title === title);

    if (selectedUnit) {
      return selectedUnit;
    } else {
      return {
        id: 0,
        title: "Default Title",
        starterLink: "Default Starter Link",
        description: "Default Description",
        imageUrl: "/default/img/url",
        link: "/default",
        challenges: []
      };
    }
  }
}
