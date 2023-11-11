import { useContext } from "react"
import { FiltersContext } from "../context/filterContext"


export function useFilters () {
  
    const {filters, setFilters} = useContext(FiltersContext)
    
      const filterProducts = (products) => {
        return products.filter(product => {
          return(product.price >= filters.minPrice && (
            filters.category === 'all' || 
            product.type_component === filters.category
          ))
        })
      }
    
      return {filterProducts , setFilters, filters}
    }