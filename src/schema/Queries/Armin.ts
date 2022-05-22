import {  GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString, } from 'graphql';
import { Armin } from '../../Entities/Armin';
import { tipoArmin } from "../typeDefs/tipoArmin";

export const GET_ALL_ARMIN = {
    type:new GraphQLList(tipoArmin),
    description:"Trae una lista de la BD  ",
    async resolve(){        
        return await Armin.find();
    },
};

export const GET_ARMIN = {
    type: tipoArmin,
    description:"Trae un solo dato con su id ",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any) {
      const result = await Armin.findOneBy({id:args.id });
      //const result = await Users.findOneBy(id: args.id);
      return result;
    },
  };