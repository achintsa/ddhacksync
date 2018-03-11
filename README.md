# Digital Domain Hackathon Log Analytics Server

This is a  Node.js server which talks with both the
[RethinkDB](https://www.rethinkdb.com/api/javascript/)

Two endpoints are available:

```
GET /logs/cratedb
GET /logs/rethinkdb
```

Two query string arguments are required: `min`, and `max`. Each must be
an ISO-8601 formatted timestamp, and these are the min and max dates
of the log files to fetch from the server. For RethinkDB, the interval is `[min, max)`,
and for CrateDB this is `[min, max]` (the defaults for each database).

For example:

```
GET /logs/cratedb?min=2018-01-01T00:00:00.000Z&max=2018-01-02T23:59:59.999Z
```

To get all logs between the beginning of **January 1st 2018 UTC** and the end of **January 2nd 2018 UTC**.


## Hackathon Servers

Note that on the hackathon servers, `/api` is proxied to port `8080`, so you will have to do,
for example:

```
GET /api/logs/rethinkdb
GET /api/logs/cratedb
```


API also exposed as-
/logs/rethinkdblastxhour
/logs/rethinkdblastxminute
/logs/rethinkdblastxseconds'