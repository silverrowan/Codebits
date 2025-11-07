# [[{{date: MMMM}}]] {{date: DD}}, {{date: YYYY}}
*******
## To Do
 - [ ] 
## Logs
#### Work
[[Logs/Daily/{{date:YYYY}}/{{date: YYYY-MM(MMM)-DD}}-WorkLog]]
#### Personal
[[Logs/Daily/{{date:YYYY}}/{{date: YYYY-MM(MMM)-DD}}-PersonalLog]]
#### Contacts & Networking
```dataview 
TABLE file.outlinks AS ""
FROM "Logs/Daily"
WHERE contains(file.name, "Contact") AND !contains(file.name, "ContactLog") AND (file.day = this.file.day)

```