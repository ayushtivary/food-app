export const Resturantcard = (props) =>{
    const {resData} = props
    const {
       name,
       cuisines,
       avgRating,
       sla,
       cloudinaryImageId
    } = resData?.info
    return (
       <div className="m-4 p-4 w-[200px] border-2 h-[400px] bg-gray-50  rounded-xl hover:bg-green-200 ... focus:outline-none focus-visible:ring ...">
          <img className="res-logo h-[200px] rounded-lg" src = 
          {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
            cloudinaryImageId
          }
          />
          <h4 className="font-bold p-2 text-sm ">{name}</h4>
          <h5 className="p-2 text-xs text-wrap flex-wrap">{cuisines} </h5>
          <h5 className="p-2 text-xs">{avgRating} starts</h5>
          <h5 className="p-2 text-xs">{sla.deliveryTime} mins</h5>
       </div>
    )
 }