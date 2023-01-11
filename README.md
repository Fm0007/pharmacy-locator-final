### Téléchargement des dépendence

Creer une base de donnée avec le nom pharmacie:
et telecharger les dependences:

``` mvn install ```

### Lancement du projet :

Lancer le projet Par : 
``` mvn spring-boot:run ```

et vérifier la création de la base de données

Puis ajouter à l'aide des commandes MySql :

``` INSERT INTO pharmacie.roles (id, name) VALUES (2, 'ROLE_ADMIN'); ```

``` INSERT INTO pharmacie.users (id, email, name, password, pharmacie_id) VALUES (1, 'admin@pharmacy-locator.ma', 'Admin', '$2a$10$6I1o0w118w/hOOux4cTdUOeiFWX31dbhMCVEYftZ.HFp4vYVHhHyK', null);
 ```
 
``` INSERT INTO pharmacie.ville (id, nom) VALUES (1, 'Ville à définir'); ```

``` INSERT INTO pharmacie.zone (id, nom, ville_id) VALUES (1, 'Zone à définir', 1); ```


Lien utile :

Pour s'authentifier : localhost:8090/login
email admin : admin@pharmacy-locator.ma
pass admin : y48qKchmFTtkp6H
pour Swagger : localhost:8090/swagger-ui/index.html




