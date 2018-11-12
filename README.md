# `@tamal3053/use-time-ago`

> React hook for time since current time in readable format. React Time Ago Custom Hook.

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add tamal3053/use-time-ago
```

## Usage

```js
import useTimeAgo from 'tamal3053/use-time-ago';

function MyComponent() {
  return useTimeAgo( new Date() - 360000 ); // 6 minutes ago
}
```
