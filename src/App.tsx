
import { ScreenSizeProvider } from "./hooks/mobile-section"
import { SelectionProvider } from "./hooks/select-option-context"
import Home from "./page/home"

function App() {
  
  return (
    <ScreenSizeProvider>
      <SelectionProvider>
        <Home/>
      </SelectionProvider>
    </ScreenSizeProvider>
  )
}

export default App
