
```dataview 
LIST 
FROM !"Logs"
WHERE !contains(file.name, "MOC") AND ( contains(file.name, "Function") OR contains(file.tags, "#function") )
```
