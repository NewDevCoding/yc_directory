import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";


const View = async ({ id }: { id: string }) => {
  
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  const formatViews = (views: any) => {
          if(views == 1){
            return "1 View"
          } else {
            return `${views} Views`
          }
        }
  
  await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit()
  

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">{formatViews(totalViews)}</span>
      </p>
    </div>
  );
};
export default View;


// import Ping from "@/components/Ping";
// import { client } from "@/sanity/lib/client";
// import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
// import { writeClient } from "@/sanity/lib/write-client";

// const View = async ({ id }: { id: string }) => {

//   const formatViews = (views: any) => {
//     if(views = 1){
//       return "1 View"
//     } else {
//       return `${views} Views`
//     }
//   }

//   const { views: totalViews } = await client
//   .withConfig({ useCdn: false })
//   .fetch(STARTUP_VIEWS_QUERY, { id });

//   await writeClient
//     .patch(id)
//     .set({ views: totalViews + 1 })
//     .commit()


//   return (
//     <div className='view-container'>
//         <div className='absolute -top-2 -right-2'>
//             <Ping />
//         </div>
//         <p className='view-text'>
//             <span className='font-black'>views</span>
//         </p>
//     </div>
//   )
// }

// export default View