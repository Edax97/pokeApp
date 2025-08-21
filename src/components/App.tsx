import PokeListContainer from "./PokeList/container";
import { StoreCtxProvider } from "../services/store/context";
import { PokeStoreProvider } from "../services/store/storeProvider";

function App() {
  const store = new PokeStoreProvider()
  return (
    <div className="bg-yellow-100">
      <div className="h-screen sm:py-8 lg:py-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl">
              Pokemon Index
            </h1>
          </div>
          <StoreCtxProvider store={store}>
            <div className="my-10">
              <PokeListContainer/>
            </div>
          </StoreCtxProvider>
        </div>
      </div>
    </div>
  )
}

export default App
