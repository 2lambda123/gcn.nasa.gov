/*!
 * Copyright © 2023 United States Government as represented by the
 * Administrator of the National Aeronautics and Space Administration.
 * All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from 'react'

import styles from './tabs.module.css'

export interface TabProps {
  label: React.ReactNode
  children: React.ReactNode
}

export function Tab({ children }: TabProps) {
  return <>{children}</>
}

export function Tabs({
  children,
}: {
  children: React.ReactElement<TabProps>[]
}) {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className={styles.tabs}>
      <div role="tablist">
        {children.map((tab, index) => (
          <button
            className={selectedTab === index ? 'active' : ''}
            onClick={() => setSelectedTab(index)}
            key={index}
            type="button"
            role="tab"
            aria-selected={selectedTab === index}
            aria-controls={`tabpanel-${index}`}
            tabIndex={selectedTab === index ? 0 : -1}
            id={`btn-${index}`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {children && children[selectedTab]}
      </div>
    </div>
  )
}
