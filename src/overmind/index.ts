import { IContext, createOvermind } from 'overmind';
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react';

import * as actions from './actions';
import * as effects from './effects';
import { state } from './state';

export const config = {
  state,
  actions,
  effects,
};

export type Context = IContext<typeof config>;

export const useState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();
export const store = createOvermind(config, {
  devtools: 'localhost:3031',
});
