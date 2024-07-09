 
//  import Category from "../Components/Category";
//  import CakeItems from "../Components/CakeItem";
//  import ProductDisplay from "../Components/ProductDisplay";
//  import Sort from "../Components/Sort";
// import HomeMade from "../Components/HomeMade";

// export default function Cakes() {
//   return (
//     <div> 
//        <div style={{ display: "flex", flexDirection: "column" }}>
//       <ProductDisplay />
//       <Sort />
//       <div style={{ display: "flex" }}>
//         <div style={{ flex: 1 }}>
//           <Category />
//         </div>
//         <div style={{ flex: 1 }}>
//           <CakeItems />
//         </div>
//       </div>
//       <HomeMade/>
//     </div>
//     </div>
//   )
// }


 
import Category from "../Components/Category";
import CakeItems from "../Components/CakeItem";
import ProductDisplay from "../Components/ProductDisplay";
import Sort from "../Components/Sort";
import HomeMade from "../Components/HomeMade";

export default function Cakes() {
 return (
   <div>
   <div>
     <ProductDisplay />
     <Sort />
     <div  className="flex items-start justify-between flex-row gap-5 xl:gap-10 responsive py-10">
       <div>
         <div>
           <Category />
         </div>
       </div>
       <div>
       <CakeItems />
       </div>
      
     </div>
  
   </div>
   <HomeMade/>
   </div>
 )
}

