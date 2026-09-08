export const chessBoardMeta = {
  name: 'ChessBoard',
  category: 'component',
  description: 'Renders an interactive chess position with legal-move and selection feedback.',
  directManifestNode: true,
  allowedChildren: [],
  blueprint: {
    label: 'Chess board',
    defaultProps: {
      fen: 'rn1qkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 2',
      orientation: 'white',
      showCoordinates: true,
      validateMoves: true,
    },
  },
  bindings: {
    props: {
      fen: {
        label: 'Position',
        value: { type: 'string' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
      orientation: {
        label: 'Orientation',
        value: { type: 'string' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
      selectedSquare: {
        label: 'Selected square',
        value: { type: 'string' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
      legalTargets: {
        label: 'Legal targets',
        value: { type: 'array', itemType: 'string' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
      disabled: {
        label: 'Disabled',
        value: { type: 'boolean' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
    },
    events: {
      squarePress: {
        label: 'Square press',
        payload: {
          eventType: 'chess.squarePress',
          fields: [{ path: 'payload.square', type: 'string', label: 'Square' }],
        },
      },
      moveAttempt: {
        label: 'Move attempt',
        payload: {
          eventType: 'chess.moveAttempt',
          fields: [
            { path: 'payload.from', type: 'string', label: 'From' },
            { path: 'payload.to', type: 'string', label: 'To' },
            { path: 'payload.promotion', type: 'string', label: 'Promotion' },
          ],
        },
      },
      legalMove: {
        label: 'Legal move',
        payload: {
          eventType: 'chess.legalMove',
          fields: [
            { path: 'payload.from', type: 'string', label: 'From' },
            { path: 'payload.to', type: 'string', label: 'To' },
            { path: 'payload.fen', type: 'string', label: 'Position' },
            { path: 'payload.san', type: 'string', label: 'SAN' },
            { path: 'payload.lan', type: 'string', label: 'LAN' },
          ],
        },
      },
      invalidMove: {
        label: 'Invalid move',
        payload: {
          eventType: 'chess.invalidMove',
          fields: [
            { path: 'payload.from', type: 'string', label: 'From' },
            { path: 'payload.to', type: 'string', label: 'To' },
          ],
        },
      },
    },
  },
  events: {
    squarePress: {
      label: 'Square press',
      eventType: 'chess.squarePress',
      payloadFields: [{ path: 'payload.square', type: 'string', label: 'Square' }],
    },
    moveAttempt: {
      label: 'Move attempt',
      eventType: 'chess.moveAttempt',
      payloadFields: [
        { path: 'payload.from', type: 'string', label: 'From' },
        { path: 'payload.to', type: 'string', label: 'To' },
        { path: 'payload.promotion', type: 'string', label: 'Promotion' },
      ],
    },
    legalMove: {
      label: 'Legal move',
      eventType: 'chess.legalMove',
      payloadFields: [
        { path: 'payload.from', type: 'string', label: 'From' },
        { path: 'payload.to', type: 'string', label: 'To' },
        { path: 'payload.fen', type: 'string', label: 'Position' },
        { path: 'payload.san', type: 'string', label: 'SAN' },
        { path: 'payload.lan', type: 'string', label: 'LAN' },
      ],
    },
    invalidMove: {
      label: 'Invalid move',
      eventType: 'chess.invalidMove',
      payloadFields: [
        { path: 'payload.from', type: 'string', label: 'From' },
        { path: 'payload.to', type: 'string', label: 'To' },
      ],
    },
  },
  props: {
    fen: {
      type: 'string',
      category: 'Position',
      label: 'FEN',
      authoring: { authority: 'instance' },
    },
    orientation: {
      type: 'enum',
      category: 'Board',
      label: 'Orientation',
      enum: ['white', 'black'],
      default: 'white',
      authoring: { authority: 'instance' },
    },
    selectedSquare: {
      type: 'string',
      category: 'Position',
      label: 'Selected square',
      authoring: { authority: 'instance' },
    },
    legalTargets: {
      type: 'array',
      category: 'Position',
      label: 'Legal targets',
      authoring: { authority: 'instance' },
    },
    disabled: {
      type: 'boolean',
      category: 'State',
      label: 'Disabled',
      default: false,
      authoring: { authority: 'instance' },
    },
    showCoordinates: {
      type: 'boolean',
      category: 'Board',
      label: 'Show coordinates',
      default: false,
      authoring: { authority: 'instance' },
    },
    validateMoves: {
      type: 'boolean',
      category: 'Board',
      label: 'Validate moves',
      default: true,
      authoring: { authority: 'instance' },
    },
  },
} as const;

export const openingBookMeta = {
  name: 'OpeningBook',
  category: 'component',
  description: 'Displays opening-book moves and position statistics.',
  directManifestNode: true,
  allowedChildren: [],
  blueprint: {
    label: 'Opening book',
    defaultProps: {
      title: 'Opening book',
      moves: [],
      emptyText: 'No book moves for this position.',
    },
  },
  bindings: {
    props: {
      moves: {
        label: 'Moves',
        value: { type: 'array', itemType: 'object' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
      loading: {
        label: 'Loading',
        value: { type: 'boolean' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
      errorText: {
        label: 'Error text',
        value: { type: 'string' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
      selectedMove: {
        label: 'Selected move',
        value: { type: 'string' },
        acceptsFallback: true,
        acceptsTransforms: true,
      },
    },
    events: {
      movePress: {
        label: 'Move press',
        payload: {
          eventType: 'chess.openingMovePress',
          fields: [
            { path: 'payload.san', type: 'string', label: 'SAN' },
            { path: 'payload.uci', type: 'string', label: 'UCI' },
            { path: 'payload.fen', type: 'string', label: 'Position' },
          ],
        },
      },
    },
  },
  events: {
    movePress: {
      label: 'Move press',
      eventType: 'chess.openingMovePress',
      payloadFields: [
        { path: 'payload.san', type: 'string', label: 'SAN' },
        { path: 'payload.uci', type: 'string', label: 'UCI' },
        { path: 'payload.fen', type: 'string', label: 'Position' },
      ],
    },
  },
  props: {
    moves: {
      type: 'array',
      category: 'Content',
      label: 'Moves',
      default: [],
      authoring: { authority: 'instance' },
    },
    title: {
      type: 'string',
      category: 'Content',
      label: 'Title',
      default: 'Opening book',
      authoring: { authority: 'instance' },
    },
    loading: {
      type: 'boolean',
      category: 'State',
      label: 'Loading',
      default: false,
      authoring: { authority: 'instance' },
    },
    errorText: {
      type: 'string',
      category: 'State',
      label: 'Error text',
      authoring: { authority: 'instance' },
    },
    emptyText: {
      type: 'string',
      category: 'Content',
      label: 'Empty text',
      default: 'No book moves for this position.',
      authoring: { authority: 'instance' },
    },
    selectedMove: {
      type: 'string',
      category: 'State',
      label: 'Selected move',
      authoring: { authority: 'instance' },
    },
  },
} as const;
