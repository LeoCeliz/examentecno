import { GraphQLSchema, GraphQLObjectType} from 'graphql';
import { SALUDO } from './Queries/Saludo';
import {GET_ALL_ARMIN, GET_ARMIN} from './Queries/Armin'
import {CREATE_ARMIN,DELETE_ARMIN, UPDATE_ARMIN } from './Mutations/Armin';
import {GET_ALL_CELIZ, GET_CELIZ} from './Queries/Celiz'
import {CREATE_CELIZ,DELETE_CELIZ, UPDATE_CELIZ } from './Mutations/Celiz';
import {GET_ALL_VARGAS, GET_VARGAS} from './Queries/Vargas'
import {CREATE_VARGAS,DELETE_VARGAS, UPDATE_VARGAS } from './Mutations/Vargas';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    description:"Consultas sobre las personas ",
    fields: {
        saludo: SALUDO,
        getAllArmin: GET_ALL_ARMIN,
        getArmin: GET_ARMIN,
        getAllCeliz: GET_ALL_CELIZ,
        getCeliz: GET_CELIZ,
        getAllVargas: GET_ALL_VARGAS,
        getVargas: GET_VARGAS,
    },
});

const Mutation = new GraphQLObjectType({
 name :"Mutations",
 fields: {
     createArmin: CREATE_ARMIN,
     deleteArmin: DELETE_ARMIN,
     updateArmin: UPDATE_ARMIN,
     
     createCeliz: CREATE_CELIZ,
     deleteCeliz: DELETE_CELIZ,
     updateCeliz: UPDATE_CELIZ,
    
     createVargas: CREATE_VARGAS,
     deleteVargas: DELETE_VARGAS,
     updateVargas: UPDATE_VARGAS,
 },
 
});


export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});