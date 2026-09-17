import { chessBoardMeta, openingBookMeta } from './meta';

export const ZORA_CHESS_COMPONENT_META = {
  ChessBoard: chessBoardMeta,
  OpeningBook: openingBookMeta,
} as const;

const CHESS_PLACEMENT_PARENTS = ['Card', 'Grid', 'Screen', 'ScreenSection', 'View'] as const;

export const ZORA_PLUGIN_METADATA = {
  packageName: '@ankhorage/zora-chess',
  displayName: 'ZORA Chess',
  componentMeta: ZORA_CHESS_COMPONENT_META,
  placements: [
    {
      child: 'ChessBoard',
      parents: CHESS_PLACEMENT_PARENTS,
    },
    {
      child: 'OpeningBook',
      parents: CHESS_PLACEMENT_PARENTS,
    },
  ],
} as const;
