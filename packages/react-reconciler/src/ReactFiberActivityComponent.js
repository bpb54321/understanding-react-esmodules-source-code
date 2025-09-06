/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import type {ActivityInstance} from './ReactFiberConfig.js';
import type {CapturedValue} from './ReactCapturedValue.js';
import type {Lane} from './ReactFiberLane.js';
import type {TreeContext} from './ReactFiberTreeContext.js';

// A non-null ActivityState represents a dehydrated Activity boundary.
export type ActivityState = {
  dehydrated: ActivityInstance,
  treeContext: null | TreeContext,
  // Represents the lane we should attempt to hydrate a dehydrated boundary at.
  // OffscreenLane is the default for dehydrated boundaries.
  // NoLane is the default for normal boundaries, which turns into "normal" pri.
  retryLane: Lane,
  // Stashed Errors that happened while attempting to hydrate this boundary.
  hydrationErrors: Array<CapturedValue<mixed>> | null,
};
