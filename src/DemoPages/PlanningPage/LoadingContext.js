import React from 'react';

// import { Container } from './styles';


export default React.createContext({
     active:Boolean,
     regenererPlanningMoisProchain:()=>{},
     regenererPlanningMoisEnCours:()=>{},
     genererPlanningMoisProchain:()=>{},
     exportPlanning:()=>{}
});
