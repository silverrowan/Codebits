
```dataview 
LIST 
FROM !"Logs"
WHERE !contains(file.name, "MOC") AND ( contains(file.name, "JavaScript") OR contains(file.name, "javascript") OR contains(file.name, "Javascript") OR contains(file.tags, "#JavaScript") )
```


#### Variables
![[JS-Variables MOC | no-title]]
#### Data
![[JS-Data MOC | no-title]]
#### Operators
![[JS-Operators MOC | no-title]]
#### Functions
![[JS-Functions MOC | no-title]]