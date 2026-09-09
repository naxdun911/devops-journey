# Address Book — Project Spec & Build Guide

## 🎯 Goal
Build a **menu-driven address book** in Bash. Every action (search, add, edit/remove, display) is its own **function**. No solving logic below — just the map. You write the code.

Source: [shellscript.sh exercises](https://www.shellscript.sh/exercises.html)

---

## 📋 Source requirements (restated)
- Menu-based program, loops until the user quits.
- **Search** the address book.
- **Add** entries.
- **Remove / edit** entries.
- **Display** a record (or records) — called *from* search, not a standalone menu item.
- Official hints: think about `IFS` for field-splitting; consider space-delimited fields with `_` substitution for spaces in names.

---

## 🔧 Design decisions

| Decision | This project's choice | Why |
|---|---|---|
| Field separator | Colon (`:`) | No escaping needed for names/addresses with spaces — simpler than the space/underscore hint |
| Storage | Flat file, `addressbook.txt` | Matches your roadmap; one record per line |
| Structure | One function per menu action, plus helpers | Required by the spec |
| Field splitting | `IFS=:` on read | Standard idiom for delimited flat files |

You may deviate further — just record *why* in a comment at the top of your script, same as above.

---

## 🗂 Data format

One line = one contact. Example record:

```
Alice Perera:0771234567:alice@example.com:123 Galle Rd, Colombo
```

Suggested fields (adjust as you like, but keep the count consistent):

```
name:phone:email:address
```

⚠️ **Edge case to design around**: what happens if the user types a `:` into a field? Decide now — reject the input, strip it, or escape it — don't leave it for later.

---

## 💡 IFS refresher (new concept, so worth spelling out)

`IFS` (Internal Field Separator) tells Bash where to split words. Default is space/tab/newline. For a colon-delimited file, you temporarily set it to `:` so a `read` splits on colons instead:

```bash
while IFS=: read -r field1 field2 field3; do
    : # loop body — this is just the pattern, not your solution
done < somefile.txt
```

Two things to research yourself before you use this:
- Why `IFS=:` is scoped to just that `read`/loop instead of changed globally.
- What `-r` on `read` does and why it matters here.

---

## 🧭 Menu structure

```
==== Address Book ====
1) Search
2) Add
3) Edit / Remove
4) Display all
5) Quit
Choice:
```

---

## 🧩 Functions to implement

| Function | Responsibility | Notes |
|---|---|---|
| `main_menu` | Print menu, read choice, dispatch, loop | Runs until "Quit" |
| `add_entry` | Prompt for each field, append as one line to the file | Validate empty input? Your call |
| `search_entry` | Take a search term, find matching line(s) | Should handle 0, 1, and multiple matches |
| `display_record` | Format one record for readable output | Called by `search_entry`, not from the menu directly |
| `remove_entry` | Find a record, delete that line only | Don't touch other lines |
| `edit_entry` | Find a record, replace its line with updated fields | Think about how this differs from remove + add |
| `list_all` *(stretch)* | Print every record | Not in the original spec, but useful for testing |

Skeleton to start from — **empty on purpose**:

```bash
#!/bin/bash

ADDRESSBOOK="addressbook.txt"

add_entry() {
    :
}

search_entry() {
    :
}

display_record() {
    :
}

remove_entry() {
    :
}

edit_entry() {
    :
}

main_menu() {
    :
}

main_menu
```

---

## ⚠️ Edge cases to handle

- File doesn't exist yet (first run).
- Search with no matches.
- Search with multiple matches — display all of them.
- Empty field on add (blank name, blank phone).
- Invalid menu choice (user types `9` or `abc`).
- Colon inside a field, as noted above.
- Removing/editing when the file is empty.

---

## 🧪 Test plan

| Scenario | Input | Expected result |
|---|---|---|
| Add first entry | Valid name/phone/email/address | File created, one line written |
| Search existing name | Exact match | Record displayed via `display_record` |
| Search partial name | Substring | All matching records displayed |
| Search no match | Nonexistent name | Clear "not found" message, no crash |
| Remove existing entry | Valid name | Line gone, rest of file untouched |
| Remove nonexistent entry | Invalid name | Graceful message, no file change |
| Edit existing entry | Valid name + new field | Line updated in place, order preserved |
| Invalid menu input | e.g. `9` | Reprompt, no crash |
| Quit | `5` | Loop exits cleanly |

---

## 🚀 Stretch goals (optional, after core works)

- Case-insensitive search.
- Sort `list_all` output by name.
- Backup the file before every edit/remove (`cp addressbook.txt addressbook.txt.bak`).
- Loop the add-entry prompts until valid input instead of failing once.

---

## ✅ Acceptance checklist

- [ ] Menu loops until "Quit" is chosen
- [ ] Every action is its own function, called from `main_menu`
- [ ] `IFS` used correctly for splitting on read
- [ ] Search calls `display_record` to show results (per spec — not inlined)
- [ ] Add appends correctly without corrupting existing lines
- [ ] Remove/edit modifies only the target line
- [ ] All test-plan scenarios above pass
- [ ] Script has a shebang and is executable (`chmod +x`)
