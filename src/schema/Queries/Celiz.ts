import {  GraphQLBoolean,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString, } from 'graphql';
import { Celiz } from '../../Entities/Celiz';
import { tipoCeliz } from "../typeDefs/tipoCeliz";

export const GET_ALL_CELIZ = {
    type:new GraphQLList(tipoCeliz),
    description:"Trae una lista de la BD  ",
    async resolve(){        
        return await Celiz.find();
    },
};

export const GET_CELIZ = {
    type: tipoCeliz,
    description:"Trae un solo dato con su id ",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    async resolve(_: any, args: any) {
      const result = await Celiz.findOneBy({id:args.id });
      //const result = await Users.findOneBy(id: args.id);
      return result;
    },
  };