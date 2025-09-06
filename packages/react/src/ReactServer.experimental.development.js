/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export {default as __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE} from './ReactSharedInternalsServer.js';

import {forEach, map, count, toArray, only} from './ReactChildren.js';
import {
  REACT_FRAGMENT_TYPE,
  REACT_PROFILER_TYPE,
  REACT_STRICT_MODE_TYPE,
  REACT_SUSPENSE_TYPE,
  REACT_SUSPENSE_LIST_TYPE,
  REACT_VIEW_TRANSITION_TYPE,
} from 'shared/ReactSymbols.js';
import {
  cloneElement,
  createElement,
  isValidElement,
} from './jsx/ReactJSXElement.js';
import {createRef} from './ReactCreateRef.js';
import {
  use,
  useId,
  useCallback,
  useDebugValue,
  useMemo,
  getCacheForType,
} from './ReactHooks.js';
import {forwardRef} from './ReactForwardRef.js';
import {lazy} from './ReactLazy.js';
import {memo} from './ReactMemo.js';
import {cache} from './ReactCacheServer.js';
import {startTransition} from './ReactStartTransition.js';
import {postpone} from './ReactPostpone.js';
import {captureOwnerStack} from './ReactOwnerStack.js';
import version from 'shared/ReactVersion.js';

const Children = {
  map,
  forEach,
  count,
  toArray,
  only,
};

// These are server-only
export {
  taintUniqueValue as experimental_taintUniqueValue,
  taintObjectReference as experimental_taintObjectReference,
} from './ReactTaint.js';

export {
  Children,
  REACT_FRAGMENT_TYPE as Fragment,
  REACT_PROFILER_TYPE as Profiler,
  REACT_STRICT_MODE_TYPE as StrictMode,
  REACT_SUSPENSE_TYPE as Suspense,
  cloneElement,
  createElement,
  createRef,
  use,
  forwardRef,
  isValidElement,
  lazy,
  memo,
  cache,
  startTransition,
  getCacheForType as unstable_getCacheForType,
  postpone as unstable_postpone,
  useId,
  useCallback,
  useDebugValue,
  useMemo,
  version,
  // Experimental
  REACT_SUSPENSE_LIST_TYPE as unstable_SuspenseList,
  REACT_VIEW_TRANSITION_TYPE as unstable_ViewTransition,
  captureOwnerStack, // DEV-only
};
