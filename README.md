# Estudos de Git e GitHub

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

Configurar nome e e-mail:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

## Visualizar configurações:

git config --list

## Definir o editor padrão:

git config --global core.editor "code --wait"

## Verificar a versão instalada:

git --version

## 3. Criando e clonando repositórios

## Inicializar um repositório local:

git init

## Clonar um repositório existente:

git clone https://github.com/usuario/repositorio.git

## Clonar utilizando SSH:

git clone git@github.com:usuario/repositorio.git

## Verificar o estado atual:

git status

## 4. Commits

## Adicionar um arquivo à área de preparação:

git add arquivo.txt

## Adicionar todos os arquivos alterados:

git add .

## Criar um commit:

git commit -m "Adiciona novo arquivo"

## Adicionar e criar commit em arquivos já monitorados:

git commit -am "Atualiza arquivo"

## Boas mensagens de commit devem:

 - Ser objetivas;
 - Usar verbos no presente;
 - Descrever uma única alteração;
 - Evitar mensagens genéricas como alterações ou correções.

 # Exemplos:

 - Adiciona validação do formulário
 - Corrige erro no login
 - Atualiza documentação do projeto
 - Remove código obsoleto

 ## 5. Histórico e comparação

 ## Visualizar o histórico completo:

 git log

 ## Visualizar o histórico resumido:

 git log --oneline

 ## Visualizar histórico com representação gráfica:

 git log --oneline --graph --decorate --all

 ## Ver detalhes de um commit:

 git show <hash-do-commit>

 ## Comparar alterações ainda não preparadas:

 git diff

 ## Comparar alterações preparadas:

 git diff --staged

 ## Comparar dois commits:

 git diff <commit1> <commit2>

 
