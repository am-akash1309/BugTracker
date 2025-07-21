Certainly! Below is a detailed `README.md` file tailored to your Git training session on **21 July 2025** for interns. It covers Git configuration, cloning, branching, conflict resolution, and pushing changes to GitHub.

---

````markdown
# BugTracker - Git Training Session

### 📅 Date: 21 July 2025  
### 👨‍🏫 Trainer: Akash  
### 🧑‍💻 Audience: Interns  
---

## 📘 Overview

This session covered practical Git operations with real-world usage. Interns learned how to set up Git, clone a repository, work with branches, handle merge conflicts, and collaborate using GitHub. The focus was on understanding the Git workflow in a team environment.

---

## 🔧 Prerequisites

Ensure Git is installed:

```
git --version
# Output: git version 2.50.1.windows.1
````

---

## 🧑‍💻 Git Configuration

Before using Git, configure your user details:

```
git config --global user.name "am-akash1309"
git config --global user.email "sakashmail@gmail.com"
```

---

## 📥 Cloning the Repository

Clone the remote GitHub repository:

```
git clone https://github.com/am-akash1309/BugTracker.git
```

> ⚠️ If the repo is empty, you'll see:
> `warning: You appear to have cloned an empty repository.`

---

## 🏗️ Initializing and Setting Up

Navigate to the cloned project directory:

```
cd BugTracker
```

Add your project files (e.g., `index.html`, `style.css`, `script.js`) and commit:

```
git add .
git commit -m "feat: initial files uploaded"
git push origin main
```

---

## 🛠️ Handling Push Errors

If you see this error:

```
error: failed to push some refs to ...
hint: Updates were rejected because the remote contains work that you do not have locally.
```

Use:

```
git pull
# Resolve conflicts if needed
git add <file>
git commit -m "fix: resolved merge conflict"
git push
```

---

## 🌿 Creating and Managing Branches

### Create and Push `frontend` Branch:

```
git checkout -b frontend
git add .
git commit -m "chore: creating frontend branch for reference"
git push --set-upstream origin frontend
```

### Create and Push `backend` Branch:

```
git checkout main
git checkout -b backend
git add server.js
git commit -m "chore: backend branch for modulation"
git push --set-upstream origin backend
```

---

## 🧹 Merge Conflict Resolution

If you face a conflict after `git pull`, Git will ask you to resolve manually.

Steps:

1. Open the conflicted file (e.g., `index.html`).
2. Edit the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) to keep the correct version.
3. Add and commit the resolved file:

```
git add index.html
git commit -m "fix: sample items"
git push
```

---

## 🏷️ Renaming the Main Branch

To rename `main` to `dev-main`:

```
git branch -m main dev-main
git push origin -u dev-main
```

To delete `main` from remote (optional):

```
git push origin --delete main
```

> ❗ Be cautious while deleting the remote `main` branch if others depend on it.

---
## ✅ Summary of Key Commands

| Command                    | Purpose                              |
| -------------------------- | ------------------------------------ |
| `git config --global`      | Set Git user config                  |
| `git clone`                | Clone remote repository              |
| `git add .`                | Stage all changes                    |
| `git commit -m ""`         | Commit staged changes                |
| `git push origin <branch>` | Push changes to remote               |
| `git checkout -b <branch>` | Create & switch to new branch        |
| `git branch -m <new-name>` | Rename current branch                |
| `git pull`                 | Pull remote changes and merge        |
| `git stash`                | Temporarily save uncommitted changes |

---

## 👏 Wrap-up

This session demonstrated practical Git workflows that are essential in software development. Keep practicing:

* Create new branches for features
* Commit often with meaningful messages
* Use pull requests for collaboration
* Resolve conflicts thoughtfully

Happy Coding! 🚀
