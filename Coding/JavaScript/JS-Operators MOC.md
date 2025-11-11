
```dataview 
LIST 
FROM !"Logs"
WHERE !contains(file.name, "MOC") AND ( contains(file.name, "Operator") OR contains(file.name, "operator") OR contains(file.tags, "#operator") )
```