export default function Singlecountry({singlecountry}){

console.log(singlecountry)


return(
 
        <div className="card" >
            <img src={singlecountry.flags.svg} alt="" className="img"  />
             <h1>Country Name : {singlecountry?.name?.common}</h1> 
              <h2>Capital : {singlecountry?.capital}</h2>


                  
        </div>
  
)

}