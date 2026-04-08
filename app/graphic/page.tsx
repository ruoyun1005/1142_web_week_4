import Image from "next/image";
import BackHomeButton from "../components/BackHomeButton";
import DesignCard from "../components/designCard"

export default function Graphic() {
  return (
    <>
      <div className="h-full w-full flex relative">
        
        <div className = "flex flex-col lg:flex-row gap-6 lg:gap-10 p-8 w-full overflow-y-auto">
          <BackHomeButton/>
          <section className="">
            
            <div className="section-title uppercase">graphic design</div>
            <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 justify-items-center my-4">
              <div>
                <DesignCard
                title="應數系系服製作"
                images={["/media/designcard1-1.svg",
                        "/media/designcard1-2.svg",
                        "/media/designcard1-3.svg"]}
                />
              </div>
              
              <div>
                <DesignCard
                title="應數 X 資科之夜主視覺"
                images={["/media/designcard2.svg"]}
                />
              </div>

              <div>
                 <DesignCard
                title="應數系55週年紀念"
                images={["/media/designcard3-2.svg",
                        "/media/designcard3-1.svg",]}
                />
              </div>

              <div>
                 <DesignCard
                title="應數系其他設計"
                images={["/media/designcard4-1.svg",
                        "/media/designcard4-2.svg",
                        "/media/designcard4-3.svg",]}
                />
              </div>
               
            </div>
          
          </section>
        </div>    
      </div>   
  </>
  );
}