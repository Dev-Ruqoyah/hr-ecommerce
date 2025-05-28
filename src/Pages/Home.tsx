import HeroBanner from '@/components/Banner/HeroBanner'
import Sidebar from '@/components/Sidebar/Sidebar'

const Home = () => {
  return (
    <div>
        <div className="container mx-auto   ">
            <div className="grid grid-cols-5 py-6">
                <div className='col-span-1 border-r me-4'>
                     <Sidebar/>
                </div>
                <div className="col-span-4">
                    <HeroBanner/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home