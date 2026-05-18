import { describe, expect, it } from 'bun:test';

import { createBoardSquares, getSquareFile, getSquareRank, isLightSquare } from './squares';

describe('createBoardSquares', () => {
  it('creates white-oriented squares from a8 to h1', () => {
    const squares = createBoardSquares('white');

    expect(squares).toHaveLength(64);
    expect(squares[0]).toBe('a8');
    expect(squares[7]).toBe('h8');
    expect(squares[56]).toBe('a1');
    expect(squares[63]).toBe('h1');
  });

  it('creates black-oriented squares from h1 to a8', () => {
    const squares = createBoardSquares('black');

    expect(squares).toHaveLength(64);
    expect(squares[0]).toBe('h1');
    expect(squares[7]).toBe('a1');
    expect(squares[56]).toBe('h8');
    expect(squares[63]).toBe('a8');
  });
});

describe('square helpers', () => {
  it('reads file and rank labels', () => {
    expect(getSquareFile('e4')).toBe('e');
    expect(getSquareRank('e4')).toBe('4');
  });

  it('detects light squares', () => {
    expect(isLightSquare('a1')).toBe(false);
    expect(isLightSquare('h1')).toBe(true);
  });
});
