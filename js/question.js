class Question {

    constructor() {
      this.input = createInput("Name");
      this.title = createElement('h2');
      this.question = createElement('h3')
      this.option1 = createElement("h3");
      this.option2 = createElement("h3");
    }
    hide(){
      this.option1.hide();
      this.option2.hide();
      this.question.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Quiz Master App");
      this.title.position(350, 0);
  
      this.question.html("What is 10 to the power of 5?")
      this.question.position(160, 80);
      this.option1.html("10000");
      this.option1.position(160, 100);
      this.option2.html("100000");
      this.option2.position(155, 120)

      this.input.position(150, 230)
    }
  
  }
  