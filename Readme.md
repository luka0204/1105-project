## project by Fdevll, luka0204, YaroslavDudin, elektrosila , and jop221

**Посмотреть все ветки**
```
git branch -r 
```
**сохранить изменения в заначку, и переместить голову на последний комитета;**
```
Git stash
``` 
**получить последний комит**
```
Git pull 
```
**Дальше на выбор: 1 натянуть спрятанные изменения на полученную версию , 2 очистить заначку**
```
git stash pop
```
```
git stash clear 
```
## Для объеденения веток
```
git config pull.rebase false
git pull
```