// export default function Category() {
//   return (
//     <>
//       <div className="h-[600px]  w-56 mt-16 ml-8">
//         <h2 className="text-xl font-bold">Categories</h2>
//         <ul className="mt-5 text-lg ">
//           <li>Cookies</li>
//           <li>Cakes</li>
//           <li>Best seller</li>
//           <li>Shop</li>
//         </ul>
//       </div>
//     </>
//   );
// }


export default function Category() {
  return (
    <>
    <div className="w-full pl-3">
    <h2 className="text-xl font-bold">Categories</h2>
     <ul className="pt-5 text-lg text-left flex flex-col font-semibold underline  underline-offset-4 decoration-pink-500 ">
      <li className="footer_link">Cookies</li>
      <li className="footer_link">Cakes</li>
      <li className="footer_link">Best seller</li>
      <li className="footer_link">Shop</li>
     </ul>
    </div>
   
    </>
  );
}