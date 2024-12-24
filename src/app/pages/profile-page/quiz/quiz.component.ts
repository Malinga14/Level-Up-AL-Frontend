import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { TokenService } from '../../../token.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  @ViewChild('radioInput') radioInput!: ElementRef;
  
  public quiz: any = {
    id: "",
    topic: "",
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    correct_answer: ""
  };
selectedOption: any={
  answer_1:"",
  answer_2:"",
  answer_3:"",
  answer_4:"",
}

  constructor(private http: HttpClient,) {
    this.getQuiz();
   }
  quizNumber: number =0;
  num: number =0;
  marks: number =0;
  result:number =0;
  correctanswer: String ='';

 getRandomNumberBetween0and10(): number {
    return Math.floor(Math.random() * 10) + 1;
  }
  getRandomNumberBetween10and20(): number {
    return Math.floor(Math.random() * 11) + 10;
  }

  getRandomNumberBetween20and30(): number {
    return Math.floor(Math.random() * 11) + 20;
  }

  getRandomNumberBetween30and40(): number {
    return Math.floor(Math.random() * 11) + 30;
  }

  getRandomNumberBetween40and50(): number {
    return Math.floor(Math.random() * 11) + 40;
  }

  getRandomNumberBetween50and60(): number {
    return Math.floor(Math.random() * 11) + 50;
  }
  
  

  getQuiz() {
    
    
    this.quizNumber++;

    if(this.quizNumber<7){
      switch(this.quizNumber){
        case 1:
          this.quizMechanics();
          
          break;
        case 2:
          this.quizThermodynamics();
          break;
        case 3:
          this.quizWavesAndOptics();
          break;
        case 4:
          this.quizElectricityAndMagnetism();
          break;
        case 5:
          this.quizModernPhysics();
          break;
        case 6:
          this.quizPracticalSkills();
          break;
      }
    }else{
      this.quizNumber=0;
    }
  } 

  
  quizMechanics(){
    const randomId = this.getRandomNumberBetween0and10();

    this.http.get('http://localhost:8080/quiz/search-quiz-by-id/'+randomId).subscribe(
      (response) => {
        this.quiz = response;
        this.answerCorrection();
      },
      (error) => {
        console.error("Error fetching quiz data", error);
      }
    );
  }

  quizThermodynamics(){
    const randomId = this.getRandomNumberBetween10and20();

    this.http.get('http://localhost:8080/quiz/search-quiz-by-id/'+randomId).subscribe(
      (response) => {
        this.quiz = response;
        this.answerCorrection();
      },
      (error) => {
        console.error("Error fetching quiz data", error);
      }
    );
    
  }

  quizWavesAndOptics(){
    const randomId = this.getRandomNumberBetween20and30();

    this.http.get('http://localhost:8080/quiz/search-quiz-by-id/'+randomId).subscribe(
      (response) => {
        this.quiz = response;
        this.answerCorrection();
      },
      (error) => {
        console.error("Error fetching quiz data", error);
      }
    );
  }

  quizElectricityAndMagnetism(){
    const randomId = this.getRandomNumberBetween40and50();

    this.http.get('http://localhost:8080/quiz/search-quiz-by-id/'+randomId).subscribe(
      (response) => {
        this.quiz = response;
        this.answerCorrection();
      },
      (error) => {
        console.error("Error fetching quiz data", error);
      }
    );
  }

  quizModernPhysics(){
    const randomId = this.getRandomNumberBetween50and60();

    this.http.get('http://localhost:8080/quiz/search-quiz-by-id/'+randomId).subscribe(
      (response) => {
        this.quiz = response;
        this.answerCorrection();
      },
      (error) => {
        console.error("Error fetching quiz data", error);
      }
    );
  }

  quizPracticalSkills(){
    const randomId = this.getRandomNumberBetween50and60();

    this.http.get('http://localhost:8080/quiz/search-quiz-by-id/'+randomId).subscribe(
      (response) => {
        this.quiz = response;
        this.answerCorrection();
      },
      (error) => {
        console.error("Error fetching quiz data", error);
      }
    );
  }

  answerCorrection(){
    if(this.quiz.correct_answer==this.selectedOption.answer_1){
      this.resultCalculator();
    }
    else if(this.quiz.correct_answer==this.selectedOption.answer_2){
      this.resultCalculator();
    }
    else if(this.quiz.correct_answer==this.selectedOption.answer_3){
      this.resultCalculator();
    }
     else if(this.quiz.correct_answer==this.selectedOption.answer_4){
      this.resultCalculator();
    }
  }

  resultCalculator(){
    this.num++;
    this.marks++;
    this.result=(this.marks*100)/this.num;
  }

}
