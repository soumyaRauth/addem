import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  number: number;          // Input Total Value By User
  sum: number = 0;           // Holds the total value after calculation
  numbers = [];
  digits: number = 100;       // Determines the maximum digits of a generated random number e.g: 10 is maximum two digits
  rangeOfNumbers: number = 10;      // Determines the maximum number of value generated in the list of numbers
  flag: boolean = true;            // Determines the message to display on the top based on user input
  message: string = "Click on Generate Number";       // The message that is displayed on the top
  placeholder: string = "Enter Input";                // Input field Placeholder text
  congratsMessage:string="Congratulations!";
  sorryMessage:string="Sorry! the guess isn't correct";

  
  constructor(public alertController: AlertController) {
    // Function definition below
    this.generateRandomNumbers(this.rangeOfNumbers);

  }

  


  //===============================================================================================
  //===============================================================================================
  /**
    * This function generates the random numbers
    * the number of maximum input is determined by the rangeOfNumbers variable
    */
  generateRandomNumbers(maxNumbers) {
    this.numbers=[];
    for (let i = 0; i < maxNumbers; i++) {
      //Generates single random number
      let temp = Math.floor(Math.random() * this.digits);

      if (temp !== 0 && temp > 10) {
        this.sum = this.sum + temp;
        this.numbers.push(temp);
      }

    }

  }

  /**
   * Sets the flag to false thus displays the list of random numbers
   */
  displayListOfNumbers() {
    this.flag = false;
    if (this.numbers.length > 0) {
      this.numbers = [];
      this.generateRandomNumbers(this.rangeOfNumbers);
    }
  }

  /**
   * Takes the sum calculated from the user if its not empty or zero
   * Checks whether the guess is correct or not and displays a popup
   */
  userGuess() {
    if (this.number && this.flag==false) {
      if (this.sum == this.number) {
        console.log(this.congratsMessage);
        this.congratsPopup('Congrats!!');
        this.number=null;
        this.generateRandomNumbers(this.rangeOfNumbers);
      } else {
        console.log("OOPSss!");
        this.number=null;
        this.congratsPopup(this.sorryMessage);
        this.generateRandomNumbers(this.rangeOfNumbers);
      }
    } else {
      this.number=null;
      //Displays this message in placeholder if Check button is pressed without entering any value
      this.placeholder = "Please input your assumption"; 
    }

  }


  //Alert
  async congratsPopup(message) {
    const alert = await this.alertController.create({
      header: 'Ans:'+this.sum,
      subHeader: '',
      message: message,
      buttons: ['Ok']
    });

    await alert.present();
  }
  
  

}
