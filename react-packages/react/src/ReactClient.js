/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import ReactVersion from 'shared/ReactVersion.js';
import {
  REACT_FRAGMENT_TYPE,
  REACT_PROFILER_TYPE,
  REACT_STRICT_MODE_TYPE,
  REACT_SUSPENSE_TYPE,
  REACT_SUSPENSE_LIST_TYPE,
  REACT_LEGACY_HIDDEN_TYPE,
  REACT_ACTIVITY_TYPE,
  REACT_SCOPE_TYPE,
  REACT_TRACING_MARKER_TYPE,
  REACT_VIEW_TRANSITION_TYPE,
} from 'shared/ReactSymbols.js';

import {Component, PureComponent} from './ReactBaseClasses.js';
import {createRef} from './ReactCreateRef.js';
import {forEach, map, count, toArray, only} from './ReactChildren.js';
import {
  createElement,
  cloneElement,
  isValidElement,
} from './jsx/ReactJSXElement.js';
import {createContext} from './ReactContext.js';
import {lazy} from './ReactLazy.js';
import {forwardRef} from './ReactForwardRef.js';
import {memo} from './ReactMemo.js';
import {cache} from './ReactCacheClient.js';
import {postpone} from './ReactPostpone.js';
import {
  getCacheForType,
  useCallback,
  useContext,
  useEffect,
  useEffectEvent,
  useImperativeHandle,
  useDebugValue,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
  useReducer,
  useRef,
  useState,
  useTransition,
  useDeferredValue,
  useId,
  useCacheRefresh,
  use,
  useOptimistic,
  useActionState,
} from './ReactHooks.js';
import ReactSharedInternals from './ReactSharedInternalsClient.js';
import {startTransition, startGestureTransition} from './ReactStartTransition.js';
import {addTransitionType} from './ReactTransitionType.js';
import {act} from './ReactAct.js';
import {captureOwnerStack} from './ReactOwnerStack.js';
import * as ReactCompilerRuntime from './ReactCompilerRuntime.js';

const Children = {
  map,
  forEach,
  count,
  toArray,
  only,
};

export {
  Children,
  createRef,
  Component,
  PureComponent,
  createContext,
  forwardRef,
  lazy,
  memo,
  cache,
  postpone as unstable_postpone,
  useCallback,
  useContext,
  useEffect,
  useEffectEvent as experimental_useEffectEvent,
  useImperativeHandle,
  useDebugValue,
  useInsertionEffect,
  useLayoutEffect,
  useMemo,
  useOptimistic,
  useActionState,
  useSyncExternalStore,
  useReducer,
  useRef,
  useState,
  REACT_FRAGMENT_TYPE as Fragment,
  REACT_PROFILER_TYPE as Profiler,
  REACT_STRICT_MODE_TYPE as StrictMode,
  REACT_SUSPENSE_TYPE as Suspense,
  createElement,
  cloneElement,
  isValidElement,
  ReactVersion as version,
  ReactSharedInternals as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ReactCompilerRuntime as __COMPILER_RUNTIME,
  // Concurrent Mode
  useTransition,
  startTransition,
  useDeferredValue,
  REACT_SUSPENSE_LIST_TYPE as unstable_SuspenseList,
  REACT_LEGACY_HIDDEN_TYPE as unstable_LegacyHidden,
  REACT_ACTIVITY_TYPE as unstable_Activity,
  getCacheForType as unstable_getCacheForType,
  useCacheRefresh as unstable_useCacheRefresh,
  use,
  // enableScopeAPI
  REACT_SCOPE_TYPE as unstable_Scope,
  // enableTransitionTracing
  REACT_TRACING_MARKER_TYPE as unstable_TracingMarker,
  // enableViewTransition
  REACT_VIEW_TRANSITION_TYPE as unstable_ViewTransition,
  addTransitionType as unstable_addTransitionType,
  // enableGestureTransition
  startGestureTransition as unstable_startGestureTransition,
  // DEV-only
  useId,
  act,
  captureOwnerStack,
};
