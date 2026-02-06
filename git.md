<h1 align="center">cheatsheets git</h1>



> Inicia git en el directorio actual           
```bash
git init   
```

> agrega un repositorio remoto
```bash
git remote add origin https://github.com/repo_name.git        
```

> crea un repositorio git desde la dirección dada (obtené la dirección desde tu servidor git)
```bash
git clone <address> 
```

> clona un repo git en el directorio indicado y hace checkout de la rama dada
```bash
git clone <address> -b <branch_name> <path/to/directory>
```

> clona una sola rama
```bash
git clone <address> -b <branch_name> --single-branch  
```
> agrega (stagea) file.txt a git
```bash
git add <file_name>   
```
> agrega (stagea) todas las nuevas modificaciones, eliminaciones y creaciones
```bash
git add *             
```
> quita file.txt del stage
```bash
git reset file.txt    
```

> descarta todos los cambios no confirmados, resetea los archivos al HEAD
```bash
git reset --hard      
```

> mueve el puntero HEAD
```bash
git reset --soft <commit_id> 
```

> mueve el puntero HEAD y copia los archivos del commit actual al área de staging,> es el comportamiento por defecto cuando no se pasa ningún argumento
```bash
git reset --mixed <commit_id>   
```

> mueve el puntero HEAD y copia los archivos del commit al área de staging y al directorio de trabajo, descartando todos los cambios no confirmados
```bash
git reset -hard <commit_id> 
```

> elimina file.txt tanto de git como del sistema de archivos
```bash
git rm file.txt          
```

> elimina file.txt solo del índice de git
```bash
git rm --cached file.txt 
```

> muestra las modificaciones y los archivos que todavía no están en stage
```bash
git status               
```

> muestra todas las ramas (la rama actual aparece con un asterisco)
```bash
git branch               
```

> muestra todas las ramas locales y remotas
```bash
git branch -a            

```

> crea my-branch
```bash
git branch my-branch               
```

> elimina my-branch
```bash
git branch -d my-branch            
```

> cambia a my-branch
```bash
git checkout my-branch             
```

> fusiona my-branch en la rama actual
```bash
git merge my-branch                
```

> elimina una rama remota
```bash
git push origin --delete my-branch 
```

> renombra la rama
```bash
git branch -m <new-branch-name>    
```

> crea una rama sin historial de commits
```bash
git checkout --orphan <branch_name> 
```

> lista todas las ramas, su upstream y el último commit
```bash
git branch -vv                     
```

> lista todas las ramas locales y remotas
```bash
git branch -a                      
```

> fusiona el commit especificado
```bash
git cherry-pick <commit_id>                   
```
> toma un rango completo de commits donde A es más viejo que B el ^ sirve para incluir también el commit A
```bash
git cherry-pick <commit_id_A>^..<commit_id_B> 
```

> muestra los remotos
```bash
git remote                         
```

> muestra los remotos para pull y push
```bash
git remote -v                      
```

> crea un remoto (obtené la dirección desde tu servidor git)
```bash
git remote add my-remote <address> 
```

> elimina un remoto
```bash
git remote rm my-remote            
```
> muestra el historial de commits `git log` usa por defecto el comando `less`, podés usar: `f` = página siguiente, `b` = página anterior, `buscar = /<query>, `n` = siguiente coincidencia, `p` = coincidencia anterior, `q` = salir
```bash
git log                            
```

> muestra el historial sin usar less
```bash
git log --no-pager                 
```

> muestra los commits en una sola línea cada uno
```bash
git log --oneline                  

```

> muestra el historial en una línea con gráfico
```bash
git log --oneline --graph --decorate 
```

> muestra los commits desde un momento dado
```bash
git log --since=<time>               
```
```bash
git log -- <file_name>
```

> muestra los cambios de un archivo a lo largo del tiempo
```bash
git log -p <file_name>               
```

> lista commits que están en branch1 pero no en branch2
```bash
git log <Branch1> ^<Branch2>         
```

> lista los últimos x commits
```bash
git log -n <x>                       
```

> lista los últimos x commits en una línea cada uno
```bash
git log -n <x> --oneline             
```

> busca líneas que coincidan en archivos trackeados
```bash
git grep --heading --line-number '<string/regex>' 
```

> busca en los mensajes de commit
```bash
git log --grep='<string/regex>'      

```

> registra cuándo se actualizaron las referencias (HEAD, ramas, etc.) localmente
```bash
git reflog       
```

> muestra información sobre archivos en el índice y el directorio de trabajo
```bash
git ls-files     
```

> confirma cambios con un mensaje
```bash
git commit -m "msg"                       
```

> commit con título y descripción
```bash
git commit -m "title" -m "description"   
```

> combina cambios en stage con el commit anterior o edita el mensaje del commit anterior sin cambiar su snapshot
```bash
git commit --amend                        
```

> modifica un commit sin cambiar su mensaje
```bash
git commit --amend --no-edit              
```

> cambia el autor del commit
```bash
git commit --amend --author='Author Name <email@address.com>' 
```

> envía los commits al remoto (no envía tags)
```bash
git push my-remote my-branch              
```

> deshace un commit creando uno nuevo
```bash
git revert <commit-id>                    
```

> muestra uno o más objetos (blobs, árboles, tags y commits)
```bash
git show          
```

> muestra cambios entre commits, commit y working tree
```bash
git diff          
```

> muestra cambios entre el directorio de trabajo y el último commit
```bash
git diff HEAD     
```

> muestra cambios entre el stage y el último commit
```bash
git diff --staged HEAD 
```

> muestra diferencias con colores
```bash
git diff --color  
```

> muestra cambios preparados para commit
```bash
git diff --staged 
```

> muestra todos los tags
```bash
git tag                           
```

> crea un tag anotado
```bash
git tag -a v1.0 -m "msg"          
```

> muestra la descripción del tag v1.0
```bash
git show v1.0                     
```

> elimina el tag localmente
```bash
git tag --delete v1.0             
```

> elimina el tag en el remoto (cuidado de no borrar una rama)
```bash
git push --delete my-remote v1.0  
```

> envía el tag v1.0 al remoto
```bash
git push my-remote my-branch v1.0 
```

> trae los tags desde el remoto
```bash
git fetch --tags                  
```

> trae y fusiona my-branch desde el remoto git pull = git fetch && git merge
```bash
git pull my-remote my-branch   
```

> guarda cambios stageados y no stageados
```bash
git stash                            
```

> guarda todo incluyendo archivos no trackeados (excepto .gitignore)
```bash
git stash -u                         
```

> guarda el stash con un mensaje
```bash
git stash save "msg"                 
```

> lista todos los stashes
```bash
git stash list                       
```

> aplica y elimina el último stash
```bash
git stash pop                        
```

> aplica y elimina el stash {2}
```bash
git stash pop stash@{2}              
```

> muestra el contenido del stash
```bash
git stash show                       
```

> aplica el stash sin eliminarlo
```bash
git stash apply                      
```

> crea una rama a partir de un stash
```bash
git stash branch my-branch stash@{1} 
```

> elimina el stash {1}
```bash
git stash drop stash@{1}             
```

> elimina todos los stashes
```bash
git stash clear                      
```

> rebase interactivo desde un commit
```bash
git rebase -i <commit_id> 
```

> cancela un rebase en curso
```bash
git rebase --abort        
```

> continúa el rebase luego de resolver conflictos
```bash
git rebase --continue     
```

> elimina archivos no trackeados permanentemente
```bash
git clean -f              
```

> elimina directorios no trackeados
```bash
git clean -f -d            
```

> elimina archivos ignorados
```bash
git clean -f -X            
```

> elimina archivos ignorados y no ignorados
```bash
git clean -f -x            
```

> muestra qué se eliminaría
```bash
git clean -d --dry-run     
```

> lista la configuración global de git
```bash
git config --global --list                   
```

> abre el editor para editar la config global
```bash
git config --global --edit                   
```

> agrega alias para acelerar el workflow. ejemplo: si handle es st y command es status, git st ejecuta git status
```bash
git config --global alias.<handle> <command> 
```

> configura el editor por defecto
```bash
git config --global core.editor <editor_name> 
```

> crea un archivo zip desde una rama
```bash
git archive <branch_name> --format=zip --output=./<archive_name>.zip 
```


```bash
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
```