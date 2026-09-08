import { chessBoardMeta, openingBookMeta } from './meta';

export const ZORA_CHESS_COMPONENT_META = {
  ChessBoard: chessBoardMeta,
  OpeningBook: openingBookMeta,
} as const;

export const ZORA_PLUGIN_METADATA = {
  packageName: '@ankhorage/zora-chess',
  displayName: 'ZORA Chess',
  componentMeta: ZORA_CHESS_COMPONENT_META,
  placements: [
    {
      child: 'ChessBoard',
      parents: ['Box', 'Card', 'Container', 'Grid', 'Panel', 'Screen', 'ScreenSection', 'Stack'],
    },
    {
      child: 'OpeningBook',
      parents: ['Box', 'Card', 'Container', 'Grid', 'Panel', 'Screen', 'ScreenSection', 'Stack'],
    },
  ],
} as const;
