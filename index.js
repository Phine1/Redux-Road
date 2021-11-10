//Initial State
const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash:200
  };

   const stateChanger = (state = initialWagonState, action) => {

     switch (action.type) {
       case 'gather': {
         return {
          ...state,
          supplies: state.supplies + 15,
          distance : state.distance,
          days: state.days+1 
         }
       };

       case 'travel': {
         if(state.supplies-(20*action.payload) < 0) {
            return state
            }
          return {
           ...state,
           supplies: state.supplies-(20*action.payload),
           distance: state.distance+(10*action.payload),
           days: state.days + action.payload
         }
       };

       case 'tippedWagon': {
         return {
           ...state,
           supplies : state.supplies -30,
           distance : state.distance,
           days: state.days +1
         }
       }

        case 'sell': {
          return {
            ...state,
            supplies: state.supplies - 20,
            cash: state.cash + 5
             }
          }
    
          case 'buy': {
            return {
              ...state,
              supplies: state.supplies + 25,
              cash: state.cash - 15
            }
          }
    
          case 'theft': {
            return{
              ...state,
              cash: state.cash / 2
            }
          }
       default: {
         return state
       }
     }
   }
  
  
  // on First Day of Travel
  
   let wagon = stateChanger(undefined, {});
   const firstDay = {
     type : 'travel',
     payload : 1
   }
   wagon = stateChanger(wagon, firstDay)
   console.log(wagon); 
  
  
   // On Second Day of Travel
   const secondDay = {
     type: 'gather'
   }
   wagon = stateChanger(wagon, secondDay)
   console.log(wagon)
  
   // On Third Day of Travel
  const thirdDay = {
    type: 'tippedWagon'
  };
  wagon = stateChanger(wagon, thirdDay);
  console.log(wagon)
  
  //on Fourth Day of Travel
  const fourthDay = {
    type: 'travel',
    payload: 3
  }
  wagon = stateChanger(wagon, fourthDay);
  console.log(wagon);

  // Sell supplies
  const sellSupplies = {
      type: 'sell',
      payload: 2
  }
  wagon = stateChanger(wagon, sellSupplies)
  console.log(wagon);

  //theft case
  const theftCase = {
      type: 'theft',
      payload: 5
  }
  wagon = stateChanger(wagon, theftCase)
  console.log(wagon);
  