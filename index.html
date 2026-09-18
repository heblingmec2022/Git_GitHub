# Git and GitHub Study Notes

This repository contains studies and practical exercises on version control with **Git** and project collaboration using **GitHub**, covering basic, intermediate, and advanced concepts.

## 1. Fundamental Concepts

### Git

Git is a distributed version control system. It allows you to:

- Track code changes;
- Restore previous versions;
- Work collaboratively;
- Create branches for new features;
- Compare changes;
- Resolve conflicts;
- Maintain an organized project history.

### GitHub

GitHub is a platform based on Git that provides:

- Repository hosting;
- Collaboration tools;
- Pull Requests;
- Issues;
- Code reviews;
- GitHub Actions;
- Releases;
- Project documentation.

### File States

A file can have different states:

1. **Untracked** — the file is not being tracked by Git;
2. **Modified** — the file has been changed;
3. **Staged** — the changes were added to the staging area;
4. **Committed** — the changes were recorded in a commit;
5. **Pushed** — the commit was sent to a remote repository.

## 2. Initial Configuration

Configure your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

View Git configuration:

```bash
git config --list
```

Set Visual Studio Code as the default editor:

```bash
git config --global core.editor "code --wait"
```

Check the installed Git version:

```bash
git --version
```

## 3. Creating and Cloning Repositories

Initialize a local repository:

```bash
git init
```

Clone an existing repository:

```bash
git clone https://github.com/user/repository.git
```

Clone using SSH:

```bash
git clone git@github.com:user/repository.git
```

Check the current repository status:

```bash
git status
```

## 4. Commits

Add a file to the staging area:

```bash
git add file.txt
```

Add all changed files:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Add new file"
```

Stage and commit modified tracked files:

```bash
git commit -am "Update file"
```

Good commit messages should:

- Be clear and concise;
- Use action verbs;
- Describe one specific change;
- Avoid generic messages such as `changes` or `fixes`.

Examples:

```text
Add form validation
Fix login error
Update project documentation
Remove obsolete code
```

## 5. History and Comparison

View the complete history:

```bash
git log
```

View a summarized history:

```bash
git log --oneline
```

View a graphical history:

```bash
git log --oneline --graph --decorate --all
```

View the details of a commit:

```bash
git show <commit-hash>
```

Compare unstaged changes:

```bash
git diff
```

Compare staged changes:

```bash
git diff --staged
```

Compare two commits:

```bash
git diff <commit1> <commit2>
```

## 6. Undoing Changes

Discard uncommitted changes from a file:

```bash
git restore file.txt
```

Remove a file from the staging area while keeping its changes:

```bash
git restore --staged file.txt
```

Create a new commit that reverses another commit:

```bash
git revert <commit-hash>
```

`git revert` is recommended when the commit has already been pushed to a shared repository because it preserves the project history.

## 7. Git Reset

The `git reset` command moves `HEAD` to another commit.

### Soft Reset

Removes the commit but keeps the changes staged:

```bash
git reset --soft HEAD~1
```

### Mixed Reset

Removes the commit and keeps the changes in the working directory:

```bash
git reset --mixed HEAD~1
```

This is also the default mode:

```bash
git reset HEAD~1
```

### Hard Reset

Removes the commit and discards the changes:

```bash
git reset --hard HEAD~1
```

Use `--hard` carefully because it may permanently delete changes.

## 8. Branches

Branches allow you to develop features or fixes without directly modifying the main branch.

List local branches:

```bash
git branch
```

List local and remote branches:

```bash
git branch -a
```

Create a branch:

```bash
git branch new-feature
```

Create and switch to a branch:

```bash
git switch -c new-feature
```

Switch branches:

```bash
git switch branch-name
```

Delete a local branch:

```bash
git branch -d branch-name
```

Force-delete a local branch:

```bash
git branch -D branch-name
```

Rename the current branch:

```bash
git branch -m new-name
```

## 9. Merge

The `merge` command combines the history of one branch with another.

```bash
git switch main
git merge new-feature
```

If conflicts occur:

1. Open the conflicting files;
2. Choose or combine the correct changes;
3. Remove the conflict markers;
4. Stage the corrected files;
5. Create the merge commit.

```bash
git add conflicted-file.txt
git commit -m "Resolve merge conflicts"
```

Cancel an ongoing merge:

```bash
git merge --abort
```

## 10. Rebase

The `rebase` command moves a branch's commits onto a new base.

```bash
git switch my-branch
git rebase main
```

After resolving a conflict:

```bash
git add corrected-file.txt
git rebase --continue
```

Cancel a rebase:

```bash
git rebase --abort
```

Rebase creates a more linear history. However, avoid rebasing commits that other people are already using.

## 11. Remote Repositories

View remote repositories:

```bash
git remote -v
```

Add a remote repository:

```bash
git remote add origin https://github.com/user/repository.git
```

Change a remote URL:

```bash
git remote set-url origin NEW_URL
```

Rename a remote:

```bash
git remote rename origin upstream
```

Remove a remote:

```bash
git remote remove origin
```

## 12. Push, Pull, and Fetch

Push commits to GitHub:

```bash
git push origin main
```

Push a new branch and set its upstream:

```bash
git push -u origin my-branch
```

Download and integrate changes into the current branch:

```bash
git pull
```

Download changes without integrating them:

```bash
git fetch
```

Update remote references and remove deleted branches:

```bash
git fetch --prune
```

The main difference is:

- `fetch` only downloads information;
- `pull` runs `fetch` and then `merge` or `rebase`;
- `push` sends local commits to the remote repository.

## 13. GitHub Collaboration

### Pull Requests

A Pull Request allows you to propose changes for review before they are merged into the main branch.

Typical workflow:

1. Create a branch;
2. Make changes;
3. Create commits;
4. Push the branch to GitHub;
5. Open a Pull Request;
6. Request a review;
7. Apply suggested changes;
8. Merge the Pull Request.

### Issues

Issues can be used to:

- Report problems;
- Create tasks;
- Suggest improvements;
- Organize development;
- Track bugs.

### Forks

A fork creates a copy of a repository under your GitHub account. Forks are commonly used when you do not have direct write access to a project.

### Upstream

In a fork-based workflow, the original repository can be configured as `upstream`:

```bash
git remote add upstream https://github.com/original-owner/project.git
git fetch upstream
git merge upstream/main
```

## 14. Authentication

GitHub does not recommend using a regular password for Git operations over HTTPS. Common alternatives include:

- Personal Access Tokens (PATs);
- SSH keys;
- GitHub CLI;
- Credential managers.

Generate an SSH key:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Test the SSH connection:

```bash
ssh -T git@github.com
```

Never commit the following files or information:

- Passwords;
- Access tokens;
- Private keys;
- `.env` files;
- Certificates;
- Database credentials.

## 15. The `.gitignore` File

The `.gitignore` file defines files that Git should not track.

Example:

```gitignore
# Dependencies
node_modules/

# Environment variables
.env
.env.*

# Logs
*.log

# Operating system files
.DS_Store
Thumbs.db

# Development directories
.vscode/
.idea/
```

View ignored files:

```bash
git status --ignored
```

## 16. Tags and Versions

Create a lightweight tag:

```bash
git tag v1.0.0
```

Create an annotated tag:

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
```

List tags:

```bash
git tag
```

Push a tag:

```bash
git push origin v1.0.0
```

Push all tags:

```bash
git push origin --tags
```

Tags are useful for marking stable versions and releases.

## 17. Stash

The `stash` command temporarily stores changes that are not ready to be committed.

Save changes:

```bash
git stash
```

Save changes, including untracked files:

```bash
git stash -u
```

List stashes:

```bash
git stash list
```

Apply the latest stash:

```bash
git stash apply
```

Apply and remove the latest stash:

```bash
git stash pop
```

Remove a stash:

```bash
git stash drop
```

## 18. Cherry-Pick

The `cherry-pick` command applies a specific commit to another branch:

```bash
git cherry-pick <commit-hash>
```

It is useful for applying an isolated fix without merging an entire branch.

## 19. Reflog

The `reflog` records changes to `HEAD`, including commits that may appear to have been lost after a reset or rebase.

```bash
git reflog
```

Recover a previous state:

```bash
git reset --hard <hash-from-reflog>
```

## 20. Bisect

The `git bisect` command helps identify which commit introduced a problem.

```bash
git bisect start
git bisect bad
git bisect good <known-good-commit>
```

After testing each version:

```bash
git bisect good
```

or:

```bash
git bisect bad
```

Finish the process:

```bash
git bisect reset
```

## 21. Hooks

Hooks are scripts that run automatically during Git events, such as:

- Before a commit;
- After a commit;
- Before a push;
- During a merge.

They can be used to:

- Run tests;
- Validate commit messages;
- Apply formatters;
- Check coding standards;
- Prevent invalid commits.

## 22. GitHub Actions

GitHub Actions can automate tasks such as:

- Running tests;
- Building applications;
- Checking code quality;
- Publishing applications;
- Creating releases;
- Performing continuous deployment.

Workflow files are usually stored in:

```text
.github/workflows/
```

Common pipeline steps include:

1. Check out the code;
2. Set up the environment;
3. Install dependencies;
4. Run linting;
5. Run tests;
6. Build the application;
7. Publish the result.

## 23. Best Practices

- Create small, focused commits;
- Write clear commit messages;
- Create a branch for each task;
- Update your branch before opening a Pull Request;
- Review your own code before pushing;
- Never commit credentials;
- Avoid `git push --force` on shared branches;
- Prefer `git push --force-with-lease` when rewriting history is necessary;
- Keep the README updated;
- Use tags for important versions;
- Run tests before pushing;
- Resolve conflicts carefully;
- Do not use `git reset --hard` without confirming what will be deleted.

## 24. Recommended Workflow

```bash
git clone REPOSITORY_URL
cd project-name

git switch -c my-task

# Make changes to the files

git status
git add .
git commit -m "Implement my task"

git fetch origin
git rebase origin/main

git push -u origin my-task
```

Afterward, open a Pull Request on GitHub for review and integration into the main branch.

## 25. Quick Reference Commands

```bash
git status
git log --oneline --graph --decorate --all
git branch -a
git remote -v
git diff
git diff --staged
git stash
git fetch --prune
git reflog
```

## 26. Suggested Next Steps

- Practice resolving conflicts;
- Study Conventional Commits;
- Learn semantic versioning;
- Create GitHub Actions pipelines;
- Configure branch protection rules;
- Use `CODEOWNERS`;
- Create Issue and Pull Request templates;
- Study GitHub Projects;
- Learn GitHub CLI;
- Configure pre-commit hooks;
- Practice Git Flow and trunk-based development;
- Learn recovery techniques using `reflog`;
- Study security and secret management.

## Conclusion

Git allows you to control the evolution of files and preserve project history. GitHub extends these capabilities by providing collaboration, code review, automation, and repository hosting.

The essential workflow is:

```text
edit → stage → commit → synchronize → review → integrate
```

Consistent practice with Git commands and collaboration workflows is essential for working safely and efficiently on individual and team projects.