# Redux and Redux Toolkit
---

## What is "Redux"?
---
Redux is a single store containing "global" state. Dispatching plain object actions to the store when something happens in the app. Pure reducer functions looking at those actions and returning immutably updated state.


## What does the Redux Core Do?
----
The Redux core is a very small and deliberately unopinionated library. It provides a few small API primitives:

- `createstore` to actually create a Redux store.
- `combineReducers` to combine multiple slice reducers into a single larger reducer.
- `applyMiddleware` to combine multiple middleware into a store enhancer.
- `compose` to combine multiple store enhancers into a single store enhancer.