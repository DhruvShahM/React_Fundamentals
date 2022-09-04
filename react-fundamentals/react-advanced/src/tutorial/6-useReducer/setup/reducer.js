export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM'){
    const newItems=[...state.people,action.payload];
    return {...state,people:newItems,isModalOpen:true,modalContent:"Items added successfully"}
  }
  if(action.type==='NO_VALUE'){
    return {...state,showModal:true,modalContent:'Please enter value..'}
  }
  if(action.type==='CLOSE_MODAL'){
    return {...state,isModalOpen:false}
  }
  if(action.type==='REMOVE_ITEM'){
    const newPeople=state.people.filter((person)=>person.id!==action.payload.id);
    return {...state,people:newPeople};
  }
    throw new Error('no matching action type');
};