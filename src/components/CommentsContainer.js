import React from "react";

const commentsData = [
  {
    name: "Sandeep Thakur",
    text: "Lorem Ipsum",
    replies: [
      {
        name: "Sandeep Thakur",
        text: "Lorem Ipsum",
        replies: [],
      },
      {
        name: "Sandeep Thakur",
        text: "Lorem Ipsum",
        replies: [
          {
            name: "Sandeep Thakur",
            text: "Lorem Ipsum",
            replies: [
              {
                name: "Sandeep Thakur",
                text: "Lorem Ipsum",
                replies: [
                  {
                    name: "Sandeep Thakur",
                    text: "Lorem Ipsum",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sandeep Thakur",
    text: "Lorem Ipsum",
    replies: [],
  },
  {
    name: "Sandeep Thakur",
    text: "Lorem Ipsum",
    replies: [],
  },
  {
    name: "Sandeep Thakur",
    text: "Lorem Ipsum",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        {/* <Comment key={index} data={comment} /> */}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-50 p-2  rounded-lg m-2">
      <img
        className="w-12 h-12"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="logoconatiner"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:-</h1>
      {/* <Comment data={commentsData[0]} /> */}
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
