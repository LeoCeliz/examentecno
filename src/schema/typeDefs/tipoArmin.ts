import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt} from 'graphql'

export const tipoArmin =new GraphQLObjectType({
    name: 'tipoArmin',
    description:"Es un Tipo de Armin",
    fields:() => ({
        id:{type: GraphQLID},
        razonsocialProveedor:{type:GraphQLString},
        nroRecibo:{type:GraphQLInt},
        glosa:{type:GraphQLString},
       
    }),
});