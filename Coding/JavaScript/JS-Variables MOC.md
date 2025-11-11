
```dataview 
LIST 
FROM !"Logs"
WHERE !contains(file.name, "MOC") AND ( contains(file.name, "Variable") OR contains(file.tags, "#variable") )
```