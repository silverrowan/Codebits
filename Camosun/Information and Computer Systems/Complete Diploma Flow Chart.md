---
tags: <% tp.frontmatter.tags %>
---
## Complete Diploma Flow Chart
```mermaid title:"Information and Computer Systems Technology (Diploma) Flow"
graph LR
    subgraph idT1 [Term 1]
    idwps(CDEV WPS)
    id110(ICS 110)
    id113(ICS 113)
    id114(ICS 114)
    id118(ICS 118)
    id102(LRNS 102)
    id156(MATH 156)
    end
    id110 --> id126
    id110 --> id125
    id114 --> id128
    id114 --> id124
    id118 --> id128
    id113 --> id126
    id156 --> id120
    idwps --> idw1
    subgraph idT2 [Term 2]
    id120(ICS 120)
    id124(ICS 124) --> id125(ICS 125)
    id126(ICS 126)
    id128(ICS 128)
    end
    id120 --> id212
    id120 --> id200
    id120 --> id215
    id124 --> id212
    id124 --> id214
    id124 --> id226
    id124 --> id228
    id124 --> id200
    id124 --> id223
    id125 --> id211
    id125 --> id212
    id125 --> id214
    id125 --> id215
    id125 --> id223
    id126 --> id226
    id126 --> id228
    id126 --> id200
    id128 --> id211
    id128 --> id200
    subgraph idT3 [Term 3]
    ide170(ENGL 170)
    id211(ICS 211)
    id212(ICS 212)
    id214(ICS 214)
    id226(ICS 226) <--> id228(ICS 228)
    end
    ide170(ENGL 170) --> id215
    ide170(ENGL 170) --> ide273
    id211 --> id221
    id211 --> id224
    id212 --> id280
    id214 --> id280
    id226 --> id280
    id228 --> id224
    id228 --> id280
    subgraph idT4 [Term 4]
    id200(ICS 200)
    id215(ICS 215)
    id221(ICS 221)
    id223(ICS 223)
    id224(ICS 224)
    id280(ICS 280)
    id200 --> id280
    id215 --> id280
    id221 --> id280
    id223 --> id280
    id224 --> id280
    end
    id280 --> id290

    subgraph idT5 [Term 5]
    ide273(ENGL 273) <--> id290(ICS 290) <--> idt290(TECN 290)
    end
    ide170 --> ide273
    ide170 --> id215
    subgraph idCoop [Coop/Internship]
    idw1(ICS 104) --> id02
    id02(ICS 204) --> id03
    id03(ICS 304)
    end
```
