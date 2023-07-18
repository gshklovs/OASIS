"use client";

import Answer from "./Answer";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function FAQMessage(props: any) {
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const [votes, setVotes] = useState(props.votes);
  const [response, setResponse] = useState(props.answer);
  const [answer, setAnswer] = useState("");

  const router = useRouter();

  const sendUpvote = async () => {
    const response = await fetch(
      `http://127.0.0.1:8080/api/messages/${props.id}/upvote`,
      {
        method: "PUT",
      },
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("error");
    }
  };

  const sendDownvote = async () => {
    const response = await fetch(
      `http://127.0.0.1:8080/api/messages/${props.id}/downvote`,
      {
        method: "PUT",
      },
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("error");
    }
  };

  const upClickHandler = () => {
    if (!upClicked) {
      sendUpvote().then((data) => {
        setVotes(data.votes);
        console.log("set votes to:" + data.votes);
      });
    } else {
      sendDownvote().then((data) => {
        setVotes(data.votes);
        console.log("set votes to:" + data.votes);
      });
    }
    setUpClicked(!upClicked);
    setDownClicked(false);
  };

  const downClickHandler = () => {
    if (!downClicked) {
      sendDownvote().then((data) => {
        setVotes(data.votes);
        console.log("set votes to:" + data.votes);
      });
    } else {
      sendUpvote().then((data) => {
        setVotes(data.votes);
        console.log("set votes to:" + data.votes);
      });
    }
    setDownClicked(!downClicked);
    setUpClicked(false);
  };

  const sendAnswer = async (answer: string) => {
    const response = await fetch(
      `http://127.0.0.1:8080/questions/answer/${props.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: answer,
      },
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("error");
    }
  };

  const answerHandler = () => {
    sendAnswer(answer);
    setResponse(answer);
    setAnswer("");
  };

  return (
    <div className="w-full bg-gray-700 shadow-xl rounded-2xl p-4 my-4">
      {!response && (
        <div className="flex flex-row items-center">
          {/* <Votes
            votes={votes}
            upClickHandler={upClickHandler}
            upClicked={upClicked}
            downClickHandler={downClickHandler}
            downClicked={downClicked}
          /> */}
          {props.question}
        </div>
      )}

      {/* Thumbs up and thumbs down hero icon stacked on top of each other that takes 40 px of width */}
      {response && props.question}
      <div className="flex flex-row items-center">
        {response && (
          <>
            {/* <Votes
            votes={votes}
            upClickHandler={upClickHandler}
            upClicked={upClicked}
            downClickHandler={downClickHandler}
            downClicked={downClicked}
          /> */}
            <Answer answer={response} />
            {props.children}
          </>
        )}
      </div>
      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full bg-gray-800 rounded-md p-2 m-2"
      />
      <button
        onClick={answerHandler}
        className="bg-blue-600 rounded-md p-2 m-2"
      >
        Submit
      </button>
    </div>
  );
}
