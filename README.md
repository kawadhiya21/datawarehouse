## Data Warehouse
Trying to build a data warehouse for storing data using Redis a a pipeline. Data storage sore would be BigQuery (or any store). The data format must be of the following type.

"""
// must be a JSON !!!!!!
{
  "api_key" : "abcdef", // very basic auth
  "event" : "web_events", // name of event
  "data" : {
    "u_id" : 12, // unique identifier for row, very very important as it is used for merging
  }
}
"""
