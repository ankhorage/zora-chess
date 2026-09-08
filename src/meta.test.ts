import { describe, expect, it } from 'bun:test';

import { chessBoardMeta, openingBookMeta } from './meta';
import { ZORA_CHESS_COMPONENT_META } from './registry';

describe('ZORA chess component metadata', () => {
  it('registers ChessBoard and OpeningBook metadata entries', () => {
    expect(ZORA_CHESS_COMPONENT_META.ChessBoard).toBe(chessBoardMeta);
    expect(ZORA_CHESS_COMPONENT_META.OpeningBook).toBe(openingBookMeta);
  });

  it('describes OpeningBook props that runtime bindings can provide', () => {
    expect(Object.keys(openingBookMeta.props)).toEqual([
      'moves',
      'title',
      'loading',
      'errorText',
      'emptyText',
      'selectedMove',
    ]);

    expect(openingBookMeta.props.moves).toMatchObject({
      type: 'array',
      authoring: { authority: 'instance' },
    });
    expect(openingBookMeta.bindings.props.moves.value).toEqual({
      type: 'array',
      itemType: 'object',
    });
  });

  it('describes ChessBoard legalMove payload fields for operation input binding', () => {
    expect(chessBoardMeta.events.legalMove.payloadFields.map((field) => field.path)).toEqual([
      'payload.from',
      'payload.to',
      'payload.fen',
      'payload.san',
      'payload.lan',
    ]);
  });

  it('exports one canonical plugin descriptor from the public API', async () => {
    const source = await Bun.file('src/plugin.ts').text();
    const metadataSource = await Bun.file('src/registry.ts').text();
    const publicSource = await Bun.file('src/index.ts').text();

    expect(metadataSource).toContain("packageName: '@ankhorage/zora-chess'");
    expect(source).toContain('componentRegistry: ZORA_CHESS_COMPONENT_REGISTRY');
    expect(metadataSource).toContain('componentMeta: ZORA_CHESS_COMPONENT_META');
    expect(publicSource).toContain('ZORA_CHESS_PLUGIN');
  });
});
