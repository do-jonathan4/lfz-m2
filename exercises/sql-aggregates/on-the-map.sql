select count("cities"."name") as "numOfCities",
       "countries"."name" as "country"
  from "cities"
  join "countries" using ("countryId")
group by "countryId"
