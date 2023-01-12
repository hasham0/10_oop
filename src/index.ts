//#!/usr/bin/env_node
//import inquirer
import inquirer from "inquirer";

//person class
class Person {
  protected personality!: string;
  constructor() {
    this.personality = "mystery";
  }
  askQuestion(val: number) {
    if (val === 1) {
      this.personality = "extrovert";
    } else if (val === 2) {
      this.personality = "introvert";
    } else if (val === 3) {
      this.personality = "mystery";
    } else if (val === 4) {
      this.personality = "have a nice day";
    } else {
      this.personality = "dono";
    }
  }

  GetPersonality(): string {
    return this.personality;
  }
}

// student class
class Student extends Person {
  private stname!: string;
  constructor() {
    super();
    this.stname;
  }

  get studentName() {
    return this.stname;
  }

  set studentName(val: string) {
    this.stname = val;
  }
}

async function main() {
  // taking user input about personality

  const userInput = await inquirer.prompt([
    {
      name: "value",
      type: "number",

      message: `
      "Type 1: if you like to talk to others"
      "Type 2: if you rather talk to your self"
      "Type 3: no idea"
      "Type 4: exit"
      `,
    },
  ]);

  //making object of student
  const st1 = new Student();
  st1.askQuestion(userInput["value"]);

  if (userInput["value"] === 4) {
    console.log(st1.GetPersonality());
    return;
  } else {
    while (true) {
      // taking user name
      const studentInput = await inquirer.prompt([
        {
          name: "stvalue",
          type: "input",
          message: "What's your name:",
        },
      ]);

      // checking the name is avaliable or not
      // if not then asking user to enter name
      if (!studentInput["stvalue"]) {
        console.log("Enter your name please!!!");
      }

      // if name is there then further continue
      if (studentInput["stvalue"]) {
        st1.studentName = studentInput["stvalue"];
        const check = st1.GetPersonality();
        console.log(
          `Student Name: ${
            st1.studentName
          } and his personality: ${st1.GetPersonality()}`
        );
        break;
      }
    }
  }
}

main();
