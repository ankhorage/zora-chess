import { ChessBoard } from './ChessBoard';
import { OpeningBook } from './OpeningBook';
import { ZORA_PLUGIN_METADATA } from './registry';

export const ZORA_CHESS_COMPONENT_REGISTRY = { ChessBoard, OpeningBook } as const;

export const ZORA_CHESS_PLUGIN = {
  ...ZORA_PLUGIN_METADATA,
  componentRegistry: ZORA_CHESS_COMPONENT_REGISTRY,
} as const;
