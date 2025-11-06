# Contact Name::
Short Name:: 
## Relation:: 
## Notes
## Contact Attempts
```dataview 
LIST 
FROM "Logs/Daily"
WHERE contains(file.name, "Contact ") AND contains(file.name, this.short-name)

```