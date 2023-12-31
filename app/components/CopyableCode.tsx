/*!
 * Copyright © 2023 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Button, Icon } from '@trussworks/react-uswds'
import CopyToClipboard from 'react-copy-to-clipboard'

export interface CopyableCodeProps {
  text: string
}

export function CopyableCode(props: CopyableCodeProps) {
  return (
    <CopyToClipboard text={props.text}>
      <Button
        type="button"
        unstyled
        className="padding-1px text-base-darkest"
        title="Copy to clipboard"
      >
        <Icon.ContentCopy role="presentation" />{' '}
        <code>
          <small>{props.text}</small>
        </code>
      </Button>
    </CopyToClipboard>
  )
}
