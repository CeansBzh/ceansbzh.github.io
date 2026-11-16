# Une astuce pour [Windows Terminal](https://github.com/microsoft/terminal)

J'utilise WSL sur Windows avec Windows Terminal. Récemment je me suis mis à Claude Code, et je me retrouvais souvent à découper mes fenêtres comme ceci dans mes projets :

```
  ---------------------------------------------  
  |                     |                     |  
  |                     |     npm run dev     |  
  |        Claude       |                     |  
  |         Code        |                     |  
  |                     |---------------------|  
  |                     |                     |  
  |                     |       Terminal      |  
  |                     |      disponible     |  
  |                     |                     |  
  ---------------------------------------------  
```

Comme tout bon développeur plutôt que de passer 15 secondes à recréer cet arrangement à chaque ouverture de projet j'ai voulu l'automatiser. En créant un profil Windows Terminal avec la bonne commande de démarrage c'est possible; Exemple pour Akipaj :

`wt.exe -w 0 new-tab wsl.exe --cd ~/Perso/akipaj ; split-pane -V wsl.exe --cd ~/Perso/akipaj ; split-pane -H wsl.exe --cd ~/Perso/akipaj`

Les 3 fenêtres s'ouvrent correctement découpées dans le dossier du projet.