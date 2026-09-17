import { describe, expect, test } from 'bun:test';

import { composeZoraPlugins, ZORA_CORE_PLUGIN } from '@ankhorage/zora';

import { ZORA_CHESS_PLUGIN } from './plugin';
import { ZORA_PLUGIN_METADATA } from './registry';

describe('ZORA chess plugin', () => {
  test('composes against the current ZORA extension hosts', () => {
    expect(() => composeZoraPlugins([ZORA_CORE_PLUGIN, ZORA_CHESS_PLUGIN])).not.toThrow();
  });

  test('uses current generic and structured placement parents', () => {
    const expectedParents = ['Card', 'Grid', 'Screen', 'ScreenSection', 'View'];

    expect(ZORA_PLUGIN_METADATA.placements.map((placement) => placement.parents)).toEqual([
      expectedParents,
      expectedParents,
    ]);
  });
});
