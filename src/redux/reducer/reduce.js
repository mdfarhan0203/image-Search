const initialState={
    images:[],
    seachedItem:'',
    pageNo:1  
}

export const reduce=(state=initialState,action)=>{

    switch(action.type){
        case 'GET_ALL_IMAGE':
            return {...state,images:[...state.images,...action.payload]}
       case 'SEARCHED_IMAGE':
            return {...state,images:[...state.images,...action.payload]}
        case 'SEARCH_ITEM':
            return {...state,seachedItem:action.payload }
        case 'PAGE_NO':
            return {...state,pageNo:state.pageNo + action.payload}
        case 'EMPTY_IMAGES':
            return {...state,images:[]}
        default:
            return state;
    }
}

