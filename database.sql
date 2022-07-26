-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.21-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for auth
CREATE DATABASE IF NOT EXISTS `auth` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `auth`;

-- Dumping structure for view auth.comments
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `comments` (
	`id` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`created_at` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`updated_at` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumping structure for view auth.employees
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `employees` (
	`id` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`created_at` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`updated_at` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumping structure for view auth.failed_jobs
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `failed_jobs` (
	`id` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`uuid` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`connection` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`queue` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`payload` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`exception` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci',
	`failed_at` VARCHAR(0) NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumping structure for view auth.migrations
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `migrations` (
	`id` TINYINT(4) NULL,
	`migration` VARCHAR(53) NULL COLLATE 'utf8mb4_general_ci',
	`batch` TINYINT(4) NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.password_resets
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `password_resets` (
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`token` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`created_at` TIMESTAMP NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.personal_access_tokens
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `personal_access_tokens` (
	`id` BIGINT(20) UNSIGNED NOT NULL,
	`tokenable_type` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`tokenable_id` BIGINT(20) UNSIGNED NOT NULL,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`token` VARCHAR(64) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`abilities` TEXT NULL COLLATE 'utf8mb4_unicode_ci',
	`last_used_at` TIMESTAMP NULL,
	`created_at` TIMESTAMP NULL,
	`updated_at` TIMESTAMP NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.sqlite_sequence
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `sqlite_sequence` (
	`name` VARCHAR(10) NULL COLLATE 'utf8mb4_general_ci',
	`seq` TINYINT(4) NULL
) ENGINE=MyISAM;

-- Dumping structure for table auth.sys_user
CREATE TABLE IF NOT EXISTS `sys_user` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Internal Id, Automatically Generated',
  `EMAIL_ADDRESS` varchar(100) NOT NULL,
  `ENCRYPTED_USER_PASSWORD` varchar(100) NOT NULL,
  `FULL_NAME` varchar(300) DEFAULT NULL,
  `FIRST_NAME` varchar(100) DEFAULT NULL,
  `MIDDLE_NAME` varchar(100) DEFAULT NULL,
  `LAST_NAME` varchar(100) DEFAULT NULL,
  `PHONE_NUMBER` varchar(100) DEFAULT NULL,
  `ENABLED_FLAG` varchar(1) NOT NULL DEFAULT 'Y',
  `ADMIN_FLAG` varchar(1) NOT NULL DEFAULT 'N',
  `INACTIVE_DATE` date DEFAULT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE KEY `EMAIL_ADDRESS` (`EMAIL_ADDRESS`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table auth.sys_user: ~0 rows (approximately)
/*!40000 ALTER TABLE `sys_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `sys_user` ENABLE KEYS */;

-- Dumping structure for view auth.tab_item
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tab_item` (
	`ITEM_ID` INT(11) NOT NULL,
	`ITEM_CODE` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`ITEM_NAME` VARCHAR(100) NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumping structure for view auth.tab_item_details
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tab_item_details` (
	`ITEM_DETAIL_ID` INT(11) NOT NULL,
	`ITEM_ID` INT(11) NOT NULL,
	`GRADE` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`RATE` DECIMAL(20,5) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_customers
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_customers` (
	`CUSTOMER_ID` INT(11) NOT NULL,
	`CUSTOMER_NAME` VARCHAR(500) NOT NULL COLLATE 'utf8mb4_general_ci',
	`SHORT_NAME` VARCHAR(50) NULL COLLATE 'utf8mb4_general_ci',
	`ADDRESS1` VARCHAR(250) NULL COLLATE 'utf8mb4_general_ci',
	`ADDRESS2` VARCHAR(250) NULL COLLATE 'utf8mb4_general_ci',
	`ADDRESS3` VARCHAR(250) NULL COLLATE 'utf8mb4_general_ci',
	`CITY` VARCHAR(250) NULL COLLATE 'utf8mb4_general_ci',
	`STATE` VARCHAR(250) NULL COLLATE 'utf8mb4_general_ci',
	`PINCODE` VARCHAR(250) NULL COLLATE 'utf8mb4_general_ci',
	`EMAIL` VARCHAR(250) NULL COLLATE 'utf8mb4_general_ci',
	`ACTIVE_FLAG` VARCHAR(1) NULL COLLATE 'utf8mb4_general_ci',
	`DATE` DATE NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_grade
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_grade` (
	`id` INT(5) NOT NULL,
	`item_grade` INT(5) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_item
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_item` (
	`id` INT(11) NOT NULL,
	`item_name` VARCHAR(10) NOT NULL COLLATE 'utf8mb4_general_ci'
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_itemlist
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_itemlist` (
	`id` INT(5) NOT NULL,
	`item_name` VARCHAR(15) NOT NULL COLLATE 'utf8mb4_general_ci',
	`item_grade` INT(5) NOT NULL,
	`qty` INT(5) NOT NULL,
	`price` INT(5) NOT NULL,
	`sales_id` INT(5) NOT NULL,
	`item_id` INT(5) NOT NULL,
	`total_price` INT(11) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_prize
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_prize` (
	`id` INT(11) NOT NULL,
	`item_grade` INT(11) NOT NULL,
	`item_price` INT(11) NOT NULL,
	`qty` INT(11) NOT NULL,
	`item_variety` VARCHAR(15) NOT NULL COLLATE 'utf8mb4_general_ci',
	`item_id` INT(5) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_sales
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_sales` (
	`SALES_ID` INT(11) NOT NULL,
	`SALES_DATE` DATE NULL,
	`SALES_TYPE` VARCHAR(1) NULL COLLATE 'utf8mb4_general_ci',
	`CUSTOMER_NAME` VARCHAR(240) NULL COLLATE 'utf8mb4_general_ci',
	`CUSTOMER_ID` VARCHAR(240) NULL COLLATE 'utf8mb4_general_ci',
	`DISCOUNT` DECIMAL(20,5) NOT NULL,
	`GST` INT(10) NOT NULL,
	`TOTAL` DECIMAL(20,5) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_salesitem
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_salesitem` (
	`id` INT(11) NOT NULL,
	`cust_name` VARCHAR(15) NOT NULL COLLATE 'utf8mb4_general_ci',
	`date` DATE NOT NULL,
	`cards` VARCHAR(10) NOT NULL COLLATE 'utf8mb4_general_ci',
	`total_amount` INT(5) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.tbl_sales_details
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `tbl_sales_details` (
	`SALES_DETAIL_ID` INT(11) NOT NULL,
	`SALES_ID` INT(11) NOT NULL,
	`ITEM_ID` INT(11) NOT NULL,
	`GRADE_ID` INT(11) NOT NULL,
	`RATE` DECIMAL(20,5) NOT NULL,
	`QTY` DECIMAL(20,5) NOT NULL,
	`GST` INT(11) NULL,
	`AMOUNT` DECIMAL(20,5) NOT NULL
) ENGINE=MyISAM;

-- Dumping structure for view auth.users
-- Creating temporary table to overcome VIEW dependency errors
CREATE TABLE `users` (
	`id` BIGINT(20) UNSIGNED NOT NULL,
	`name` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci'
) ENGINE=MyISAM;

-- Dumping structure for view auth.comments
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `comments`;
;

-- Dumping structure for view auth.employees
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `employees`;
;

-- Dumping structure for view auth.failed_jobs
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `failed_jobs`;
;

-- Dumping structure for view auth.migrations
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `migrations`;
;

-- Dumping structure for view auth.password_resets
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `password_resets`;
;

-- Dumping structure for view auth.personal_access_tokens
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `personal_access_tokens`;
;

-- Dumping structure for view auth.sqlite_sequence
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `sqlite_sequence`;
;

-- Dumping structure for view auth.tab_item
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tab_item`;
;

-- Dumping structure for view auth.tab_item_details
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tab_item_details`;
;

-- Dumping structure for view auth.tbl_customers
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_customers`;
;

-- Dumping structure for view auth.tbl_grade
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_grade`;
;

-- Dumping structure for view auth.tbl_item
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_item`;
;

-- Dumping structure for view auth.tbl_itemlist
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_itemlist`;
;

-- Dumping structure for view auth.tbl_prize
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_prize`;
;

-- Dumping structure for view auth.tbl_sales
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_sales`;
;

-- Dumping structure for view auth.tbl_salesitem
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_salesitem`;
;

-- Dumping structure for view auth.tbl_sales_details
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `tbl_sales_details`;
;

-- Dumping structure for view auth.users
-- Removing temporary table and create final VIEW structure
DROP TABLE IF EXISTS `users`;
;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
