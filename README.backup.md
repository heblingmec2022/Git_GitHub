# _Estudos de Git e GitHub_

Este repositório reúne estudos e práticas sobre controle de versão com **Git** e colaboração de projetos utilizando o **GitHub**, abrangendo conceitos básicos, intermediários e avançados.

## 1. Conceitos fundamentais

### Git

Git é um sistema de controle de versão distribuído. Ele permite:

- Registrar alterações no código;
- Recuperar versões anteriores;
- Trabalhar em equipe;
- Criar ramificações para novas funcionalidades;
- Comparar mudanças;
- Resolver conflitos;
- Manter um histórico organizado do projeto.

### GitHub

GitHub é uma plataforma baseada em Git que oferece:

- Hospedagem de repositórios;
- Colaboração entre desenvolvedores;
- Pull Requests;
- Issues;
- Code Review;
- Actions para automação;
- Releases;
- Documentação de projetos.

### Estados dos arquivos

Um arquivo pode estar em diferentes estados:

1. **Untracked** — arquivo ainda não monitorado pelo Git;
2. **Modified** — arquivo alterado;
3. **Staged** — alteração adicionada à área de preparação;
4. **Committed** — alteração registrada em um commit;
5. **Pushed** — commit enviado para um repositório remoto.

## 2. Configuração inicial

### Configurar nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Visualizar configurações:
```bash
git config --list
```
### Definir o editor padrão:
```bash
git config --global core.editor "code --wait"
```
### Verificar a versão instalada:
```bash
git --version
```
## 3. Criando e clonando repositórios

### Inicializar um repositório local:
```bash
git init
```
### Clonar um repositório existente:
```bash
git clone https://github.com/usuario/repositorio.git
```
### Clonar utilizando SSH:
```bash
git clone git@github.com:usuario/repositorio.git
```
### Verificar o estado atual:
```bash
git status
```
## 4. Commits

### Adicionar um arquivo à área de preparação:
```bash
git add arquivo.txt
```
### Adicionar todos os arquivos alterados:
```bash
git add .
```
### Criar um commit:
```bash
git commit -m "Adiciona novo arquivo"
```
### Adicionar e criar commit em arquivos já monitorados:
```bash
git commit -am "Atualiza arquivo"
```
### Boas mensagens de commit devem:

 - Ser objetivas;
 - Usar verbos no presente;
 - Descrever uma única alteração;
 - Evitar mensagens genéricas como alterações ou correções.

 ### Exemplos:

 - Adiciona validação do formulário
 - Corrige erro no login
 - Atualiza documentação do projeto
 - Remove código obsoleto

 ## 5. Histórico e comparação

 ### Visualizar o histórico completo:
```bash
 git log
```
 ### Visualizar o histórico resumido:
```bash
 git log --oneline
```
 ### Visualizar histórico com representação gráfica:
```bash
 git log --oneline --graph --decorate --all
```
 ### Ver detalhes de um commit:
```bash
 git show <hash-do-commit>
```
 ### Comparar alterações ainda não preparadas:
```bash
 git diff
```
 ### Comparar alterações preparadas:
```bash
 git diff --staged
```
 ### Comparar dois commits:
```bash
 git diff <commit1> <commit2>
```
 ## 6. Desfazendo alterações
```bash
 git restore arquivo.txt
```
 ### Remover um arquivo da área de preparação, mantendo suas alterações:
```bash
 git restore --staged arquivo.txt
```
 ### Criar um novo commit que desfaz outro:
```bash
 git revert <hash-do-commit>
```

O git revert é recomendado quando o commit já foi enviado para um repositório compartilhado, pois preserva o histórico.

## 7. Git reset
```bash
O git reset move o HEAD para outro commit.
```
### Soft
```bash
Remove o commit, mas mantém as alterações preparadas:

git reset --soft HEAD~1
```
### Mixed
```bash
Remove o commit e mantém as alterações nos arquivos, mas fora da área de preparação:

git reset --mixed HEAD~1
```
```bash
Também pode ser usado simplesmente como:

git reset HEAD~1
```
### Hard

Remove o commit e descarta as alterações:
```bash
git reset --hard HEAD~1
```
O modo --hard deve ser usado com cuidado, pois pode apagar alterações permanentemente.

## 8. Branches

Branches permitem desenvolver funcionalidades ou correções sem modificar diretamente a branch principal.

### Listar branches locais:
```bash
git branch
```
### Listar branches locais e remotas:
```bash
git branch -a
```
### Criar uma branch:
```bash
git branch nova-funcionalidade
```
### Criar e acessar uma branch:
```bash
git switch -c nova-funcionalidade
```
### Trocar de branch:
```bash
git switch nome-da-branch
```
### Excluir uma branch local:
```bash
git branch -d nome-da-branch
```
### Forçar a exclusão:
```bash
git branch -D nome-da-branch
```
### Renomear a branch atual:
```bash
git branch -m novo-nome
```
## 9. Merge

O merge combina o histórico de uma branch com outra.
```bash
git switch main
git merge nova-funcionalidade
```
### Se houver conflitos, é necessário:

- Abrir os arquivos conflitantes;
- Escolher ou combinar as alterações;
- Remover os marcadores de conflito;
- Adicionar os arquivos corrigidos;
- Criar o commit do merge

```bash
git add arquivo-com-conflito.txt
git commit -m "Resolve conflitos de merge"
```
### Cancelar um merge em andamento:
```bash
git merge --abort
```
## 10. Rebase

O rebase reposiciona os commits de uma branch sobre outra base.
```bash
git switch minha-branch
git rebase main
```
### Durante um conflito:
```bash
git add arquivo-corrigido.txt
git rebase --continue
```
### Cancelar o rebase:
```bash
git rebase --abort
```
O rebase mantém um histórico mais linear, mas não deve ser usado para reescrever commits que outras pessoas já utilizam.

## 11. Repositórios remotos

### Visualizar os repositórios remotos:
```bash
git remote -v
```
### Adicionar um repositório remoto:
```bash
git remote add origin https://github.com/usuario/repositorio.git
```
### Alterar a URL de um remoto:
```bash
git remote set-url origin nova-url
```
### Renomear um remoto:
```bash
git remote rename origin upstream
```
### Remover um remoto:
```bash
git remote remove origin
```
## 12. Push, pull e fetch

### Enviar commits para o GitHub:
```bash
git push origin main
```
### Enviar uma nova branch e configurar o rastreamento:
```bash
git push -u origin minha-branch
```
### Baixar alterações e integrá-las à branch atual:
```bash
git pull
```
### Baixar alterações sem integrá-las:
```bash
git fetch
```
### Atualizar referências remotas e remover referências excluídas:
```bash
git fetch --prune
```
### A diferença principal é:

 - fetch apenas baixa as informações;
 - pull executa fetch e depois merge ou rebase;
 - push envia commits locais para o remoto.

## 13. GitHub e colaboração

### Pull Request

Um Pull Request permite propor alterações para revisão antes de incorporá-las à branch principal.

### Fluxo comum:

 - Criar uma branch;
 - Fazer alterações;
 - Criar commits;
 - Enviar a branch para o GitHub;
 - Abrir um Pull Request;
 - Solicitar revisão;
 - Corrigir sugestões;
 - Fazer o merge.

### Issues

### Issues são utilizadas para:

 - Relatar problemas;
 - Criar tarefas;
 - Propor melhorias;
 - Organizar o desenvolvimento;
 - Acompanhar bugs.

### Fork

Um fork cria uma cópia de um repositório na conta do usuário. É comum em projetos nos quais não se possui permissão direta de escrita.

### Upstream

Em projetos derivados de um fork, o repositório original pode ser configurado como upstream:
```bash
git remote add upstream https://github.com/original/projeto.git
git fetch upstream
git merge upstream/main
```
## 14. Autenticação

O GitHub não recomenda o uso de senha comum para operações Git via HTTPS. As principais alternativas são:

 - Personal Access Token (PAT);
 - Chaves SSH;
 - GitHub CLI;
 - Gerenciadores de credenciais.

### Gerar uma chave SSH:
```bash
ssh-keygen -t ed25519 -C "seu@email.com"
```
### Testar a conexão:
```bash
ssh -T git@github.com
```
### Nunca devem ser versionados:

 - Senhas;
 - Tokens;
 - Chaves privadas;
 - Arquivos .env;
 - Certificados;
 - Credenciais de banco de dados.

## 15. Arquivo .gitignore

O **.gitignore** define arquivos que não devem ser rastreados.

### Exemplo:

### Dependências
```bash
node_modules/
```
### Variáveis de ambiente
```bash
.env
.env.*
```
### Logs
```bash
*.log
```
### Arquivos de sistema
```bash
.DS_Store
Thumbs.db
```
### Diretórios de desenvolvimento
```bash
.vscode/
.idea/
```
### Verificar arquivos ignorados:
```bash
git status --ignored
```
## 16. Tags e versões

### Criar uma tag simples:
```bash
git tag v1.0.0
```
### Criar uma tag anotada:
```bash
git tag -a v1.0.0 -m "Versão 1.0.0"
```
### Listar tags:
```bash
git tag
```
### Enviar uma tag:
```bash
git push origin v1.0.0
```
### Enviar todas as tags:
```bash
git push origin --tags
```
As tags são úteis para marcar versões estáveis e releases.

## 17. Stash

O stash guarda temporariamente alterações que ainda não devem ser commitadas.

### Guardar alterações:
```bash
git stash
```
### Guardar incluindo arquivos não monitorados:
```bash
git stash -u
```
### Listar stashes:
```bash
git stash list
```
### Aplicar o último stash:
```bash
git stash apply
```
### Aplicar e remover o stash:
```bash
git stash pop
```
### Remover um stash:
```bash
git stash drop
```
## 18. Cherry-pick

O cherry-pick aplica um commit específico em outra branch:
```bash
git cherry-pick <hash-do-commit>
```
É útil para transportar uma correção isolada sem fazer o merge de toda a branch.

## 19. Reflog

O reflog registra movimentações do HEAD, incluindo commits que aparentemente foram perdidos após um reset ou rebase.
```bash
git reflog
```
### Para recuperar um estado anterior:
```bash
git reset --hard <hash-encontrado-no-reflog>
```
## 20. Bisect

O git bisect ajuda a encontrar qual commit introduziu um problema.
```bash
git bisect start
git bisect bad
git bisect good <commit-conhecidamente-correto>
```
### Após testar cada versão:
```bash
git bisect good
```
### ou:
```bash
git bisect bad
```
### Finalizar:
```bash
git bisect reset
```
## 21. Hooks

Hooks são scripts executados automaticamente em eventos do Git, como:

 - Antes de um commit;
 - Após um commit;
 - Antes de um push;
 - Durante a aplicação de um merge.

### Podem ser usados para:

 - Executar testes;
 - Validar mensagens de commit;
 - Aplicar formatadores;
 - Verificar padrões de código;
 - Impedir commits inválidos.

## 22. GitHub Actions

### GitHub Actions permite automatizar tarefas como:

 - Executar testes;
 - Fazer build da aplicação;
 - Verificar qualidade do código;
 - Publicar aplicações;
 - Criar releases;
 - Fazer deploy contínuo.

### Os fluxos geralmente ficam em:
```bash
.github/workflows/
```
### Exemplo de etapas comuns em uma pipeline:

 - Baixar o código;
 - Configurar o ambiente;
 - Instalar dependências;
 - Executar lint;
 - Executar testes;
 - Gerar build;
 - Publicar o resultado.

## 23. Boas práticas

 - Fazer commits pequenos e objetivos;
 - Usar mensagens de commit claras;
 - Criar uma branch para cada tarefa;
 - Atualizar a branch antes de abrir um Pull Request;
 - Revisar o próprio código antes de enviá-lo;
 - Não versionar credenciais;
 - Evitar git push --force em branches compartilhadas;
 - Preferir git push --force-with-lease quando a reescrita for necessária;
 - Manter o README atualizado;
 - Usar tags para versões importantes;
 - Executar testes antes do push;
 - Resolver conflitos cuidadosamente;
 - Não utilizar git reset --hard sem confirmar o que será removido.

## 24. Fluxo de trabalho recomendado
```bash
git clone URL_DO_REPOSITORIO
cd nome-do-projeto
git switch -c minha-tarefa
```
### Fazer alterações nos arquivos
```bash
git status
git add .
git commit -m "Implementa minha tarefa"
git fetch origin
git rebase origin/main
git push -u origin minha-tarefa
```
Depois, deve-se abrir um Pull Request no GitHub para revisão e integração com a branch principal.

## 25. Comandos de consulta rápida
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
## 26. Sugestões para continuar os estudos

 - Praticar resolução de conflitos;
 - Estudar Conventional Commits;
 - Aprender versionamento semântico;
 - Criar pipelines com GitHub Actions;
 - Configurar proteção da branch principal;
 - Utilizar CODEOWNERS;
 - Criar templates para Issues e Pull Requests;
 - Estudar GitHub Projects;
 - Aprender GitHub CLI;
 - Configurar pre-commit hooks;
 - Praticar estratégias Git Flow e trunk-based development;
 - Aprender técnicas de recuperação usando reflog;
 - Estudar segurança e gerenciamento de segredos.

## Conclusão

**Git** permite controlar a evolução dos arquivos e preservar o histórico do projeto. **GitHub** amplia essas funcionalidades ao oferecer colaboração, revisão de código, automação e hospedagem.

O domínio dessas ferramentas envolve compreender o ciclo:

 - alterar → adicionar → commitar → sincronizar → revisar → integrar

#### A prática constante dos comandos e dos fluxos de colaboração é essencial para trabalhar com segurança e eficiência em projetos individuais ou em equipe.