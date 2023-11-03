#Crons Information

1) SQL DAILY

    This cron recreates the AssetDataDaily table and writes data from AssetData per day to it

2) LATEST COMBINED ASSET

    This cron recreates the LatestCombinedAsset table and writes data from AssetDataDaily
 where dataid = 16 or dataid = 5 or dataid = 20 or dataid = 39

3) ASSET DATA HISTORY TMP

      Writes data to the AssetDataHistoryTmp_A10 and AssetDataHistoryTmp_A16 tables from AssetData and Machine for one day.

     ENV:

        AssetDataHistoryTmp_Axx_limit  - limit values. default: 1000

4) NOTIFICATION TTL

    This cron clears the Console table. The storage time given is indicated via ENV

    ENV:

       notifications_ttl - Data storage time in seconds. default: 2592000. 30 days

5)  NOT A36 DAILY

    This cron recreates table NotA36Daily_tmp

6) METABASE AGGREGATION

    This cron takes data from metabase and writes it to the database

    ENV for start cron:

       CHARTS_ID
       METABASE_SITE_URL
       METABASE_SECRET_KEY

7) C-CRMINCIDENT

    push tickets to serviceNow

8) C-PURGE

    --

9) CLOSED EVENTS

    push info from tickets to serviceNow

10) EXPUNGE MACHINES

    --
