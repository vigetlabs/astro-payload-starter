'use client'
import React from 'react'
import type { DefaultCellComponentProps as Props } from 'payload/types'
import './styles.scss'

const Cell: React.FC<Props> = ({ cellData }) => {
  // TODO: figure out why props are completley different
  // from documentation, cellData is missing from props
  // likely an issue with v2 docs vs v3 payload
  // https://payloadcms.com/docs/admin/components#cell-component

  // console.log(cellData)

  if (!cellData) return null

  return (
    <div
      className={`chip`}
      style={{ backgroundColor: cellData as string }}
    ></div>
  )
}

export default Cell
