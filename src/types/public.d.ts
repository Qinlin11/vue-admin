import type { RouteRecordName } from 'vue-router'

export interface openTabItem {
    route: string,
    name: RouteRecordName,
    title: string,
}

export interface Article {
    id: number
    status: string
    title: string
    abstractContent: string
    fullContent: string
    sourceURL: string
    imageURL: string
    timestamp: number
    platforms: string[]
    disableComment: boolean
    importance: number
    author: string
    reviewer: string
    type: string
    pageviews: number
  }
  