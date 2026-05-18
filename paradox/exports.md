# Public API

## ChessBoard

Kind: `value`
Module: `src/ChessBoard.tsx`
Source: `src/ChessBoard.tsx:179:14`

## ChessBoardColorOverrides

Kind: `unknown`
Module: `src/types.ts`
Source: `src/types.ts:48:1`

## ChessBoardColorScheme

Kind: `type`
Module: `src/types.ts`
Source: `src/types.ts:33:1`

### Members

| Name            | Kind     | Type     | Required | Description |
| --------------- | -------- | -------- | -------- | ----------- |
| border          | property | `string` | yes      |             |
| coordinateText  | property | `string` | yes      |             |
| darkPiece       | property | `string` | yes      |             |
| darkSquare      | property | `string` | yes      |             |
| darkSquareText  | property | `string` | yes      |             |
| lastMoveFrom    | property | `string` | yes      |             |
| lastMoveTo      | property | `string` | yes      |             |
| legalTarget     | property | `string` | yes      |             |
| lightPiece      | property | `string` | yes      |             |
| lightSquare     | property | `string` | yes      |             |
| lightSquareText | property | `string` | yes      |             |
| selectedSquare  | property | `string` | yes      |             |

## chessBoardMeta

Kind: `value`
Module: `src/meta.ts`
Source: `src/meta.ts:3:14`

## ChessBoardOrientation

Kind: `unknown`
Module: `src/types.ts`
Source: `src/types.ts:7:1`

## ChessBoardProps

Kind: `type`
Module: `src/types.ts`
Source: `src/types.ts:50:1`

### Members

| Name            | Kind     | Type                                              | Required | Description |
| --------------- | -------- | ------------------------------------------------- | -------- | ----------- |
| colorScheme     | property | `Partial<ChessBoardColorScheme> \| undefined`     | no       |             |
| disabled        | property | `boolean \| undefined`                            | no       |             |
| fen             | property | `string`                                          | yes      |             |
| lastMove        | property | `ChessMoveAttempt \| null \| undefined`           | no       |             |
| legalTargets    | property | `readonly Square[] \| undefined`                  | no       |             |
| onInvalidMove   | property | `((move: ChessMoveAttempt) => void) \| undefined` | no       |             |
| onLegalMove     | property | `((move: ChessMoveResult) => void) \| undefined`  | no       |             |
| onMoveAttempt   | property | `((move: ChessMoveAttempt) => void) \| undefined` | no       |             |
| onSquarePress   | property | `((square: ChessSquareId) => void) \| undefined`  | no       |             |
| orientation     | property | `ChessBoardOrientation \| undefined`              | no       |             |
| renderPiece     | property | `ChessPieceRenderer \| undefined`                 | no       |             |
| selectedSquare  | property | `Square \| null \| undefined`                     | no       |             |
| showCoordinates | property | `boolean \| undefined`                            | no       |             |
| testID          | property | `string \| undefined`                             | no       |             |
| validateMoves   | property | `boolean \| undefined`                            | no       |             |

## ChessColorThemeShape

Kind: `type`
Module: `src/colors.ts`
Source: `src/colors.ts:3:1`

### Members

| Name      | Kind     | Type                                                                                                                                                                                                                             | Required | Description |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| semantics | property | `{ action: { primary: { softBg: string; }; }; content: { default: string; muted: string; }; neutral: { divider: string; surface: string; surfaceHover: string; }; success: { softBg: string; }; warning: { softBg: string; }; }` | yes      |             |

## ChessMoveAttempt

Kind: `type`
Module: `src/types.ts`
Source: `src/types.ts:13:1`

### Members

| Name      | Kind     | Type                               | Required | Description |
| --------- | -------- | ---------------------------------- | -------- | ----------- |
| from      | property | `Square`                           | yes      |             |
| promotion | property | `ChessPromotionPiece \| undefined` | no       |             |
| to        | property | `Square`                           | yes      |             |

## ChessMoveResult

Kind: `type`
Module: `src/types.ts`
Source: `src/types.ts:19:1`

### Members

| Name      | Kind     | Type                               | Required | Description |
| --------- | -------- | ---------------------------------- | -------- | ----------- |
| fen       | property | `string`                           | yes      |             |
| from      | property | `Square`                           | yes      |             |
| lan       | property | `string`                           | yes      |             |
| promotion | property | `ChessPromotionPiece \| undefined` | no       |             |
| san       | property | `string`                           | yes      |             |
| to        | property | `Square`                           | yes      |             |

## ChessPieceCode

Kind: `unknown`
Module: `src/types.ts`
Source: `src/types.ts:9:1`

## ChessPieceRenderContext

Kind: `type`
Module: `src/types.ts`
Source: `src/types.ts:25:1`

### Members

| Name   | Kind     | Type     | Required | Description |
| ------ | -------- | -------- | -------- | ----------- |
| color  | property | `string` | yes      |             |
| piece  | property | `string` | yes      |             |
| square | property | `Square` | yes      |             |

## ChessPieceRenderer

Kind: `unknown`
Module: `src/types.ts`
Source: `src/types.ts:31:1`

## ChessPieceState

Kind: `type`
Module: `src/engine.ts`
Source: `src/engine.ts:5:1`

### Members

| Name   | Kind     | Type                                                                                          | Required | Description |
| ------ | -------- | --------------------------------------------------------------------------------------------- | -------- | ----------- |
| color  | property | `"black" \| "white"`                                                                          | yes      |             |
| piece  | property | `string`                                                                                      | yes      |             |
| square | property | `import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square` | yes      |             |

## ChessPromotionPiece

Kind: `unknown`
Module: `src/types.ts`
Source: `src/types.ts:11:1`

## ChessSquareId

Kind: `unknown`
Module: `src/types.ts`
Source: `src/types.ts:5:1`

## chessSquares

Kind: `value`
Module: `src/squares.ts`
Source: `src/squares.ts:6:14`

## createBoardSquares

Kind: `function`
Module: `src/squares.ts`
Source: `src/squares.ts:8:1`

### Signatures

- `(orientation: ChessBoardOrientation) => readonly import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square[]`
  - orientation: `ChessBoardOrientation`
  - returns: `readonly import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square[]`

## createChessBoardColorScheme

Kind: `function`
Module: `src/colors.ts`
Source: `src/colors.ts:28:1`

### Signatures

- `(theme: ChessColorThemeShape, overrides?: Partial<ChessBoardColorScheme> | undefined) => ChessBoardColorScheme`
  - overrides: `Partial<ChessBoardColorScheme> | undefined` (optional)
  - theme: `ChessColorThemeShape`
  - returns: `ChessBoardColorScheme`

## getLegalTargets

Kind: `function`
Module: `src/engine.ts`
Source: `src/engine.ts:60:1`

### Signatures

- `(fen: string, from: import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square) => readonly import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square[]`
  - fen: `string`
  - from: `import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square`
  - returns: `readonly import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square[]`

## getSquareFile

Kind: `function`
Module: `src/squares.ts`
Source: `src/squares.ts:22:1`

### Signatures

- `(square: import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square) => string`
  - square: `import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square`
  - returns: `string`

## getSquareRank

Kind: `function`
Module: `src/squares.ts`
Source: `src/squares.ts:26:1`

### Signatures

- `(square: import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square) => string`
  - square: `import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square`
  - returns: `string`

## isLightSquare

Kind: `function`
Module: `src/squares.ts`
Source: `src/squares.ts:15:1`

### Signatures

- `(square: import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square) => boolean`
  - square: `import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square`
  - returns: `boolean`

## readChessPieces

Kind: `function`
Module: `src/engine.ts`
Source: `src/engine.ts:34:1`

### Signatures

- `(fen: string) => ReadonlyMap<import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square, ChessPieceState>`
  - fen: `string`
  - returns: `ReadonlyMap<import("/Users/a_rtiphishl_e/git/zora-chess/node_modules/chess.js/dist/types/chess").Square, ChessPieceState>`

## tryMove

Kind: `function`
Module: `src/engine.ts`
Source: `src/engine.ts:69:1`

### Signatures

- `(fen: string, attempt: ChessMoveAttempt) => ChessMoveResult | null`
  - attempt: `ChessMoveAttempt`
  - fen: `string`
  - returns: `ChessMoveResult | null`

## ZORA_CHESS_COMPONENT_META

Kind: `value`
Module: `src/registry.ts`
Source: `src/registry.ts:3:14`
