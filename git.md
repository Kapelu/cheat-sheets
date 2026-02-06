<h1 align="center">cheatsheets git</h1>



#### Inicia git en el directorio actual           
```bash
git init   
```

#### agrega un repositorio remoto
```bash
git remote add origin https://github.com/repo_name.git        
```

#### crea un repositorio git desde la dirección dada (obtené la dirección desde tu servidor git)
```bash
git clone <address> 
```

#### clona un repo git en el directorio indicado y hace checkout de la rama dada
```bash
git clone <address> -b <branch_name> <path/to/directory>
```

#### clona una sola rama
```bash
git clone <address> -b <branch_name> --single-branch  
```
#### agrega (stagea) file.txt a git
```bash
git add <file_name>   
```
#### agrega (stagea) todas las nuevas modificaciones, eliminaciones y creaciones
```bash
git add *             
```
#### quita file.txt del stage
```bash
git reset file.txt    
```

#### descarta todos los cambios no confirmados, resetea los archivos al HEAD
```bash
git reset --hard      
```

#### mueve el puntero HEAD
```bash
git reset --soft <commit_id> 
```

#### mueve el puntero HEAD y copia los archivos del commit actual al área de staging,
```bash
git reset --mixed <commit_id>   # es el comportamiento por defecto cuando no se pasa ningún argumento
```

#### mueve el puntero HEAD y copia los archivos del commit al área de staging y al directorio de trabajo, descartando todos los cambios no confirmados
```bash
git reset -hard <commit_id> 
```















git rm file.txt          # elimina file.txt tanto de git como del sistema de archivos
git rm --cached file.txt # elimina file.txt solo del índice de git
git status               # muestra las modificaciones y los archivos que todavía no están en stage

git branch               # muestra todas las ramas (la rama actual aparece con un asterisco)
git branch -a            # muestra todas las ramas locales y remotas

git branch my-branch               # crea my-branch
git branch -d my-branch            # elimina my-branch
git checkout my-branch             # cambia a my-branch
git merge my-branch                # fusiona my-branch en la rama actual
git push origin --delete my-branch # elimina una rama remota
git branch -m <new-branch-name>    # renombra la rama
git checkout --orphan <branch_name> # crea una rama sin historial de commits
git branch -vv                     # lista todas las ramas, su upstream y el último commit
git branch -a                      # lista todas las ramas locales y remotas

git cherry-pick <commit_id>                   # fusiona el commit especificado
git cherry-pick <commit_id_A>^..<commit_id_B> # toma un rango completo de commits donde A es más viejo que B
# el ^ sirve para incluir también el commit A

git remote                         # muestra los remotos
git remote -v                      # muestra los remotos para pull y push
git remote add my-remote <address> # crea un remoto (obtené la dirección desde tu servidor git)
git remote rm my-remote            # elimina un remoto

git log                            # muestra el historial de commits
# git log usa por defecto el comando less, podés usar:
# f = página siguiente, b = página anterior, buscar = /<query>, n = siguiente coincidencia,
# p = coincidencia anterior, q = salir
git log --no-pager                 # muestra el historial sin usar less
git log --oneline                  # muestra los commits en una sola línea cada uno

git log --oneline --graph --decorate # muestra el historial en una línea con gráfico
git log --since=<time>               # muestra los commits desde un momento dado
git log -- <file_name>
git log -p <file_name>               # muestra los cambios de un archivo a lo largo del tiempo
git log <Branch1> ^<Branch2>         # lista commits que están en branch1 pero no en branch2
git log -n <x>                       # lista los últimos x commits
git log -n <x> --oneline             # lista los últimos x commits en una línea cada uno
git grep --heading --line-number '<string/regex>' # busca líneas que coincidan en archivos trackeados
git log --grep='<string/regex>'      # busca en los mensajes de commit

git reflog       # registra cuándo se actualizaron las referencias (HEAD, ramas, etc.) localmente
git ls-files     # muestra información sobre archivos en el índice y el directorio de trabajo

git commit -m "msg"                       # confirma cambios con un mensaje
git commit -m "title" -m "description"   # commit con título y descripción
git commit --amend                        # combina cambios en stage con el commit anterior
# o edita el mensaje del commit anterior sin cambiar su snapshot
git commit --amend --no-edit              # modifica un commit sin cambiar su mensaje
git commit --amend --author='Author Name <email@address.com>' # cambia el autor del commit
git push my-remote my-branch              # envía los commits al remoto (no envía tags)
git revert <commit-id>                    # deshace un commit creando uno nuevo

git show          # muestra uno o más objetos (blobs, árboles, tags y commits)
git diff          # muestra cambios entre commits, commit y working tree
git diff HEAD     # muestra cambios entre el directorio de trabajo y el último commit
git diff --staged HEAD # muestra cambios entre el stage y el último commit

git diff --color  # muestra diferencias con colores
git diff --staged # muestra cambios preparados para commit

git tag                           # muestra todos los tags
git tag -a v1.0 -m "msg"          # crea un tag anotado
git show v1.0                     # muestra la descripción del tag v1.0
git tag --delete v1.0             # elimina el tag localmente
git push --delete my-remote v1.0  # elimina el tag en el remoto (cuidado de no borrar una rama)
git push my-remote my-branch v1.0 # envía el tag v1.0 al remoto
git fetch --tags                  # trae los tags desde el remoto

git pull my-remote my-branch   # trae y fusiona my-branch desde el remoto
# git pull = git fetch && git merge

git stash                            # guarda cambios stageados y no stageados
git stash -u                         # guarda todo incluyendo archivos no trackeados (excepto .gitignore)
git stash save "msg"                 # guarda el stash con un mensaje
git stash list                       # lista todos los stashes
git stash pop                        # aplica y elimina el último stash
git stash pop stash@{2}              # aplica y elimina el stash {2}
git stash show                       # muestra el contenido del stash
git stash apply                      # aplica el stash sin eliminarlo
git stash branch my-branch stash@{1} # crea una rama a partir de un stash
git stash drop stash@{1}             # elimina el stash {1}
git stash clear                      # elimina todos los stashes

git rebase -i <commit_id> # rebase interactivo desde un commit
git rebase --abort        # cancela un rebase en curso
git rebase --continue     # continúa el rebase luego de resolver conflictos

git clean -f              # elimina archivos no trackeados permanentemente
git clean -f -d            # elimina directorios no trackeados
git clean -f -X            # elimina archivos ignorados
git clean -f -x            # elimina archivos ignorados y no ignorados
git clean -d --dry-run     # muestra qué se eliminaría

git config --global --list                   # lista la configuración global de git
git config --global --edit                   # abre el editor para editar la config global
git config --global alias.<handle> <command> # agrega alias para acelerar el workflow
# ejemplo: si handle es st y command es status, git st ejecuta git status
git config --global core.editor <editor_name> # configura el editor por defecto

git archive <branch_name> --format=zip --output=./<archive_name>.zip # crea un archivo zip desde una rama

.gitignore
# archivo que lista cosas que no querés trackear ni stagear
# normalmente incluye bases de datos locales, media, etc.
# hay buenos recursos online para ignorar archivos específicos
# el archivo .gitignore también se ignora

.git
# directorio oculto que contiene los archivos de git
# se crea al ejecutar "git init"

# Algunas notas útiles:

# Mejores mensajes de commit:
#   clave para depurar de forma efectiva
#   usá mensajes cortos y en modo imperativo (como una orden)
#   el mensaje debería ayudar a entender el cambio rápidamente
#   la primera palabra debería ser una de estas:
#   Add, Create, Refactor, Fix, Release, Document,
#   Modify, Update, Remove, Delete, etc.

# Sobre resetear:
#   usá git revert en repositorios compartidos
#   git revert crea un nuevo commit con los cambios inversos
#   el historial no se modifica

# Diferencia entre ~ y ^ en git:
#   ^ o ^n
#     sin args: == ^1: primer commit padre
#     n: el enésimo commit padre
#
#   ~ o ~n
#     sin args: == ~1: un commit atrás siguiendo el primer padre
#     n: cantidad de commits hacia atrás
#   nota: ^ y ~ se pueden combinar

# Herramientas para aprender git de forma visual:
#   https://git-school.github.io/visualizing-git/
#   https://learngitbranching.js.org/
``