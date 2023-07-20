"use client";
// import { Votes } from "./Votes";
import Answer from "./Answer";
import { useState } from "react";

export default function FAQMessage(props: any) {
  const [upClicked, setUpClicked] = useState(false);
  const [downClicked, setDownClicked] = useState(false);
  const [votes, setVotes] = useState(props.votes);

  const sendUpvote = async () => {
    const response = await fetch(
      `http://chat-backendv5-env.eba-yuqyrpqg.us-east-2.elasticbeanstalk.com/api/messages/${props.id}/upvote`,
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
      `http:/chat-backendv5-env.eba-yuqyrpqg.us-east-2.elasticbeanstalk.com/api/messages/${props.id}/downvote`,
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

  return (
    <div className="w-full bg-gray-700 shadow-xl rounded-2xl p-4 my-4">
      {!props.answer && (
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
      {props.answer && props.question}
      <div className="flex flex-row items-center">
        {props.answer && (
          <>
            {/* <Votes
              votes={votes}
              upClickHandler={upClickHandler}
              upClicked={upClicked}
              downClickHandler={downClickHandler}
              downClicked={downClicked}
            /> */}
            <Answer answer={props.answer} />
            {props.children}
          </>
        )}
      </div>
    </div>
  );
}
