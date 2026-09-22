# Contributing to TeamPulse
 
## Branch and merge workflow
 
1. Start from an up-to-date main:
   git switch main && git pull
 
2. Create a feature branch:
   git switch -c feature/<short-description>
 
3. Make focused commits on the branch.
   Keep each commit to one logical change.
 
4. Switch back to main and merge:
   git switch main
   git merge feature/<short-description>
 
5. Delete the branch after merging:
   git branch -d feature/<short-description>
 
6. Push to remote:
   git push

## v1.0.1