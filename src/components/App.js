import React, { useState,useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions,setQuestions] = useState([]);

  useEffect(()=>{
    const fetchFunction = async()=>{
      const URL ='http://localhost:4000/questions'
      const res = await fetch(URL)
      const data = await res.json()
      setQuestions(data)
    }
    fetchFunction()
  },[])

  function onAddQuestions(newQuestion){
    setQuestions((prev)=>[...prev,newQuestion])
  }

  function handleDelete(ID){
    setQuestions(questions.filter((question)=> question.id !==ID))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestions={onAddQuestions} /> : <QuestionList setQuestions={setQuestions} questions={questions} handleDelete={handleDelete} />}
    </main>
  );
}

export default App;
