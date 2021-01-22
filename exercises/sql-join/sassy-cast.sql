select "a"."firstName",
       "a"."lastName"
  from "castMembers" as "c"
  join "actors" as "a" using ("actorId")
  join "films" as "f" using ("filmId")
 where "title" = 'Jersey Sassy';
