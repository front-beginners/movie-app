/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type ReactNode } from 'react'

type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}

type ExtractFirstParam<T> = T extends (param: infer U) => any ? U : never

export type TypeFromArray<T extends any[]> = T extends Array<infer U>
  ? U
  : never

type Condition = boolean | (() => boolean)

interface Conditional {
  (props: {
    condition: Condition
    children?: ReactNode
    render?: () => ReactNode
  }): JSX.Element | null
}

interface Choose {
  (props: { children: JSX.Element | JSX.Element[] }): JSX.Element | null
  When: Conditional
  Otherwise(
    props: Omit<ExtractFirstParam<Conditional>, 'condition'>
  ): JSX.Element | null
}

const shouldPass = (condition: Condition) =>
  typeof condition === 'function' ? condition() : condition

const childrenWrapper = (children: ReactNode | null) =>
  React.createElement(React.Fragment, null, children)

export const If: Conditional = ({ children, condition, render }) => {
  if (!shouldPass(condition)) return null

  return render ? childrenWrapper(render()) : childrenWrapper(children) ?? null
}

export const Choose: Choose = ({ children }) => {
  let when: ReactNode | null = null
  let otherwise: ReactNode | null = null

  React.Children.forEach(children, (children) => {
    if (children.props.condition === undefined) {
      otherwise = children
    } else if (!when && shouldPass(children.props.condition)) {
      when = children
    }
  })
  return childrenWrapper(when || otherwise)
}

Choose.When = If

Choose.Otherwise = ({ children, render }) =>
  render ? childrenWrapper(render()) : childrenWrapper(children ?? null)

export const For = <T extends readonly any[]>({
  render,
  of,
}: {
  render(item: TypeFromArray<Mutable<T>>, index: number): JSX.Element
  of: T
}) => childrenWrapper(of.map(render))
