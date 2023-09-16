export const questionConfig = [
  {
    id: "1",
    questionTitle: "Select your gender:?",
    answers: [
      { id: "1", title: "Male", nextQuestionId: null },
      { id: "2", title: "Female", nextQuestionId: null },
    ],
    nextQuestionId: "2",
  },
  {
    id: "2",
    questionTitle:
      "So we can get to know you better, tell us about your relationship status.",
    answers: [
      { id: "1", title: "Single", nextQuestionId: "3" },
      { id: "2", title: "In a relationship", nextQuestionId: "8" },
    ],
    nextQuestionId: null,
  },
  {
    id: "3",
    questionTitle: "Are you a parent?",
    answers: [
      { id: "1", title: "Yes" },
      { id: "2", title: "No" },
    ],
    nextQuestionId: "4",
  },
  {
    id: "4",
    dependentByAnswer: true,
    questionTitle: `{answer[1]} {answer[3]} need a slightly
       different approach to improve their relationship. Which statement best describes you?`,
    answers: [
      {
        id: "1",
        title: "I’m very unhappy with how things are going in my relationship",
      },
      {
        id: "2",
        title:
          "I’m unhappy with parts of my relationship, but some things are working well",
      },
      {
        id: "3",
        title: "I’m generally happy in my relationship",
      },
    ],
    nextQuestionId: "5",
  },
  {
    id: "5",
    questionTitle: `Do you tend to overthink?`,
    answers: [
      {
        id: "1",
        title: "Yes",
        nextQuestionId: "6",
      },
      {
        id: "2",
        title: "No",
        nextQuestionId: "7",
      },
    ],
    nextQuestionId: null,
  },
  {
    id: "6",
    questionTitle: `What is most important to you?`,
    answers: [
      {
        id: "1",
        title: "Success",
        nextQuestionId: null,
      },
      {
        id: "2",
        title: "Romance",
        nextQuestionId: null,
      },
      {
        id: "3",
        title: "Stability",
        nextQuestionId: null,
      },
      {
        id: "4",
        title: "Freedom",
        nextQuestionId: null,
      },
    ],
    nextQuestionId: "15",
  },
  {
    id: "7",
    questionTitle: `Is emotional control tricky for you?`,
    answers: [
      {
        id: "1",
        title: "Yes",
        nextQuestionId: null,
      },
      {
        id: "2",
        title: "Something",
        nextQuestionId: null,
      },
      {
        id: "3",
        title: "Rarely",
        nextQuestionId: null,
      },
      {
        id: "4",
        title: "Not at all",
        nextQuestionId: null,
      },
    ],
    nextQuestionId: "15",
  },
  {
    id: "8",
    questionTitle: `Are you a single parent?`,
    answers: [
      {
        id: "1",
        title: "Yes",
      },
      {
        id: "2",
        title: "No",
      },
    ],
    nextQuestionId: "9",
  },
  {
    id: "9",
    dependentByAnswer: true,
    questionTitle: `Single {answer[1]} {answer[8]} need 
    a slightly different approach to find their perfect partner. But first, 
    how did you feel in your last relationship?`,
    answers: [
      {
        id: "1",
        title: "I was unhappy with low things were going in my relationship",
      },
      {
        id: "2",
        title:
          "I was unhappy with parts of my relationship, but some thing were working",
      },
      {
        id: "3",
        title: "I was generally happy with my relationship",
      },
      {
        id: "4",
        title: "I’ve never been in a relationship",
      },
    ],
    nextQuestionId: "10",
  },
  {
    id: "10",
    questionTitle: `Is your partner an introvert or extrovert?`,
    answers: [
      {
        id: "1",
        title: "Introvert",
      },
      {
        id: "2",
        title: "Extrovert",
      },
      {
        id: "3",
        title: "A bit of both",
      },
    ],
    nextQuestionId: "11",
  },
  {
    id: "11",
    questionTitle: `What is your partner’s gender?`,
    answers: [
      {
        id: "1",
        title: "Male",
        nextQuestionId: "12",
      },
      {
        id: "2",
        title: "Female",
        nextQuestionId: "14",
      },
    ],
    nextQuestionId: null,
  },
  {
    id: "12",
    questionTitle: `Do you agree with the statement below?`,
    subtitle: "“My partner and I make sex a priority in our relationship”",
    answers: [
      {
        id: "1",
        title: "Strongly agree",
        nextQuestionId: null,
      },
      {
        id: "2",
        title: "Agree",
        nextQuestionId: null,
      },
      {
        id: "3",
        title: "Neutral",
        nextQuestionId: null,
      },
      {
        id: "4",
        title: "Disagree",
        nextQuestionId: null,
      },
      {
        id: "5",
        title: "Strongly disagree",
        nextQuestionId: null,
      },
    ],
    nextQuestionId: "13",
  },
  {
    id: "13",
    questionTitle: `When you think about your relationship goals, you feel...?`,
    answers: [
      {
        id: "1",
        title: "Optimistic! They are totally doable, with some guidance.",
        nextQuestionId: null,
      },
      {
        id: "2",
        title: "Cautious. I’ve struggled before, but I’m hopeful.",
        nextQuestionId: null,
      },
      {
        id: "3",
        title: "I’m feeling a little anxious, honestly.",
        nextQuestionId: null,
      },
    ],
    nextQuestionId: "15",
  },
  {
    id: "14",
    questionTitle: `Are any of these factors currently affecting your relationship?`,
    severalAnswer: true,
    answers: [
      {
        id: "1",
        title: "Infidelity",
        nextQuestionId: null,
      },
      { id: "2", title: "Depression", nextQuestionId: null },
      { id: "3", title: "Low sexual desire", nextQuestionId: null },
      { id: "4", title: "Poor body image", nextQuestionId: null },
      { id: "5", title: "Postpartum despression", nextQuestionId: null },
      {
        id: "6",
        title: "Anxiety",
        nextQuestionId: null,
      },
      {
        id: "7",
        title: "Parenting issues",
        nextQuestionId: null,
      },
      { id: "8", title: "Blended family issues", nextQuestionId: null },
      {
        id: "9",
        title: "Divorce is on the table",
        nextQuestionId: null,
      },
      {
        id: "10",
        title: "None of these",
        nextQuestionId: null,
      },
    ],
    nextQuestionId: "15",
  },
  {
    id: "15",
    questionTitle: `Where did you hear about us?`,
    answers: [
      {
        id: "1",
        title: "Poster or Billboard",
        nextQuestionId: null,
      },
      {
        id: "2",
        title: "Friend or Family",
        nextQuestionId: null,
      },
      {
        id: "3",
        title: "Instagram",
        nextQuestionId: null,
      },
      {
        id: "4",
        title: "Direct Mail or Package Insert",
        nextQuestionId: null,
      },
      {
        id: "5",
        title: "Online TV or Streaming TV",
        nextQuestionId: null,
      },
      {
        id: "6",
        title: "TV",
        nextQuestionId: null,
      },
      {
        id: "7",
        title: "Radio",
        nextQuestionId: null,
      },
      {
        id: "8",
        title: "Search Engine (Google, Bing, etc.)",
        nextQuestionId: null,
      },
      {
        id: "9",
        title: "Newspaper or Magazine",
        nextQuestionId: null,
      },
      {
        id: "10",
        title: "Facebook",
        nextQuestionId: null,
      },
      {
        id: "11",
        title: "Podcast",
        nextQuestionId: null,
      },
      {
        id: "12",
        title: "Influencer",
        nextQuestionId: null,
      },
      {
        id: "13",
        title: "Youtube",
        nextQuestionId: null,
      },
      {
        id: "14",
        title: "Pinterest",
        nextQuestionId: null,
      },
      {
        id: "15",
        title: "Other",
        nextQuestionId: null,
      },
    ],
    severalAnswer: true,
    nextQuestionId: null,
  },
];

export const idsSaveAnswers = ["1", "3", "8"];

export const matchParameters = {
  Yes: "who have children",
  No: "",
  Male: "Male",
  Female: "Female",
};
