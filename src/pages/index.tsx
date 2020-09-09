import React from 'react';
import styles from './index.less';
import Board from '@/pages/Board';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Game />
    </div>
  );
};
