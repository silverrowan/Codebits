---
tags: undefined
TQ_explain: false
TQ_short_mode: false
TQ_show_urgency: false
---
# Needs fixing

## missed by sorter, but has emojis
```tasks
# These instructions need to be all on one line:
(description includes 🔺) OR (description includes ⏫) OR (description includes 🔼) OR (description includes 🔽) OR (description includes ⏬) OR (description includes 🛫) OR (description includes ➕) OR (description includes ⏳) OR (description includes 📅) OR (description includes ✅) OR (description includes ❌) OR (description includes 🔁) OR (description includes 🏁) OR (description includes ⛔) OR (description includes 🆔)

# Optionally, uncomment this line and exclude your templates location
# path does not include _templates

group by path
```
## invalid dates
```tasks
# These instructions need to be all on one line:
(cancelled date is invalid) OR (created date is invalid) OR (done date is invalid) OR (due date is invalid) OR (scheduled date is invalid) OR (start date is invalid)

# Optionally, uncomment this line and exclude your templates location
# path does not include _templates

group by path
```
## invalid recurrence
```tasks
is not recurring
filter by function task.originalMarkdown.includes('🔁')
```
# GUI Lists
- ! still need to figure out how to make this actually work
short mode: `INPUT[toggle:TQ_short_mode]`
tree: `INPUT[toggle:TQ_show_tree]`
tags: `INPUT[toggle:TQ_show_tags]`
id: `INPUT[toggle:TQ_show_id]` depends on: `INPUT[toggle:TQ_show_depends_on]`
priority: `INPUT[toggle:TQ_show_priority]`
recurrence rule: `INPUT[toggle:TQ_show_recurrence_rule]` on completion: `INPUT[toggle:TQ_show_on_completion]`
start date: `INPUT[toggle:TQ_show_start_date]` scheduled date: `INPUT[toggle:TQ_show_scheduled_date]` due date: `INPUT[toggle:TQ_show_due_date]`
created date: `INPUT[toggle:TQ_show_created_date]` cancelled date: `INPUT[toggle:TQ_show_cancelled_date]` done date: `INPUT[toggle:TQ_show_done_date]`
urgency: `INPUT[toggle:TQ_show_urgency]`
backlink: `INPUT[toggle:TQ_show_backlink]`
edit button: `INPUT[toggle:TQ_show_edit_button]` postpone button: `INPUT[toggle:TQ_show_postpone_button]`
task count: `INPUT[toggle:TQ_show_task_count]`
extra instructions: `INPUT[textArea:TQ_extra_instructions]`
explain: `INPUT[toggle:TQ_explain]`

# EVERYTHING Lists
## to buy

## "not done"
```tasks
not done
```

