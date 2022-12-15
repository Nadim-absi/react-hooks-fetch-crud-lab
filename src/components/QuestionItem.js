import React,{useState} from "react";

function QuestionItem({ question,handleDelete,  }) {
  const { id, prompt, answers, correctIndex } = question;
  const [newAnswer, setNewAnswer] = useState(correctIndex)

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleChangeAnswer(e){
    setNewAnswer(e.target.value)
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
      .then((r) => r.json())
      .then(() => console.log("Changed Answer"));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={((e)=>handleChangeAnswer(e))} value={newAnswer}>{options}</select>
      </label>
      <button onClick={(()=>handleDelete(id))}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
