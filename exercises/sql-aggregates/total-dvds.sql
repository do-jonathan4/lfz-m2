select "storeId",
  count("filmId") as "physicalDVDs"
  from "inventory"
 group by "storeId"
