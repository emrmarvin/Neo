import graphene
import Apps.Address.country.schema
import Apps.Address.state_province.schema
import Apps.Address.county.schema
import Apps.Address.city.schema
import Apps.Address.zip_code.schema
import Apps.Address.schema

class Query(Apps.Address.country.schema.Query,
            Apps.Address.state_province.schema.Query,
            Apps.Address.county.schema.Query,
            Apps.Address.city.schema.Query,
            Apps.Address.zip_code.schema.Query,
            Apps.Address.schema.Query,
            graphene.ObjectType,
            ):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass


class Mutation(Apps.Address.country.schema.Mutations,
               Apps.Address.state_province.schema.Mutations,
               Apps.Address.county.schema.Mutations,
               Apps.Address.city.schema.Mutations,
               Apps.Address.zip_code.schema.Mutations,
               graphene.ObjectType):
  	pass

# class Mutation(tasks.schema.Mutations, graphene.ObjectType):
#   	pass

schema = graphene.Schema(query=Query, mutation=Mutation)