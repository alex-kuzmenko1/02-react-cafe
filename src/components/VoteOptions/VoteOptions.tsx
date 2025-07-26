interface VoteOptionsProps {
  onLeaveFeedback: (type: 'good' | 'neutral' | 'bad') => void;
  onReset: () => void;
  hasFeedback: boolean;
}

const VoteOptions = ({ 
  onLeaveFeedback, 
  onReset, 
  hasFeedback 
}: VoteOptionsProps) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      {hasFeedback && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default VoteOptions;