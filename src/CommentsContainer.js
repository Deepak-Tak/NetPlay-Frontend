const CommentsData = [
  {
    name: "Deepak",
    text: "Lorem Ipsum is simply dummy text of the printing",
    reply: [],
  },
  {
    name: "Deepak",
    text: "Lorem Ipsum is simply dummy text of the printing",
    reply: [
      {
        name: "Deepak",
        text: "Lorem Ipsum is simply dummy text of the printing",
        reply: [
          {
            name: "Deepak",
            text: "Lorem Ipsum is simply dummy text of the printing",
            reply: [
              {
                name: "Deepak",
                text: "Lorem Ipsum is simply dummy text of the printing",
                reply: [],
              },
            ],
          },
          {
            name: "Deepak",
            text: "Lorem Ipsum is simply dummy text of the printing",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Deepak",
    text: "Lorem Ipsum is simply dummy text of the printing",
    reply: [],
  },
  {
    name: "Deepak",
    text: "Lorem Ipsum is simply dummy text of the printing",
    reply: [
      {
        name: "Deepak",
        text: "Lorem Ipsum is simply dummy text of the printing",
        reply: [],
      },
    ],
  },
];
const Comment = ({ comment }) => {
  const { name, text } = comment;
  return (
    <div className="flex mb-2 rounded-md bg-slate-200">
      <img className="size-8 m-2" alt="userprofile" src="/userlogo.png" />
      <div className="p-1">
        <h3 className="font-bold">{name}</h3>
        <h3>{text}</h3>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment comment={comment} />
      {comment.reply.length ? (
        <div className="ml-4 pl-4 pt-2 border-l border-t border-l-black">
          <CommentList comments={comment.reply} />
        </div>
      ) : null}
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold p-2">Comments :</h2>
      <CommentList comments={CommentsData} />
    </div>
  );
};

export default CommentsContainer;
