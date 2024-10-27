import { ScreenSizeProvider } from "./hooks/mobile-section"
import Home from "./page/home"

function App() {
  
  return (
    <ScreenSizeProvider>
        <Home/>
    </ScreenSizeProvider>
     
  )
}

export default App
