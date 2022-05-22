import {  GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString, } from 'graphql';
import { Vargas } from '../../Entities/Vargas';
import { tipoVargas } from "../typeDefs/tipoVargas";

export const GET_ALL_VARGAS = {
    type:new GraphQLList(tipoVargas),
    description:"Trae una lista de la BD  ",
    async resolve(){        
        return await Vargas.find();
    },
};

export const GET_VARGAS = {
    type: tipoVargas,
    description:"Trae un solo dato con su id ",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any) {
      const result = await Vargas.findOneBy({id:args.id });
      //const result = await Users.findOneBy(id: args.id);
      return result;
    },
  };