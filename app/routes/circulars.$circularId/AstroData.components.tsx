/*!
 * Copyright © 2023 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Link } from '@remix-run/react'

export function GcnCircular({
  children,
  value,
}: JSX.IntrinsicElements['data']) {
  return (
    <Link className="usa-link" to={`/circulars/${value}`}>
      {children}
    </Link>
  )
}

export function Arxiv({ children, value }: JSX.IntrinsicElements['data']) {
  return (
    <a className="usa-link" href={`https://arxiv.org/abs/${value}`}>
      {children}
    </a>
  )
}

export function Doi({ children, value }: JSX.IntrinsicElements['data']) {
  return (
    <a className="usa-link" href={`https://doi.org/${value}`}>
      {children}
    </a>
  )
}

export function Tns({ children, value }: JSX.IntrinsicElements['data']) {
  return (
    <a className="usa-link" href={`https://www.wis-tns.org/object/${value}`}>
      {children}
    </a>
  )
}
