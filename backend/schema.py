import graphene
import tasks.schema
import country.schema

class Query(country.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

class Mutation(country.schema.Mutations, graphene.ObjectType):
  	pass

# class Mutation(tasks.schema.Mutations, graphene.ObjectType):
#   	pass

schema = graphene.Schema(query=Query, mutation=Mutation)