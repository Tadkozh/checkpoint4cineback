DROP TABLE IF EXISTS `movies`;
DROP TABLE IF EXISTS `authors`;

CREATE TABLE `authors` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(350) NOT NULL,
  `lastname` VARCHAR(350) NOT NULL,
  `photoAutUrl` VARCHAR(350),
  `wikipediatUrl`  VARCHAR(350)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `authors` (`firstname`, `lastname`, `photoAutUrl`, `wikipediatUrl`)
VALUES
  ('Louis','Lumière','https://commons.wikimedia.org/wiki/Category:Louis_Lumi%C3%A8re#/media/File:Louis_Lumiere_with_microscope_and_test_tubes.jpg','https://fr.wikipedia.org/wiki/Louis_Lumi%C3%A8re'),
  ('Georges','Méliès','https://fr.wikipedia.org/wiki/Georges_M%C3%A9li%C3%A8s#/media/Fichier:George_Melies.jpg','https://fr.wikipedia.org/wiki/Georges_M%C3%A9li%C3%A8s'),
  ('Charlie','Chaplin','https://fr.wikipedia.org/wiki/Charlie_Chaplin#/media/Fichier:Charlie_Chaplin_with_doll.jpg','https://fr.wikipedia.org/wiki/Charlie_Chaplin');
  
CREATE TABLE `movies` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(350) NOT NULL,
  `year` INT,
  `duration` VARCHAR(7),
  `country` VARCHAR(350) NOT NULL,
  `genre` VARCHAR(350) NOT NULL,
  `photoMovUrl` VARCHAR(350),
  `movieUrl` VARCHAR(350),
  `authorId` INT NOT NULL,
  FOREIGN KEY (authorId) REFERENCES authors(id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `movies` (`title`, `year`, `duration`, `country`, `genre`, `photoMovUrl`, `movieUrl`, `authorId`)
VALUES
  ('La Sortie de l''usine Lumière à Lyon','1895','45 sec','France','Documentaire','https://fr.wikipedia.org/wiki/La_Sortie_de_l%27usine_Lumi%C3%A8re_%C3%A0_Lyon#/media/Fichier:Sortieusinelumiere.jpg','https://youtu.be/uRQ0JiKEymI','1'),
  ('L''Arrivée d''un train en gare de La Ciotat','1896','50 sec','France','Documentaire','https://commons.wikimedia.org/wiki/Category:L%27Arriv%C3%A9e_d%27un_train_en_gare_de_La_Ciotat#/media/File:Llegada_del_tren_a_la_estaci_n_de_La_Ciotat_C-416912632-large.jpg','https://youtu.be/v6i3uccnZhQ','1'),
  ('Escamotage d''une dame au théâtre Robert-Houdin','1896','120 sec','France','Fantastique','https://fr.wikipedia.org/wiki/Georges_M%C3%A9li%C3%A8s#/media/Fichier:M%C3%A9li%C3%A8s,_Escamotage_d''une_dame_chez_Robert-Houdin_(Star_Film_70,_1896).jpg','https://youtu.be/u3VERvzjeEs','2'),
  ('Le Voyage dans la Lune','1902','14 min','France','Fantastique','https://fr.wikipedia.org/wiki/Le_Voyage_dans_la_Lune#/media/Fichier:Le_Voyage_dans_la_lune.jpg','https://youtu.be/ZNAHcMMOHE8','2'),
  ('A la Conquête du Pôle','1912','33 min','France','Fantastique','https://fr.wikipedia.org/wiki/%C3%80_la_conqu%C3%AAte_du_p%C3%B4le#/media/Fichier:Conquest_of_the_Pole_1912_Melies.jpg','https://youtu.be/yZk3rJnq3m4','2'),
  ('Le Kid','1921','50 min','États-Unis','Comédie','https://fr.wikipedia.org/wiki/Le_Kid#/media/Fichier:Chaplin_The_Kid_3.jpg','https://youtu.be/LQE0c1Zugx8','3');
