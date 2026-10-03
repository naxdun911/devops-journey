# CS50P Fast Pass Plan

**Naxdun (E/21/254 - Manilgama N.C.)**
**Created:** 03 Oct 2026 | **Budget:** 15 to 20 hours | **Target:** 1 to 2 weeks

## Purpose

Learn the Python needed for the hero project (system monitor, Lambda rewrite, FastAPI, pytest in CI). This is not a full CS50P pass. No certificate, no final project. The system monitor is the final project.

## Where to study

- Course: cs50.harvard.edu/python (free, OpenCourseWare)
- Do not use the edX page. The Verified Track there is paid.
- Submit problem sets with `submit50` and keep solutions in a public GitHub repo called `cs50p-solutions`.

## Rules

1. Write the first version yourself. No Copilot, Cursor or ChatGPT during problem sets.
2. If you use AI, use it after the first draft to review and explain, never to write it.
3. CS50's own rules, as far as I know, only allow its built-in duck at cs50.ai.
4. Commit after every problem set. One commit per problem set keeps the weekly commit streak alive.
5. If you can't explain a line, it does not get committed.

## Plan

### Step 1: Syntax review (about 3 hrs)

- [ ] Lecture 0: Functions, Variables (watch at 2x, no problem sets)
- [ ] Lecture 1: Conditionals (watch at 2x, no problem sets)
- [ ] Lecture 2: Loops (watch at 2x, no problem sets)

Exit check: you can write a function with a loop and a conditional without looking anything up.

### Step 2: The DevOps core (about 10 to 12 hrs)

Watch normally and do the problem sets.

- [ ] Lecture 3: Exceptions (try/except, raising errors). Needed for script error handling.
- [ ] Lecture 4: Libraries (imports, `sys.argv`, `random`, `statistics`, PyPI packages). Needed for `argparse`, `requests`, `boto3`.
- [ ] Lecture 5: Unit Tests (`pytest`, testing functions). Needed for CI in Phase 4.
- [ ] Lecture 6: File I/O (read, write, CSV). Needed for logs and config.

Exit check: you can read a file, handle a missing file with an exception, and test the function with `pytest`.

### Step 3: Skim only (about 1 hr)

- [ ] Lecture 7: Regular Expressions (watch the first half, learn more when a project needs it)
- [ ] Lecture 8: Object-Oriented Programming (skim classes and `__init__`)
- [ ] Lecture 9: Et Cetera (skim `set`, `*args`, `**kwargs`, `map`, list comprehensions, generators)

Come back to these only when a project needs them.

## After the fast pass

Learn by building. Add each library when a project needs it.

1. System monitor (Python): CPU and RAM check every 5 minutes, email on threshold, runs as a systemd service. Libraries: `psutil`, `smtplib`, `logging`, `argparse`.
2. Hero project, Phase 2: rewrite `backup.sh` as a Python Lambda. Libraries: `boto3`, `os`, `json`.
3. Hero project, Phase 3: FastAPI companion API (list and restore backups). Libraries: `fastapi`, `pydantic`.
4. Every Python project gets `pytest` tests and runs in GitHub Actions.

## Done when

- [ ] Lectures 0 to 6 finished, problem sets for 3 to 6 committed to `cs50p-solutions`
- [ ] You wrote a small script using `argparse`, file I/O, exception handling and one `pytest` test without AI generating it
- [ ] Python line in the roadmap updated: "CS50P fast pass, no certificate"

## Time budget (50 hrs/week)

| Activity | Hours/week |
|---|---|
| Hero project: backup script and docs | 25 |
| CS50P fast pass | 12 |
| Git gaps, networking, YAML, dotfiles | 8 |
| Writing and review | 5 |

## Progress log

| Date | Done |
|---|---|
| 03 Oct 2026 | Plan created |
