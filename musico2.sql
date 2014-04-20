-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 16, 2014 at 09:24 PM
-- Server version: 5.5.24-log
-- PHP Version: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tv`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(23) NOT NULL AUTO_INCREMENT,
  `name` varchar(333) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `dashboards`
--

CREATE TABLE IF NOT EXISTS `dashboards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `favourites`
--

CREATE TABLE IF NOT EXISTS `favourites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `fav_1` varchar(233) COLLATE armscii8_bin NOT NULL,
  `fav_2` varchar(233) COLLATE armscii8_bin NOT NULL,
  `fav_3` varchar(233) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE IF NOT EXISTS `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(11) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=6 ;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Action'),
(4, 'Horror'),
(5, 'Comedy');

-- --------------------------------------------------------

--
-- Table structure for table `havo_ratings`
--

CREATE TABLE IF NOT EXISTS `havo_ratings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `base_value` int(11) NOT NULL,
  `sug_rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE IF NOT EXISTS `history` (
  `id` int(111) NOT NULL AUTO_INCREMENT,
  `sale_id` int(111) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE IF NOT EXISTS `images` (
  `id` int(111) NOT NULL AUTO_INCREMENT,
  `product_id` int(111) NOT NULL,
  `user_id` int(111) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `url` varchar(233) COLLATE armscii8_bin NOT NULL,
  `cover` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `productinfos`
--

CREATE TABLE IF NOT EXISTS `productinfos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(111) NOT NULL,
  `director` varchar(233) COLLATE armscii8_bin NOT NULL,
  `cast` varchar(233) COLLATE armscii8_bin NOT NULL,
  `summary` varchar(233) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(222) COLLATE armscii8_bin NOT NULL,
  `user_id` int(111) NOT NULL,
  `category_id` int(111) NOT NULL,
  `productinfo_id` int(1) NOT NULL,
  `duration` varchar(222) COLLATE armscii8_bin NOT NULL,
  `price` int(111) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `genre_id` int(11) NOT NULL,
  `release_date` varchar(233) COLLATE armscii8_bin NOT NULL,
  `activated` tinyint(1) NOT NULL,
  `director` varchar(233) COLLATE armscii8_bin NOT NULL,
  `cast` varchar(233) COLLATE armscii8_bin NOT NULL,
  `summary` varchar(233) COLLATE armscii8_bin NOT NULL,
  `trailer` varchar(233) COLLATE armscii8_bin NOT NULL,
  `featured` tinyint(1) NOT NULL,
  `upcoming` tinyint(1) NOT NULL,
  `rating_id` int(233) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=43 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `user_id`, `category_id`, `productinfo_id`, `duration`, `price`, `created`, `modified`, `genre_id`, `release_date`, `activated`, `director`, `cast`, `summary`, `trailer`, `featured`, `upcoming`, `rating_id`) VALUES
(34, 'Woman with a bow', 0, 0, 0, '', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, '', 0, '', '', '', '', 0, 0, 0),
(35, 'Glass House', 0, 5, 0, '1hr 45m', 0, '2014-04-10 19:21:15', '2014-04-10 19:21:15', 0, '04/25/2014', 0, 'Horace Cunningham', 'Alwayne, Shanoya, Horace', 'The earliest archaeological artifacts in Iran were found in the Kashafrud and Ganj Par sites that are thought to date back to 100,000 years ago in the Middle Paleolithic. Mousterian Stone tools made by Neanderthal man have also been ', '', 0, 0, 0),
(36, 'ff', 0, 5, 0, '1hr 45m', 0, '2014-04-10 19:34:14', '2014-04-10 19:34:14', 0, '04/24/2014', 0, 'fff', 'fff', 'ffff', '', 0, 0, 0),
(37, 'dfgdfgdfgfd', 0, 5, 0, 'gfgdfg', 0, '2014-04-10 19:37:27', '2014-04-10 19:37:27', 0, '04/30/2014', 0, 'dfgdfgdfgd', 'fgdfgdfgdfgf', 'gdfgdfgfdg', '', 0, 0, 0),
(38, 'effdfgffsdfgvd', 0, 1, 0, 'dd', 0, '2014-04-10 20:22:18', '2014-04-10 20:22:18', 0, '04/16/2014', 0, 'dfgdfgdfgd', 'dd', 'dsfsdfsdf', '', 0, 0, 0),
(39, 'csdcd', 0, 0, 0, 'ww', 0, '2014-04-10 20:23:31', '2014-04-10 20:23:31', 4, '04/08/2014', 0, 'www', 'www', 'scascac', '', 0, 0, 0),
(40, 'test', 0, 0, 0, 'fsdfdfsdf', 0, '2014-04-15 17:41:11', '2014-04-15 17:41:11', 1, '04/26/2014', 0, 'dfsdfsdfsdfdsfsd', 'dfsdf', 'ssssfdfsdfs', '', 0, 0, 0),
(41, 'ytr', 0, 0, 0, 'fbfbf', 0, '2014-04-15 17:50:29', '2014-04-15 17:50:29', 4, '04/10/2014', 0, 'bdfbdfb', 'fbfbfb', 'fbsfbfdbdfbfd', '', 1, 1, 0),
(42, 'Beautiful Creatures', 0, 0, 0, '124m', 0, '2014-04-15 18:53:25', '2014-04-15 18:53:25', 4, '02/14/2013', 0, ' 	Richard LaGravenese', '      Alden Ehrenreich     Alice Englert     Jeremy Irons     Viola Davis     Emmy Rossum, Thomas Mann, Emma Thompson', 'Beautiful Creatures is a 2013 American romantic fantasy film based upon the novel of the same name by Kami Garcia and Margaret Stohl.[3] The film was adapted for the screen and directed by Richard LaGravenese and stars Alden Ehrenrei', 'r9rjhB7KWEc', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE IF NOT EXISTS `ratings` (
  `id` int(111) NOT NULL AUTO_INCREMENT,
  `rating_type` varchar(233) COLLATE armscii8_bin NOT NULL,
  `url` varchar(233) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=4 ;

--
-- Dumping data for table `ratings`
--

INSERT INTO `ratings` (`id`, `rating_type`, `url`) VALUES
(1, 'Y', '0'),
(2, 'Y', '0'),
(3, 'Y', 'www.parentstv.org/ptc/parentsguide/images/yrating.gif');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE IF NOT EXISTS `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(111) NOT NULL,
  `user_id` int(111) NOT NULL,
  `created` int(111) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE IF NOT EXISTS `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `position` int(22) NOT NULL,
  `name` varchar(233) COLLATE armscii8_bin NOT NULL,
  `appr_dur` varchar(233) COLLATE armscii8_bin NOT NULL,
  `genre_id` int(11) NOT NULL,
  `rating_id` int(11) NOT NULL,
  `feed_url` varchar(233) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `streams`
--

CREATE TABLE IF NOT EXISTS `streams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stream_name` varchar(233) COLLATE armscii8_bin NOT NULL,
  `stream_url` varchar(2333) COLLATE armscii8_bin NOT NULL,
  `time` date NOT NULL,
  `product_id` int(111) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=7 ;

--
-- Dumping data for table `streams`
--

INSERT INTO `streams` (`id`, `stream_name`, `stream_url`, `time`, `product_id`) VALUES
(5, 'vine first', 'P6xAPQvx6xM', '0000-00-00', 0),
(6, 'vine 2nd', 'CrPrMOSr_Zc', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `lastlogin` datetime NOT NULL,
  `first_name` varchar(233) COLLATE armscii8_bin NOT NULL,
  `last_name` varchar(233) COLLATE armscii8_bin NOT NULL,
  `middle_name` varchar(233) COLLATE armscii8_bin NOT NULL,
  `email` varchar(233) COLLATE armscii8_bin NOT NULL,
  `password` varchar(233) COLLATE armscii8_bin NOT NULL,
  `phone` int(111) NOT NULL,
  `country` varchar(233) COLLATE armscii8_bin NOT NULL,
  `username` varchar(40) COLLATE armscii8_bin NOT NULL,
  `activation_code` varchar(40) COLLATE armscii8_bin NOT NULL,
  `status` tinyint(1) NOT NULL,
  `password_reset` varchar(40) COLLATE armscii8_bin NOT NULL,
  `role` varchar(64) COLLATE armscii8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=armscii8 COLLATE=armscii8_bin AUTO_INCREMENT=534334 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `created`, `modified`, `lastlogin`, `first_name`, `last_name`, `middle_name`, `email`, `password`, `phone`, `country`, `username`, `activation_code`, `status`, `password_reset`, `role`) VALUES
(534319, '2014-04-07 22:12:03', '2014-04-08 04:21:03', '0000-00-00 00:00:00', '', '', '', 'herrhorace@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'herrhorace', '', 1, '', 'king'),
(534320, '2014-04-07 22:19:37', '2014-04-07 22:19:37', '0000-00-00 00:00:00', '', '', '', 'variasoft@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'ander', '', 0, '', 'queen'),
(534321, '2014-04-08 00:29:37', '2014-04-08 00:29:37', '0000-00-00 00:00:00', '', '', '', 'pantrypan@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'monande', '', 0, '', 'king'),
(534322, '2014-04-08 00:57:14', '2014-04-08 00:57:14', '0000-00-00 00:00:00', '', '', '', 'entour@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'conigsb', '', 0, '', ''),
(534323, '2014-04-08 15:47:59', '2014-04-08 15:47:59', '0000-00-00 00:00:00', 'Horace', 'Cunningham', 'Washington', 'try@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'althan', '', 0, '', ''),
(534324, '2014-04-08 16:42:20', '2014-04-08 16:42:20', '0000-00-00 00:00:00', 'Hor', 'ru', 'd', 'rattray@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'herrhorace2', '', 0, '', ''),
(534325, '2014-04-09 02:23:23', '2014-04-09 02:23:23', '0000-00-00 00:00:00', 'Alwayne', 'Lee', 'Andre', 'tryout@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'alwayne', '', 0, '', 'queen'),
(534326, '2014-04-16 16:51:27', '2014-04-16 16:51:27', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva', '', 0, '', 'artiste'),
(534327, '2014-04-16 16:55:44', '2014-04-16 16:55:44', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva3', '', 0, '', 'artiste'),
(534328, '2014-04-16 16:58:42', '2014-04-16 16:58:42', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva32', '', 0, '', 'artiste'),
(534329, '2014-04-16 16:59:45', '2014-04-16 16:59:45', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva325', '', 0, '', 'artiste'),
(534330, '2014-04-16 17:02:08', '2014-04-16 17:02:08', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva3254', '', 0, '', 'artiste'),
(534331, '2014-04-16 17:03:38', '2014-04-16 17:03:38', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva32545', '', 0, '', 'artiste'),
(534332, '2014-04-16 17:04:57', '2014-04-16 17:04:57', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva325453', '', 0, '', 'artiste'),
(534333, '2014-04-16 17:06:25', '2014-04-16 17:06:25', '0000-00-00 00:00:00', 'Hor4324682', 'ffff', 'Washington', 'herrhorace1@gmail.com', '2bf3d8f2886f2299df01f950e54c671c0a0155d8', 0, '', 'reniva3254531', '', 0, '', 'artiste');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
