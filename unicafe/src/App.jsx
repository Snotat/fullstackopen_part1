import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0, bad: 0, neutral: 0, all: 0
  });

  function feedbackFunction(x) {
    switch (x) {
      case 1:
        setFeedback(prev => ({
          ...prev,
          good: prev.good + 1,
          all: prev.all + 1,
        }));
        break;
      case 2:
        setFeedback(prev => ({
          ...prev,
          bad: prev.bad + 1,
          all: prev.all + 1,
        }));
        break;
      case 3:
        setFeedback(prev => ({
          ...prev,
          neutral: prev.neutral + 1,
          all: prev.all + 1,
        }));
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h2>give feedback</h2>
      <br />
      <Button text='good' onClick={() => feedbackFunction(1)} />
      <Button text='neutral' onClick={() => feedbackFunction(3)} />
      <Button onClick={() => feedbackFunction(2)} text='bad' />
      <br />

      <h2>statistics</h2>
      <br />
      <Statistics good={feedback.good} bad={feedback.bad} all={feedback.all} neutral={feedback.neutral} />
    </div>
  );
};
const Statistics = (prop) => {
  return <div className="">
    {prop.all == 0 ? <>No feedback given</> :
      <table> <StatisticLine text='good' value={prop.good} />
        <StatisticLine text='neutral' value={prop.neutral} />
        <StatisticLine text='bad' value={prop.bad} />
        <StatisticLine text='all' value={prop.all} />

        <StatisticLine text='average' value={prop.all ? (prop.good - prop.bad) / prop.all : 0} />
        <StatisticLine text='positive' value={prop.all ? (prop.good * 100) / prop.all : 0} perc={true} />
      </table>
    }

  </div>
}
const StatisticLine = (prop) => {
  return <tr className="">
    <td>{prop.text}</td>        <td>{prop.value}{prop.perc && <>%</>}</td>
  </tr>
}
const Button = (prop) => {
  return <button onClick={prop.onClick} >
    {prop.text}
  </button>
}

export default App;
