import HeroBanner from '@/components/Banner/HeroBanner'
import Sidebar from '@/components/Sidebar/Sidebar'
import SectionHeader from '@/Header/SectionHeader'
import SectionSubHeader from '@/Header/SectionSubHeader'

const Home = () => {
  return (
    <div>
        <section className="container mx-auto py-10  px-10 ">
            <div className="grid grid-cols-5 py-6">
                <div className='col-span-1 border-r me-4'>
                     <Sidebar/>
                </div>
                <div className="col-span-4">
                    <HeroBanner/>
                </div>
            </div>
        </section>

        <section className='py-10'>
          <div className="container mx-auto px-10">
            <SectionHeader header="Today's"/>
            <SectionSubHeader subheader="Flash Sales"/>
          </div>
        </section>
    </div>
  )
}

export default Home