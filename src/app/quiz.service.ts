import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  data: any[] = [];
  currentQuestionIndex: number = 0;

  constructor(private http: HttpClient) {}

  fetchQuizData() {
    this.http.get("http://localhost:8080/quiz/get-quiz").subscribe(
      (response) => {
        this.data = response as any[];
        console.log("Quiz fetched successfully", response);
        alert("Quiz data fetched successfully");
      },
      (error) => {
        console.error("Error fetching quiz data", error);
        alert("Failed to fetch quiz data");
      }
    );
  }

  getRandomQuestionsByTopic(): any {
    const groupedByTopic = this.groupQuestionsByTopic(this.data);
    const randomQuestions: any = {};

    for (const topic in groupedByTopic) {
      const questions = groupedByTopic[topic];

      if (questions.length >= 2) {
        const randomIndexes = this.getRandomIndexes(questions.length, 2);
        
        randomQuestions[topic] = randomIndexes.map(index => {
          const question = questions[index];
          return {
            question: question.question,
            answers: [
              question.answer_1,
              question.answer_2,
              question.answer_3,
              question.answer_4,
            ],
            correct_answer: question.correct_answer,
          };
        });
      }
    }

    return randomQuestions;
  }

  private groupQuestionsByTopic(data: any[]): { [key: string]: any[] } {
    return data.reduce((acc, curr) => {
      const topic = curr.topic;
      if (!acc[topic]) {
        acc[topic] = [];
      }
      acc[topic].push(curr);
      return acc;
    }, {});
  }

  private getRandomIndexes(total: number, count: number): number[] {
    const indexes: Set<number> = new Set();
    while (indexes.size < count) {
      const randomIndex = Math.floor(Math.random() * total);
      indexes.add(randomIndex);
    }
    return Array.from(indexes);
  }

  getNextQuestion(randomQuestions: any): any {
    const topicKeys = Object.keys(randomQuestions);
    const currentTopic = topicKeys[this.currentQuestionIndex % topicKeys.length];
    const currentQuestionList = randomQuestions[currentTopic];
    const currentQuestion = currentQuestionList[this.currentQuestionIndex % currentQuestionList.length];

    this.currentQuestionIndex++;

    return {
      topic: currentTopic,
      question: currentQuestion.question,
      answers: currentQuestion.answers,
      correct_answer: currentQuestion.correct_answer,
    };
  }
}
