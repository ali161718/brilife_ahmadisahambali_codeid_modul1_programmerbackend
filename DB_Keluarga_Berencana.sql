-- MySQL dump 10.13  Distrib 5.7.30, for Linux (x86_64)
--
-- Host: localhost    Database: DB_Keluarga_Berencana
-- ------------------------------------------------------
-- Server version	5.7.30-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `LIST_KONTRASEPSI`
--

DROP TABLE IF EXISTS `LIST_KONTRASEPSI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LIST_KONTRASEPSI` (
  `Id_Kontrasepsi` int(11) NOT NULL AUTO_INCREMENT,
  `Nama_Kontrasepsi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id_Kontrasepsi`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LIST_KONTRASEPSI`
--

LOCK TABLES `LIST_KONTRASEPSI` WRITE;
/*!40000 ALTER TABLE `LIST_KONTRASEPSI` DISABLE KEYS */;
INSERT INTO `LIST_KONTRASEPSI` (`Id_Kontrasepsi`, `Nama_Kontrasepsi`) VALUES (1,'Pil'),(2,'Kondom'),(3,'IUD');
/*!40000 ALTER TABLE `LIST_KONTRASEPSI` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LIST_PEMAKAI_KONTRASEPSI`
--

DROP TABLE IF EXISTS `LIST_PEMAKAI_KONTRASEPSI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LIST_PEMAKAI_KONTRASEPSI` (
  `Id_List` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Propinsi` int(11) DEFAULT NULL,
  `Id_Kontrasepsi` int(11) DEFAULT NULL,
  `Jumlah_Pemakai` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id_List`),
  KEY `Id_Propinsi` (`Id_Propinsi`),
  KEY `Id_Kontrasepsi` (`Id_Kontrasepsi`),
  CONSTRAINT `LIST_PEMAKAI_KONTRASEPSI_ibfk_1` FOREIGN KEY (`Id_Propinsi`) REFERENCES `LIST_PROPINSI` (`Id_Propinsi`),
  CONSTRAINT `LIST_PEMAKAI_KONTRASEPSI_ibfk_2` FOREIGN KEY (`Id_Kontrasepsi`) REFERENCES `LIST_KONTRASEPSI` (`Id_Kontrasepsi`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LIST_PEMAKAI_KONTRASEPSI`
--

LOCK TABLES `LIST_PEMAKAI_KONTRASEPSI` WRITE;
/*!40000 ALTER TABLE `LIST_PEMAKAI_KONTRASEPSI` DISABLE KEYS */;
INSERT INTO `LIST_PEMAKAI_KONTRASEPSI` (`Id_List`, `Id_Propinsi`, `Id_Kontrasepsi`, `Jumlah_Pemakai`) VALUES (1,1,1,50),(2,1,2,66),(3,1,3,25),(4,2,1,100),(5,2,2,75),(6,2,3,50),(7,1,2,40),(8,2,2,65),(9,3,1,90);
/*!40000 ALTER TABLE `LIST_PEMAKAI_KONTRASEPSI` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LIST_PROPINSI`
--

DROP TABLE IF EXISTS `LIST_PROPINSI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LIST_PROPINSI` (
  `Id_Propinsi` int(11) NOT NULL AUTO_INCREMENT,
  `Nama_Propinsi` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id_Propinsi`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LIST_PROPINSI`
--

LOCK TABLES `LIST_PROPINSI` WRITE;
/*!40000 ALTER TABLE `LIST_PROPINSI` DISABLE KEYS */;
INSERT INTO `LIST_PROPINSI` (`Id_Propinsi`, `Nama_Propinsi`) VALUES (1,'Aceh'),(2,'Sumatera Utara'),(3,'Sumatera Barat'),(4,'Riau'),(5,'Kepulauan Riau'),(6,'Jambi'),(7,'Bangka Belitung'),(8,'Sumatera Selatan'),(9,'Lampung');
/*!40000 ALTER TABLE `LIST_PROPINSI` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-04  7:29:22
