import type { ChessBoardColorOverrides, ChessBoardColorScheme } from './types';

export interface ChessColorThemeShape {
  semantics: {
    action: {
      primary: {
        softBg: string;
      };
    };
    content: {
      default: string;
      muted: string;
    };
    neutral: {
      divider: string;
      surface: string;
      surfaceHover: string;
    };
    success: {
      softBg: string;
    };
    warning: {
      softBg: string;
    };
  };
}

export function createChessBoardColorScheme(
  theme: ChessColorThemeShape,
  overrides?: ChessBoardColorOverrides,
): ChessBoardColorScheme {
  return {
    border: theme.semantics.neutral.divider,
    coordinateText: theme.semantics.content.muted,
    darkPiece: theme.semantics.content.default,
    darkSquare: theme.semantics.neutral.surfaceHover,
    darkSquareText: theme.semantics.content.muted,
    lastMoveFrom: theme.semantics.warning.softBg,
    lastMoveTo: theme.semantics.warning.softBg,
    legalTarget: theme.semantics.success.softBg,
    lightPiece: theme.semantics.content.default,
    lightSquare: theme.semantics.neutral.surface,
    lightSquareText: theme.semantics.content.muted,
    selectedSquare: theme.semantics.action.primary.softBg,
    ...overrides,
  };
}
