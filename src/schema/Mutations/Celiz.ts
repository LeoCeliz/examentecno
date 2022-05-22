import { GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLScalarType, GraphQLString, graphqlSync, responsePathAsArray } from "graphql";
import {Celiz} from '../../Entities/Celiz'

import {tipoCeliz} from '../typeDefs/tipoCeliz'
import { messageType } from "../typeDefs/message";

//import { resourceLimits } from "worker_threads";

export const CREATE_CELIZ = {
    type: tipoCeliz,
    description:"Crear  en la BD ejemplo .... ",
    args:{
        fecha:{type:GraphQLString},
        conceptoCtaContable:{type:GraphQLString},
        glosa:{type:GraphQLString},
        centroCostos:{type:GraphQLString},
        totalFactura:{type:GraphQLInt},
        importesExentos:{type:GraphQLInt},
        subTotal:{type:GraphQLInt},
        desc:{type:GraphQLInt},
        importeBaseIva:{type:GraphQLInt},
        creditoFiscalIva:{type:GraphQLInt},
        totalsinIva:{type:GraphQLInt},
        totalBs:{type:GraphQLInt},
        tipo:{type:GraphQLString},
        estado:{type:GraphQLBoolean},
        concurrencia:{type:GraphQLInt},
    },
    async resolve(_:any, args: any){
        const{fecha, conceptoCtaContable, glosa,centroCostos,totalFactura,importesExentos,subTotal,desc,importeBaseIva,creditoFiscalIva,totalsinIva,totalBs,tipo,estado,concurrencia}=args;


        const result = await Celiz.insert({
            fecha:fecha,
            conceptoCtaContable:conceptoCtaContable,
            glosa:glosa,
            centroCostos:centroCostos,
            totalFactura:totalFactura,
            importesExentos:importesExentos,
            subTotal:subTotal,
            desc:desc,
            importeBaseIva:importeBaseIva,
            creditoFiscalIva:creditoFiscalIva,
            totalsinIva:totalsinIva,
            totalBs:totalBs,
            tipo:tipo,
            estado:estado,
            concurrencia:concurrencia,
            

           
        })
       // console.log(result)
        return {...args,id: result.identifiers[0].id};
    },
}
export const DELETE_CELIZ={
    type: GraphQLBoolean,
    description:"Elimina un registro de la BD ejemplo .... ",
    args:{
        id:{type:GraphQLID},
    },
    async resolve(_:any, {id}: any){
        const result =await Celiz.delete(id)
        if (result.affected===1) return true;
        return false;
    },
};

export const UPDATE_CELIZ = {
    type: messageType,
    description:"Modifica los datos de un EJEMPLO ",
    args: {
      id: { type: GraphQLID },
      input: {
        type: new GraphQLInputObjectType({
          name: "UserInput1",
          fields: () => ({
        fecha:{type:GraphQLString},
        conceptoCtaContable:{type:GraphQLString},
        glosa:{type:GraphQLString},
        centroCostos:{type:GraphQLString},
        totalFactura:{type:GraphQLInt},
        importesExentos:{type:GraphQLInt},
        subTotal:{type:GraphQLInt},
        desc:{type:GraphQLInt},
        importeBaseIva:{type:GraphQLInt},
        creditoFiscalIva:{type:GraphQLInt},
        totalsinIva:{type:GraphQLInt},
        totalBs:{type:GraphQLInt},
        tipo:{type:GraphQLString},
        estado:{type:GraphQLBoolean},
        concurrencia:{type:GraphQLInt},
          }),
        }),
      },
    },
    async resolve(_: any, { id, input }: any) {
      const userFound = await Celiz.findOneBy({ id });
      if (!userFound) //throw new Error("User not found");
      return {
        success: false,
        message: " no existe",
    }
  
     
  
  
      const response = await Celiz.update({ id }, input);
  
      if (response.affected === 0) return { message: "No se actualizó" };
 
      return {
        success: true,
        message: "Se actualizo correctamente",
      };
    },
  };