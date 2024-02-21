import React from 'react'

interface Store {}
interface Mutation {}
interface IContext extends Store, Mutation {}
const Context = React.createContext<IContext>({} as Store)
Context.displayName = 'UIContext'

const Provider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const value = React.useMemo(() => ({}), [])
  return <Context.Provider value={value}>{children}</Context.Provider>
}
Provider.displayName = 'UIProvider'

export const ManagedUI: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => <Provider>{children}</Provider>
ManagedUI.displayName = 'ManagedUI'

export const useUI = () => {
  const context = React.useContext(Context)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}
