
import { Button } from '@/components/ui/button';
import { useScreenSize } from '../hooks/mobile-section'

function Home() {
  const {isMobile} = useScreenSize()
  console.log(isMobile.valueOf());
  
  return (
    <div className=''>
      <Button>Check</Button>
    </div>
  )
}

export default Home
