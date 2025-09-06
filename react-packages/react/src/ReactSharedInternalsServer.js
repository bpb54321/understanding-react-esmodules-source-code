/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {Dispatcher} from 'react-reconciler/src/ReactInternalTypes.js';
import type {AsyncDispatcher} from 'react-reconciler/src/ReactInternalTypes.js';

import type {
  Reference,
  TaintEntry,
  RequestCleanupQueue,
} from './ReactTaintRegistry.js';

import {
  TaintRegistryObjects,
  TaintRegistryValues,
  TaintRegistryByteLengths,
  TaintRegistryPendingRequests,
} from './ReactTaintRegistry.js';

import {enableTaint} from 'shared/ReactFeatureFlags.js';

export type SharedStateServer = {
  H: null | Dispatcher, // ReactCurrentDispatcher for Hooks
  A: null | AsyncDispatcher, // ReactCurrentCache for Cache

  // enableTaint
  TaintRegistryObjects: WeakMap<Reference, string>,
  TaintRegistryValues: Map<string | bigint, TaintEntry>,
  TaintRegistryByteLengths: Set<number>,
  TaintRegistryPendingRequests: Set<RequestCleanupQueue>,

  // DEV-only

  // ReactDebugCurrentFrame
  getCurrentStack: null | (() => string),

  // ReactOwnerStackReset
  recentlyCreatedOwnerStacks: 0,
};

export type RendererTask = boolean => RendererTask | null;

const ReactSharedInternals: SharedStateServer = ({
  H: null,
  A: null,
}: any);

if (enableTaint) {
  ReactSharedInternals.TaintRegistryObjects = TaintRegistryObjects;
  ReactSharedInternals.TaintRegistryValues = TaintRegistryValues;
  ReactSharedInternals.TaintRegistryByteLengths = TaintRegistryByteLengths;
  ReactSharedInternals.TaintRegistryPendingRequests =
    TaintRegistryPendingRequests;
}

if (__DEV__) {
  // Stack implementation injected by the current renderer.
  ReactSharedInternals.getCurrentStack = (null: null | (() => string));
  ReactSharedInternals.recentlyCreatedOwnerStacks = 0;
}

export default ReactSharedInternals;
