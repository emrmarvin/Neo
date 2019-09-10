import graphene
import Apps.Address.country.schema
import Apps.Address.state_province.schema
import Apps.Address.county.schema
import Apps.Address.city.schema
import Apps.Address.zip_code.schema
import Apps.Address.schema
import Apps.Plants.plant_location.schema
import Apps.Plants.plant_information.schema
import Apps.Plants.plant_functions.schema
import Apps.Plants.plant_contacts.schema
import Apps.Plants.plant_contact_type.schema
import Apps.business_group.schema
import Apps.business_platform.schema
import Apps.business_unit.schema
import Apps.brands.schema
import Apps.products.schema
import Apps.products_item.schema
import Apps.Certificates.schema
import Apps.brand_product_category.schema
import Apps.Plants.plant_brands.schema

class Query(Apps.Address.country.schema.Query,
            Apps.Address.state_province.schema.Query,
            Apps.Address.county.schema.Query,
            Apps.Address.city.schema.Query,
            Apps.Address.zip_code.schema.Query,
            Apps.Address.schema.Query,
            Apps.Plants.plant_contact_type.schema.Query,
            Apps.Plants.plant_location.schema.Query,
            Apps.Plants.plant_information.schema.Query,
            Apps.Plants.plant_contacts.schema.Query,
            Apps.Plants.plant_functions.schema.Query,
            Apps.business_group.schema.Query,
            Apps.business_platform.schema.Query,
            Apps.business_unit.schema.Query,
            Apps.brands.schema.Query,
            Apps.products.schema.Query,
            Apps.products_item.schema.Query,  
            Apps.Certificates.schema.Query,
            Apps.brand_product_category.schema.Query,
            Apps.Plants.plant_brands.schema.Query,           
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
               Apps.Plants.plant_information.schema.Mutations,
               Apps.Plants.plant_location.schema.Mutations,
               Apps.Plants.plant_contacts.schema.Mutations,
               Apps.Plants.plant_functions.schema.Mutations,
               Apps.business_group.schema.Mutations,
               Apps.business_platform.schema.Mutations,
               Apps.business_unit.schema.Mutations,
               Apps.brands.schema.Mutations,
               Apps.products.schema.Mutations,
               Apps.products_item.schema.Mutations,
               Apps.Certificates.schema.Mutations,
               Apps.Plants.plant_brands.schema.Mutations,
               graphene.ObjectType):
  	pass


schema = graphene.Schema(query=Query, mutation=Mutation)