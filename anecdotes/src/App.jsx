import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, })
  const [selected, setSelected] = useState(0)
  const anecdotesFunction = () => {
    setSelected(Math.floor(anecdotes.length * Math.random()))
    console.log(selected)
  }
  const highestKey = Object.keys(votes).reduce((maxKey, key) =>
    votes[key] > votes[maxKey] ? key : maxKey
    , Object.keys(votes)[0]);
  console.log('heighted', highestKey)
  const voteFunction = () => {
    let copy = { ...votes }
    copy[selected] += 1
    console.log(copy)
    setVotes(copy)
  }
  return (
    <div style={{ display: 'flex', margin: 'auto', width: "100%", flexDirection: 'column', gap: '30px' }} >
      <h2>Anecdotes of the day</h2>
      <span>{anecdotes[selected]}</span>
      <span>has {votes[selected]} votes</span>
      <div>
        <button onClick={voteFunction}>Votes</button>
        <button onClick={anecdotesFunction}>next anecdote</button></div>
      <h2>Anecdotes of the day</h2>
      <span>
        {anecdotes[highestKey]}
      </span>
      <span>
        has {votes[highestKey]} votes
      </span>
    </div>
  )
}

export default App