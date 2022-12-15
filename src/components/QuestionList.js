import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({setQuestions,questions,handleDelete}) {
  


  function onDelete(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then(() => handleDelete(id));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question)=> <QuestionItem key={question.id} question={question} handleDelete={onDelete} />)}</ul>
    </section>
  );
}

export default QuestionList;
