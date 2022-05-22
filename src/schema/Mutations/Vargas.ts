import { GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLScalarType, GraphQLString, graphqlSync, responsePathAsArray } from "graphql";
import {Vargas} from '../../Entities/Vargas'

import {tipoVargas} from '../typeDefs/tipoVargas'
import { messageType } from "../typeDefs/message";

//import { resourceLimits } from "worker_threads";

export const CREATE_VARGAS = {
    type: tipoVargas,
    description:"Crear  en la BD ejemplo .... ",
    args:{
        nitProveedor:{type:GraphQLInt},
        razonsocialProveedor:{type:GraphQLString},
        nroFactura:{type:GraphQLInt},
        nroAutorizacion:{type:GraphQLInt},
        codigoControl:{type:GraphQLInt},
    },
    async resolve(_:any, args: any){
        const{nitProveedor, razonsocialProveedor, nroFactura,nroAutorizacion,codigoControl}=args;


        const result = await Vargas.insert({
            nitProveedor:nitProveedor ,
            razonsocialProveedor:razonsocialProveedor,
            nroFactura:nroFactura,
            nroAutorizacion:nroAutorizacion,
            codigoControl:codigoControl,
        })
       // console.log(result)
        return {...args,id: result.identifiers[0].id};
    },
}
export const DELETE_VARGAS={
    type: GraphQLBoolean,
    description:"Elimina un registro de la BD ejemplo .... ",
    args:{
        id:{type:GraphQLID},
    },
    async resolve(_:any, {id}: any){
        const result =await Vargas.delete(id)
        if (result.affected===1) return true;
        return false;
    },
};

export const UPDATE_VARGAS = {
    type: messageType,
    description:"Modifica los datos de un EJEMPLO ",
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "UserInput2",
          fields: () => ({
        nitProveedor:{type:GraphQLInt},
        razonsocialProveedor:{type:GraphQLString},
        nroFactura:{type:GraphQLInt},
        nroAutorizacion:{type:GraphQLInt},
        codigoControl:{type:GraphQLInt},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const userFound = await Vargas.findOneBy({ id });
      if (!userFound) //throw new Error("User not found");
      return {
        success: false,
        message: " no existe",
    }
  
     
  
  
      const response = await Vargas.update({ id }, input);
  
      if (response.affected === 0) return { message: "No se actualizó" };
 
      return {
        success: true,
        message: "Se actualizo correctamente",
      };
    },
  };