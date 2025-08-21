import PokeListContainer from "./PokeList/container";
import { StoreCtxProvider } from "../services/store/context";
import { PokeStoreProvider } from "../services/store/storeProvider";

function App() {
  const store = new PokeStoreProvider()
  return (
    <div className="min-h-screen" style={{backgroundColor: 'rgba(254, 202, 27, 0.75)'}}>
      <div className="sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:mx-auto">
            <img src="https://i.imgur.com/65zUHye.png" className="h-16 mx-auto w-auto" alt="LogoPoke"/>
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
