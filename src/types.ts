import type React from 'react';
import type { Square } from 'chess.js';
import type { ZoraBaseProps } from '@ankhorage/zora';

export type ChessSquareId = Square;

export type ChessBoardOrientation = 'white' | 'black';

export type ChessPieceCode = string;

export type ChessPromotionPiece = 'q' | 'r' | 'b' | 'n';

export interface ChessMoveAttempt {
  from: ChessSquareId;
  to: ChessSquareId;
  promotion?: ChessPromotionPiece;
}

export interface ChessMoveResult extends ChessMoveAttempt {
  fen: string;
  lan: string;
  san: string;
}

export interface ChessPieceRenderContext {
  color: string;
  piece: ChessPieceCode;
  square: ChessSquareId;
}

export type ChessPieceRenderer = (context: ChessPieceRenderContext) => React.ReactNode;

export interface ChessBoardColorScheme {
  lightSquare: string;
  darkSquare: string;
  lightSquareText: string;
  darkSquareText: string;
  selectedSquare: string;
  legalTarget: string;
  lastMoveFrom: string;
  lastMoveTo: string;
  border: string;
  coordinateText: string;
  lightPiece: string;
  darkPiece: string;
}

export type ChessBoardColorOverrides = Partial<ChessBoardColorScheme>;

export interface ChessBoardProps extends ZoraBaseProps {
  fen: string;
  orientation?: ChessBoardOrientation;
  selectedSquare?: ChessSquareId | null;
  legalTargets?: readonly ChessSquareId[];
  lastMove?: ChessMoveAttempt | null;
  disabled?: boolean;
  showCoordinates?: boolean;
  validateMoves?: boolean;
  colorScheme?: ChessBoardColorOverrides;
  onSquarePress?: (square: ChessSquareId) => void;
  onMoveAttempt?: (move: ChessMoveAttempt) => void;
  onLegalMove?: (move: ChessMoveResult) => void;
  onInvalidMove?: (move: ChessMoveAttempt) => void;
  renderPiece?: ChessPieceRenderer;
  testID?: string;
}
