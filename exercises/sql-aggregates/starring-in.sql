select count("filmId") as "numOfMovies",
       "categories"."name" as "genre"
  from "actors"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where "firstName" = 'Lisa'
    and "lastName" = 'Monroe'
group by "genre"
