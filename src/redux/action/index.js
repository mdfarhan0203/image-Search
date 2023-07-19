// import {GET_ALL_IMAGE,SEARCHED_IMAGE,SEARCH_ITEM,PAGE_NO} from './actionTypes'

import {GET_ALL_IMAGE,SEARCH_ITEM,SEARCHED_IMAGE,PAGE_NO,EMPTY_IMAGES} from './actionTypes'

export const getAllImages =(item)=>{
    return { type:GET_ALL_IMAGE,payload:item}
}

export const searchedImage =(image)=>{
    return { type:SEARCHED_IMAGE,payload:image}
}

export const searchItem =(searchItem)=>{
    return { type:SEARCH_ITEM,payload:searchItem}
}
export const pageNumber =(number)=>{
    return { type:PAGE_NO,payload:number}
}

export const emptyImage =()=>{
    return { type:EMPTY_IMAGES,}
}