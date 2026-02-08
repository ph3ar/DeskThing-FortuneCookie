import './fortunecard.css';
import { FortuneData } from '../../data/fortunes';

interface FortuneCardProps {
  data: FortuneData;
  onNextClick: () => void;
}

const FortuneCard = ({ data, onNextClick }: FortuneCardProps) => {
  return (
    <div className='fortune-card'>
      <p className='fortune-card--text'>"{data.fortune.text}"</p>
      <span className='fortune-card--category'>{data.fortune.category}</span>
      <div className='fortune-card--stats'>
        <span className='fortune-card--stat'>
          🔮 {data.totalRevealed} revealed
        </span>
        <span className='fortune-card--stat'>
          📜 {data.totalFortunes} total
        </span>
      </div>
      <div className='fortune-card--actions'>
        <button className='fortune-card--next' onClick={onNextClick}>
          🥠 Next Fortune
        </button>
      </div>
    </div>
  );
};

export default FortuneCard;
