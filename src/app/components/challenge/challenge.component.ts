import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from 'src/app/interfaces/challenge';

@Component({
  selector: 'ctfk-challenge',
  templateUrl: './challenge.component.html',
})
export class ChallengeComponent{
  @Input() challenge: Challenge = {
      resourceUrl: "",
      challengeDetails: "",
      blockTypes: [],
      hint: ""
  }
  @Input() step: number = 0
  @Input() starterLink: string = ""

  setToolTipText(color: string){
    switch(color){
      case "bg-ctfk-motion":
        return "Motion Block"
      case "bg-ctfk-look":
        return "Look Block"

      case "bg-ctfk-sound":
        return"Sound Block"

      case "bg-ctfk-event":
        return"Event Block"
      case "bg-ctfk-control":
        return "Control Block"
      case "bg-ctfk-sensing":
        return "Sensing Block"
      case "bg-ctfk-op":
        return "Operator Block"
      case "bg-ctfk-var":
        return "Variable Block"
      case "bg-ctfk-my":
        return "My Blocks"
      default:
        return ""
    }
  }
}
