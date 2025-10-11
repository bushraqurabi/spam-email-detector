import type { SpamCheckResponse } from '../../types';
import './ResultDisplay.scss';

interface ResultDisplayProps {
  result: SpamCheckResponse;
}

const ResultDisplay = ({ result }: ResultDisplayProps) => {
  const isSpam = result.prediction === '🚨 Spam';
  const percentage = result.confidence;

  return (
    <div className={`result-display ${isSpam ? 'spam' : 'ham'}`}>
      <div className="result-icon">
        {isSpam ? '🚨' : '✅'}
      </div>
      
      <h2 className="result-title">
        {isSpam ? 'Spam Detected!' : 'Email is Safe'}
      </h2>
      
      <p className="result-message">
        {isSpam 
          ? 'This email appears to be spam. Exercise caution!' 
          : 'This email looks legitimate and safe to read.'}
      </p>
      
      <div className="result-percentage">
        <div className="percentage-label">Confidence Level</div>
        <div className="percentage-value">{percentage}%</div>
        <div className="percentage-bar">
          <div 
            className="percentage-fill" 
            style={{ width: `${percentage}` }}
          />
        </div>
      </div>
      
      <div className="result-details">
        <div className="detail-item">
          <span className="detail-label">Classification:</span>
          <span className={`detail-value ${isSpam ? 'spam-text' : 'ham-text'}`}>
            {result.prediction.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
