-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-11-2022 a las 01:12:26
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
-- Base de datos: `futbolxi_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marcas`
--

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

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `categoria` varchar(200) NOT NULL,
  `descripcion` text NOT NULL,
  `precio` int(11) NOT NULL,
  `marca_id` int(11) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombre`, `categoria`, `descripcion`, `precio`, `marca_id`, `oferta`, `imagen`) VALUES
(1, 'Nemezis', 'Firme', 'Justo cuando tus rivales creen tener un plan para vos, hacés algo inesperado. Izquierda, derecha, zig, zag y listo. Redefiní la agilidad con estos botines adidas Nemeziz.1. El exterior en Tension Tape envuelve tu pie para crear la combinación perfecta de libertad y soporte. Diseñada para envolverte en magia en el terreno firme, la suela dividida se flexiona para adaptarse a tu juego radical.', 25000, 1, 0, 'Adidas-Nemeziz-19.jpg'),
(2, 'X Speedflow 4', 'Firme', ' Los Botines adidas X Speedflow 4 Versátil, livianos y frescos, cuentan con una suela flexible multiterreno que puede llevarse a canchas de césped natural seco o terreno duro. Están elaborados en parte con materiales reciclados y un exterior de sintético con cordones para mayor seguridad en tus pisadas.', 38000, 1, 0, 'Botines-adidas-X-Speedflow-4-Versátil.jpg'),
(3, 'Predator 20.3', 'Firme', 'Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.', 38000, 1, 0, 'Botines-Adidas-Predator-20.3.jpg'),
(4, 'Predator Edge.4', 'Firme', 'Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.', 38000, 1, 0, 'Botines-Adidas-Predator-Edge.4.jpg'),
(5, 'Phantom GT Elite', 'Firme', 'Los botines Nike Phantom GT Elite presentan un diseño basado en datos creados para favorecer tus ataques a la hora de pasar la mitad de cancha. La textura de agarre en la parte superior de Flyknit envuelve el pie con hilos elásticos para brindar un ajuste firme similar al de las medias, mientras que la terminación All Conditions Control (ACC) te brinda un toque confiable en condiciones húmedas y secas.', 38000, 2, 1, 'Botines-Nike-Phantom-GT-Elite.jpg'),
(6, 'Mercurial Superfly 8 Academy KM', 'Firme', ' Pocos son los futbolistas que se han ganado el derecho de jugar con sus propios botines. Los Botines Nike Mercurial Superfly 8 Acad KM Fg/Mg están diseñados para resaltar a uno de los grandes del Paris Saint-Germain, Kylian Mbappé, y para todos los chicos que sueñan convertirse en un astro como él. Su capellada en microfibra sintética se moldea a sus dedos del pie desde el primer uso dándoles golpes acertados y resiste al agua y al paso del tiempo. El calzado ayuda a ganar velocidad y anotar muchos goles con el respaldo que solo Nike puede dar. ', 38000, 2, 0, 'Botines-Nike-Mercurial-Superfly-8-Academy-KM.jpg'),
(7, 'Mercurial Vapor 13', 'Firme', 'El calzado NIKE Mercurial Vapor 13, que se basa en la innovación de la placa en el antepié, agrega una placa versátil para múltiples superficies que brinda tracción en superficies de césped natural. El forro cómodo envuelve el pie y se siente como una segunda piel. El material sintético suave viene texturizado desde el talón hasta la puntera para darte el toque que necesitas y permitirte expresar tu creatividad a altas velocidades.', 38000, 2, 1, 'Botines-Nike-Mercurial-Vapor-13-Elite-FG.jpg'),
(8, 'Tiempo Legend 8', 'Firme', 'Los botines Nike Legend 8 fueron pensados para jugadores elegantes y tácticos. Confeccionados en cuero sintético texturizado y con una placa versátil para múltiples superficies que te permiten tener excelente tracción en césped natural. Su diseño y la textura de diamante moldeada y delgada te proporcionan una excelente sensación con la pelota a tus pies.', 38000, 2, 1, 'Botines-Nike-Tiempo-Legend-8-Elite-Fg.jpg'),
(9, 'Ultra-3.1', 'Firme', 'Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 3.1 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración', 38000, 3, 1, 'Botines-Puma-Ultra-3.1.jpg'),
(10, 'Puma Future Z 4.3', 'Firme', 'Los Botines Puma Future Z 4.3 Fg/Ag están hechos para que los jugadores puedan lucir sus habilidades dentro de la cancha y correr la pelota como un profesional. La capellada diseñada específicamente para ajustarse a la forma de sus pies alcanza niveles impensados de confort para que puedan correr con seguridad. Las zonas con impresiones en la capellada mejoran el control de la pelota y la suela con tapones es perfecta para terrenos firmes', 38000, 3, 0, 'Puma-Future-Z-4.3.jpg'),
(11, 'Ultra 4.2', 'Firme', 'Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 4.2 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración', 38000, 3, 0, 'Botines-Puma-Ultra-4.2.jpg'),
(12, 'King', 'Firme', 'El fútbol es rey en este relanzamiento de las clásicas KING Top para suelo firme. Fieles al diseño original, las KING Tops están elaboradas con materiales de última generación, como las punteras de K-Leather para un control absoluto del balón. La lengüeta plegada hacia fuera con el logotipo PUMA N.º 1 las convierte en unas botas elegantes y listas para el campo de juego.', 38000, 3, 0, 'Botines-Puma-King.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

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
(4, 'Mauricio', 'Duch', 'mauriciolionel.duch@gmail.com', '$2b$10$gXfm90WzDaLmBAEoryRzSu.NOI8vBIHben6pPkX6y5Q5TPYahB8Ae', 1, 'default.png'),
(5, 'Mauricio', 'Duch', 'mauriciolionel.duch@futbolxi.com', '$2b$10$hgNHk07GuTUeVWzirz2TnOfqw.IxuFK4f06.wKHxO0KD6Dygd3PO6', 1, 'default.png');

--
-- Índices para tablas volcadas
--

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
-- AUTO_INCREMENT de la tabla `marcas`
--
ALTER TABLE `marcas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`marca_id`) REFERENCES `marcas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
