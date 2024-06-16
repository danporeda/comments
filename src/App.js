import { faker } from '@faker-js/faker';
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from './components/ApprovalCard';

function App() {
  const commentArr = [];

  const renderedComments = (numComments) => {
    for (let i = 0; i < numComments; i++) {
      const newComment = <ApprovalCard>
        <CommentDetail
        comment={faker.lorem.sentence()} 
        author={faker.internet.userName()} 
        time={faker.date.anytime().toString()} 
        image={faker.image.avatar()}
        />
      </ApprovalCard>

      commentArr.push(newComment);
    }

    return commentArr;
  }

  return (
    <div className="ui container comments">
      {renderedComments(5)}
    </div>
  );
};

export default App;