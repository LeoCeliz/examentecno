import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt} from 'graphql'

export const tipoVargas =new GraphQLObjectType({
    name: 'tipoVargas',
    description:"Es un Tipo de Vargas",
    fields:() => ({
        id:{type: GraphQLID},
        nitProveedor:{type:GraphQLInt},
        razonsocialProveedor:{type:GraphQLString},
        nroFactura:{type:GraphQLInt},
        nroAutorizacion:{type:GraphQLInt},
        codigoControl:{type:GraphQLInt},
    }),
});