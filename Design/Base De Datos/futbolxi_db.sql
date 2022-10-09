-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-10-2022 a las 23:52:39
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `futbolxi`
--
DROP DATABASE IF EXISTS futbolxi_db;
CREATE DATABASE futbolxi_db;
USE futbolxi_db;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagen`
--
DROP TABLE IF EXISTS `images`;
CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `imagen`
--

INSERT INTO `images` (`id`, `imagen`, `product_id`) VALUES
(1, 'Adidas Nemeziz 19.jpg', 1),
(2, 'Adidas Nemeziz 19.2.jpg', 1),
(3, 'Adidas Nemeziz 19.3.jpg', 1),
(4, 'Botines adidas X Speedflow 4 Versátil.jpg', 2),
(5, 'Botines adidas X Speedflow 4 Versátil.2.jpg', 2),
(6, 'Botines adidas X Speedflow 4 Versátil.3.jpg', 2),
(7, 'Botines Adidas Predator 20.3.jpg', 3),
(8, 'Botines Adidas Predator 20.3.2.jpg', 3),
(9, 'Botines Adidas Predator 20.3.3.jpg', 3),
(10, 'Botines Adidas Predator Edge.4.jpg', 4),
(11, 'Botines Adidas Predator Edge.4.2.jpg', 4),
(12, 'Botines Adidas Predator Edge.4.3.jpg', 4),
(13, 'Botines Nike Phantom GT Elite.jpg', 5),
(14, 'Botines Nike Phantom GT Elite.2.jpg', 5),
(15, 'Botines Nike Phantom GT Elite.3.jpg', 5),
(16, 'Botines Nike Mercurial Superfly 8 Academy KM.jpg', 6),
(17, 'Botines Nike Mercurial Superfly 8 Academy KM.2.jpg', 6),
(18, 'Botines Nike Mercurial Superfly 8 Academy KM.3.jpg', 6),
(19, 'Botines Nike Mercurial Vapor 13 Elite FG.jpg', 7),
(20, 'Botines Nike Mercurial Vapor 13 Elite FG.2.jpg', 7),
(21, 'Botines Nike Mercurial Vapor 13 Elite FG.3.jpg', 7),
(22, 'Botines Nike Tiempo Legend 8 Elite Fg.jpg', 8),
(23, 'Botines Nike Tiempo Legend 8 Elite Fg.2.jpg', 8),
(24, 'Botines Nike Tiempo Legend 8 Elite Fg.3.jpg', 8),
(25, 'Botines Puma Ultra-3.1.jpg', 9),
(26, 'Botines Puma Ultra-3.1.2.jpg', 9),
(27, 'Botines Puma Ultra-3.1.3.jpg', 9),
(28, 'Puma Future Z 4.3.jpg', 10),
(29, 'Puma Future Z 4.3.2.jpg', 10),
(30, 'Puma Future Z 4.3.3.jpg', 10),
(31, 'Botines Puma Ultra 4.2.jpg', 11),
(32, 'Botines Puma Ultra 4.2.2.jpg', 11),
(33, 'Botines Puma Ultra 4.2.3.jpg', 11),
(34, 'Botines Puma King.jpg', 12),
(35, 'default.jpg', 12),
(36, 'default.jpg', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--
DROP TABLE IF EXISTS `marcas`;
CREATE TABLE `marcas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `marcasIMG` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marcas`
--

INSERT INTO `marcas` (`id`, `nombre`, `marcasIMG`) VALUES
(1, 'Adidas', 'logo-adidas-blanco.png'),
(2, 'Nike', 'logo-nike-blanco.jpg'),
(3, 'Puma', 'logo-puma-blanco.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `descripcion` varchar(max) NOT NULL,
  `precio` int(11) NOT NULL,
  `marca_id` int(11) NOT NULL,
  `oferta` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre`, `categoria`, `descripcion`, `precio`, `marca_id`, `oferta`) VALUES
(1, 'Nemezis', 'Firme', 'Justo cuando tus rivales creen tener un plan para vos, hacés algo inesperado. Izquierda, derecha, zig, zag y listo. Redefiní la agilidad con estos botines adidas Nemeziz.1. El exterior en Tension Tape envuelve tu pie para crear la combinación perfecta de libertad y soporte. Diseñada para envolverte en magia en el terreno firme, la suela dividida se flexiona para adaptarse a tu juego radical.', 25000, 1, 0),
(2, 'X Speedflow 4', 'Firme', 'Los Botines adidas X Speedflow 4 Versátil, livianos y frescos, cuentan con una suela flexible multiterreno que puede llevarse a canchas de césped natural seco o terreno duro. Están elaborados en parte con materiales reciclados y un exterior de sintético con cordones para mayor seguridad en tus pisadas.', 38000, 1, 0),
(3, 'Predator 20.3', 'Firme', 'Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.', 38000, 1, 0),
(4, 'Predator Edge.4', 'Firme', 'Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.', 38000, 1, 0),
(5, 'Phantom GT Elite', 'Firme', 'Los botines Nike Phantom GT Elite presentan un diseño basado en datos creados para favorecer tus ataques a la hora de pasar la mitad de cancha. La textura de agarre en la parte superior de Flyknit envuelve el pie con hilos elásticos para brindar un ajuste firme similar al de las medias, mientras que la terminación All Conditions Control (ACC) te brinda un toque confiable en condiciones húmedas y secas. El análisis con atletas en el Nike Sport Research Lab trajo como resultado una textura de agarre más gruesa y densa en el empeine como también en la punta para brindarte un mejor toque en pases, regates y tiros. El sistema Hyperquick combina un chasis mejorado con una placa de arco abierto para brindar una estabilidad ligera y los nuevos tapones crean una tracción dinámica para facilitar los rápidos cambios de dirección. Hechos para césped natural.', 38000, 2, 1),
(6, 'Mercurial Superfly 8 Academy KM', 'Firme', 'Pocos son los futbolistas que se han ganado el derecho de jugar con sus propios botines. Los Botines Nike Mercurial Superfly 8 Acad KM Fg/Mg están diseñados para resaltar a uno de los grandes del Paris Saint-Germain, Kylian Mbappé, y para todos los chicos que sueñan convertirse en un astro como él. Su capellada en microfibra sintética se moldea a sus dedos del pie desde el primer uso dándoles golpes acertados y resiste al agua y al paso del tiempo. El calzado ayuda a ganar velocidad y anotar muchos goles con el respaldo que solo Nike puede dar.', 38000, 2, 0),
(7, 'Mercurial Vapor 13', 'Firme', 'El calzado NIKE Mercurial Vapor 13, que se basa en la innovación de la placa en el antepié, agrega una placa versátil para múltiples superficies que brinda tracción en superficies de césped natural. El forro cómodo envuelve el pie y se siente como una segunda piel. El material sintético suave viene texturizado desde el talón hasta la puntera para darte el toque que necesitas y permitirte expresar tu creatividad a altas velocidades.', 38000, 2, 1),
(8, 'Tiempo Legend 8', 'Firme', 'Los botines Nike Legend 8 fueron pensados para jugadores elegantes y tácticos. Confeccionados en cuero sintético texturizado y con una placa versátil para múltiples superficies que te permiten tener excelente tracción en césped natural. Su diseño y la textura de diamante moldeada y delgada te proporcionan una excelente sensación con la pelota a tus pies.', 38000, 2, 1),
(9, 'Ultra-3.1', 'Firme', 'Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 3.1 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración', 38000, 3, 1),
(10, 'Puma Future Z 4.3', 'Firme', 'Los Botines Puma Future Z 4.3 Fg/Ag están hechos para que los jugadores puedan lucir sus habilidades dentro de la cancha y correr la pelota como un profesional. La capellada diseñada específicamente para ajustarse a la forma de sus pies alcanza niveles impensados de confort para que puedan correr con seguridad. Las zonas con impresiones en la capellada mejoran el control de la pelota y la suela con tapones es perfecta para terrenos firmes', 38000, 3, 0),
(11, 'Ultra 4.2', 'Firme', 'Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 4.2 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración', 38000, 3, 0),
(12, 'King', 'Firme', 'El fútbol es rey en este relanzamiento de las clásicas KING Top para suelo firme. Fieles al diseño original, las KING Tops están elaboradas con materiales de última generación, como las punteras de K-Leather para un control absoluto del balón. La lengüeta plegada hacia fuera con el logotipo PUMA N.º 1 las convierte en unas botas elegantes y listas para el campo de juego.', 38000, 3, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `clave` varchar(200) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `image` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `email`, `clave`, `admin`, `image`) VALUES
(1, 'Mateo', 'Brena', 'matubrena@futbolxi.com', '$2b$10$doUFsQbfMhvtEdpJSBg21uSM2TPLF80wHJdPXFcD4gGL68iV3DlS2', 1, 'default.png'),
(2, 'Jeremías', 'Rombolá', 'jere.rombola@gmail.com', '$2b$10$EYLVcPgh6dr1eabSAmzl4ePkgp0swvZaCEvV60y7jDpcVOOH6EA3e', 1, 'default.png'),
(3, 'Emilse', 'Diaz', 'Emily83_d@hotmail.com', '$2b$10$EYLVcPgh6dr1eabSAmzl4ePkgp0swvZaCEvV60y7jDpcVOOH6EA3a', 1, 'default.png'),
(4, 'Mauricio', 'Duch', 'mauriciolionel.duch@gmail.com', '$2b$10$gXfm90WzDaLmBAEoryRzSu.NOI8vBIHben6pPkX6y5Q5TPYahB8Ae', 1, 'default.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `imagen`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `marcas`
--
ALTER TABLE `marcas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marca_id` (`marca_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `imagen`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `imagen`
--
ALTER TABLE `images`
  ADD CONSTRAINT `imagen_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `imagen_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
