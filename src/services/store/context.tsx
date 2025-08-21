// src/context/ThemeContext.tsx
import React, { createContext, ReactNode, useContext, useRef } from 'react'
import { StorePortI } from './port'

const StoreCtx = createContext<StorePortI | null>(null);

export function useStoreCtx() {
  return useContext(StoreCtx)
}

export function StoreCtxProvider({
  store,
  children
}: {
  store: StorePortI
  children: ReactNode
}) {
  const storeRef = useRef(store)
  return (
    <StoreCtx.Provider value={storeRef.current}>
      {children}
    </StoreCtx.Provider>
  )
}
