# Git学习


$git log 列出所有commit的记录
$git log —all —decorate — online —graph
$git stash 暂时存储变化内容 （$git stash list / $git stash pop /$git apply -index)
$git checkout 清除所有变化（包括文件添加的内容或者删除的内容）
$git clean -f 清除所有添加的文件（主要指untrick的文件）
$git revert <commit id> 这里Git会清除对应commit id的文件变化，同时生成一个新的commit 
$git reset <commit id> 这里Git会把commit id这个commit之后的所有commit全部删除，所以这个操作非常危险，一般不要做。

## branch
$git branch 显示所有分支
$git branch -d 删除branch
$git checkout -b <branch.name> 创建一个新的branch叫做branch.name，并且跳转到新的branch上（新的branch的代码和当前branch的一样，包括changes，所以为了能有清晰的commit tree，生成new branch前应该先commit所有change）。在vscode内，直接点击界面右下角的branch图标，可以自由切换不同branch，也可以创建新的branch
Branch的命名格式：<type>/<ticket-number>/<title> 例如： feat/JR-101/create-header-for-home-page
$git checkout <branch.name>  可以切换到目标branch

## stash（抽屉功能）
$git stash list
$git stash save ‘add file2’ 把track文件的改动暂时存储起来。
$git stash pop 弹出最近抽屉内的代码

## 如何merge branch

我们到master-branch上，然后输入$git merge <target.branch.name>，我们就把<target.branch.name> merge到master-branch上了

### 22/05/2023
Git分为：工作区，缓存区（staged changes），repo。三个区域。
一般通过git status检查工作区内和缓存区内有什么文件。通过git add把文件从工作区放入缓存区，然后通过git commit把文件从缓存区存入repo。这个也可以在vscode内的source control来看。

误删：
- 本身checkout就是还原到最近commit的版本，所以当我们误删了文件x后，我们可以用git checkout — <x>就可以让文件重新还原。
没有add前：
- 我们用git checkout — <file.name> 把撤销工作区某个文件的改动（或者在source control内的changes点击discard change）
没有commit前：
- 我们用git reset head <file.name> 我们可以把文件从缓存区（staged change)放回到工作区(changes)。（或者在source control内的staged changes点击减号（➖））。
已经commit后：

- $git reset HEAD^回退到上个版本，内容回到工作区 (感觉这个好用一点）
- $git reset —soft HEAD~1 回退到上个版本，内容回到staged changes
- $git reset —hard HEAD~1 回退到上个版本，改变的内容清空
- $git reset <commit.ID> 回退到指定版本，改变的内容清空

## 如何在把本地的repo链接到自己的GitHub，然后push？
1. 在Github建一个new repo（最好跟自己本地的文件同名）

### 本地(local)
比入你打算上传一个 本地project：my-project
1. cd my-project
2. git init
3. git add .
4. git commit -m 'first commit'
5. git remote add origin https://github.com/<your GitHub Acount>/my-project
6. git push origin main