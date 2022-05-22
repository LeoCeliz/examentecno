import {GraphQLObjectType, GraphQLString, GraphQLID, GraphQLBoolean, GraphQLInt} from 'graphql'

export const tipoCeliz =new GraphQLObjectType({
    name: 'tipoCeliz',
    description:"Es un Tipo de Celiz",
    fields:() => ({
        id:{type: GraphQLID},
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
});