import { GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLScalarType, GraphQLString, graphqlSync, responsePathAsArray } from "graphql";
import {Armin} from '../../Entities/Armin'

import {tipoArmin} from '../typeDefs/tipoArmin'
import { messageType } from "../typeDefs/message";

//import { resourceLimits } from "worker_threads";

export const CREATE_ARMIN = {
    type: tipoArmin,
    description:"Crear  en la BD ejemplo .... ",
    args:{
        razonsocialProveedor:{type:GraphQLString},
        nroRecibo:{type:GraphQLInt},
        glosa:{type:GraphQLString},
    },
    async resolve(_:any, args: any){
        const{razonsocialProveedor, nroRecibo, glosa}=args;


        const result = await Armin.insert({
            razonsocialProveedor:razonsocialProveedor,
            nroRecibo:nroRecibo,
            glosa:glosa,
           
        })
       // console.log(result)
        return {...args,id: result.identifiers[0].id};
    },
}
export const DELETE_ARMIN={
    type: GraphQLBoolean,
    description:"Elimina un registro de la BD ejemplo .... ",
    args:{
        id:{type:GraphQLID},
    },
    async resolve(_:any, {id}: any){
        const result =await Armin.delete(id)
        if (result.affected===1) return true;
        return false;
    },
};

export const UPDATE_ARMIN = {
    type: messageType,
    description:"Modifica los datos de un EJEMPLO ",
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "UserInput",
          fields: () => ({
            razonsocialProveedor:{type:GraphQLString},
            nroRecibo:{type:GraphQLInt},
            glosa:{type:GraphQLString},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const userFound = await Armin.findOneBy({ id });
      if (!userFound) //throw new Error("User not found");
      return {
        success: false,
        message: " no existe",
    }
  
     
  
  
      const response = await Armin.update({ id }, input);
  
      if (response.affected === 0) return { message: "No se actualizó" };
 
      return {
        success: true,
        message: "Se actualizo correctamente",
      };
    },
  };