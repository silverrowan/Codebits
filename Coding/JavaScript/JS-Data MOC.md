
```dataview 
LIST 
FROM !"Logs"
WHERE !contains(file.name, "MOC") AND ( contains(file.name, "Data") OR contains(file.name, "data") OR contains(file.tags, "#data") )
```