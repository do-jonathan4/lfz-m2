select count("categories"."name") as "numOfMovies",
       "categories"."name" as "genre"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "actorId" = 120
group by "name"
