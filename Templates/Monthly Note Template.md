{{date: yyyy-MM(MMM)}}-SummaryLog]]
# {{date: MMMM}} [[{{date: YYYY}}]]
**********
## Goals
### Work
### Personal
### Social

## Summary

### Work Log 
#### Learning

#### Projects

#### Events

### Personal Log 

#### Health & Lifestyle

#### Projects

#### Events

### Contacts & Networking 
#### New Contacts

#### Previous (Active) Contacts

#### Previous (Stale) Contacts
## By Date
```dataview 
LIST 
FROM "Logs/Daily" AND  "Logs/Weekly"
WHERE contains(file.date(YYYY-MM), this.date)

```

contains(file.name, "Contact ") AND contains(file.date(YYYY-MM), this.date)




contains(file.name, "Contact ") AND contains(file.name, this.name)