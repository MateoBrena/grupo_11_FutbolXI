-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2022 a las 06:51:06
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
(1, 'Nemezis', 'Firme', 'Justo cuando tus rivales creen tener un plan para vos, hacés algo inesperado. Izquierda, derecha, zig, zag y listo. Redefiní la agilidad con estos botines adidas Nemeziz.1. El exterior en Tension Tape envuelve tu pie para crear la combinación perfecta de libertad y soporte. Diseñada para envolverte en magia en el terreno firme, la suela dividida se flexiona para adaptarse a tu juego radical. ', 38000, 1, 0, 'Adidas-Nemeziz-19.jpg'),
(2, 'X Speedflow 4', 'Firme', ' Los Botines adidas X Speedflow 4 Versátil, livianos y frescos, cuentan con una suela flexible multiterreno que puede llevarse a canchas de césped natural seco o terreno duro. Están elaborados en parte con materiales reciclados y un exterior de sintético con cordones para mayor seguridad en tus pisadas.', 38000, 1, 0, 'Botines-adidas-X-Speedflow-4-Versátil.jpg'),
(3, 'Predator 20.3', 'Blando', 'Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento. ', 55000, 1, 0, 'Botines-Adidas-Predator-20.3.jpg'),
(4, 'Predator Edge.4', 'Firme', 'Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.', 38000, 1, 0, 'Botines-Adidas-Predator-Edge.4.jpg'),
(5, 'Phantom GT Elite', 'Firme', 'Los botines Nike Phantom GT Elite presentan un diseño basado en datos creados para favorecer tus ataques a la hora de pasar la mitad de cancha. La textura de agarre en la parte superior de Flyknit envuelve el pie con hilos elásticos para brindar un ajuste firme similar al de las medias, mientras que la terminación All Conditions Control (ACC) te brinda un toque confiable en condiciones húmedas y secas. ', 35000, 2, 1, 'Botines-Nike-Phantom-GT-Elite.jpg'),
(6, 'Mercurial Superfly 8 ', 'Firme', ' Pocos son los futbolistas que se han ganado el derecho de jugar con sus propios botines. Los Botines Nike Mercurial Superfly 8 están diseñados para resaltar a uno de los grandes del Paris Saint-Germain, Kylian Mbappé, y para todos los chicos que sueñan convertirse en un astro como él. Su capellada en microfibra sintética se moldea a sus dedos del pie desde el primer uso dándoles golpes acertados y resiste al agua y al paso del tiempo. El calzado ayuda a ganar velocidad y anotar muchos goles con el respaldo que solo Nike puede dar.    ', 35000, 2, 0, 'Botines-Nike-Mercurial-Superfly-8-Academy-KM.jpg'),
(7, 'Mercurial Vapor 13', 'Firme', 'El calzado NIKE Mercurial Vapor 13, que se basa en la innovación de la placa en el antepié, agrega una placa versátil para múltiples superficies que brinda tracción en superficies de césped natural. El forro cómodo envuelve el pie y se siente como una segunda piel. El material sintético suave viene texturizado desde el talón hasta la puntera para darte el toque que necesitas y permitirte expresar tu creatividad a altas velocidades. ', 35000, 2, 1, 'Botines-Nike-Mercurial-Vapor-13-Elite-FG.jpg'),
(8, 'Tiempo Legend 8', 'Firme', 'Los botines Nike Legend 8 fueron pensados para jugadores elegantes y tácticos. Confeccionados en cuero sintético texturizado y con una placa versátil para múltiples superficies que te permiten tener excelente tracción en césped natural. Su diseño y la textura de diamante moldeada y delgada te proporcionan una excelente sensación con la pelota a tus pies. ', 35000, 2, 1, 'Botines-Nike-Tiempo-Legend-8-Elite-Fg.jpg'),
(9, 'Ultra-3.1', 'Firme', 'Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 3.1 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración ', 32000, 3, 1, 'Botines-Puma-Ultra-3.1.jpg'),
(10, 'Future Z', 'Blando', 'Los Botines Puma Future Z 4.3 Fg/Ag están hechos para que los jugadores puedan lucir sus habilidades dentro de la cancha y correr la pelota como un profesional. La capellada diseñada específicamente para ajustarse a la forma de sus pies alcanza niveles impensados de confort para que puedan correr con seguridad. Las zonas con impresiones en la capellada mejoran el control de la pelota y la suela con tapones es perfecta para terrenos firmes   ', 49000, 3, 0, 'Puma-Future-Z-4.3.jpg'),
(11, 'Ultra 4.2', 'Firme', 'Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 4.2 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración ', 32000, 3, 0, 'Botines-Puma-Ultra-4.2.jpg'),
(12, 'King 1', 'Firme', 'El fútbol es rey en este relanzamiento de las clásicas KING Top para suelo firme. Fieles al diseño original, las KING Tops están elaboradas con materiales de última generación, como las punteras de K-Leather para un control absoluto del balón. La lengüeta plegada hacia fuera con el logotipo PUMA N.º 1 las convierte en unas botas elegantes y listas para el campo de juego.  ', 32000, 3, 0, 'Botines-Puma-King.jpg'),
(13, 'Copa Sense', 'Firme', 'Sentí el juego en todo momento con los Botines adidas Copa Sense. 1 Hechos con una parte superior de piel de fusión y antepié de cuero K sin costuras que garantiza durabilidad y resistencia a los usos y el juego intenso. Además, hace que los toques sean más suaves para que siempre estés concentrado en el partido. Los sensepodes en el talón llenan huecos para asegurarte un ajuste perfecto y los tacos de este calzado brindan un agarre ideal al campo haciendo perfectas tus jugadas y convirtiéndote en la estrella del partido.', 38000, 1, 0, 'imagen-1668485617237-877638857.jpg'),
(14, 'Primeknit', 'Blando', 'Adidas Predator tiene todos los ángulos cubiertos. Salta al campo y encuentra tu ventaja con estos botines de fútbol para terreno blando. En la parte superior, una parte superior de Zone Skin incluye secciones discretas acanaladas, cada una de las cuales se destaca en un tipo diferente de contacto entre el botín y la pelota. Debajo, un Power Facet desvía el peso al antepié para golpes feroces. ', 55000, 1, 0, 'imagen-1668485935896-959650006.jpg'),
(15, 'Copa Sense X', 'Firme', 'Cuando saltes al terreno de juego, no te limites solo a jugar, sentilo. Acércate más al balón con estos botines para terreno firme adidas Copa Sense. Su antepié de cuero K suave y sin costuras y los Touchpods de espuma se combinan para mantener los toques tan suaves como la seda. Los gráficos llamativos se inspiran en el escenario más grande del fútbol.', 38000, 1, 0, 'imagen-1668486794864-963278757.jpg'),
(16, 'X Speedportal', 'Blando', 'Estas botas forman parte de la colección Al Rihla Pack, que utilizarán los jugadores durante el Mundial de Qatar de 2022. Presentan un diseño en color azul celeste con detalles multicolor. Placa de la suela que incorpora una fina lámina de fibra de carbono que ofrece una gran reactividad. Configuración de los tapones que combina aluminio y TPU ideal para su uso en césped natural húmedo. La suave y fina microfibra ofrece un extra de grip con la pelota.', 55000, 1, 0, 'imagen-1668487315149-265591056.jpg'),
(17, 'Ultra Ultimate', 'Blando', 'Juega rápido. Futbolistas, conozcan la peor pesadilla de un defensor: The Ultra Ultimate. Tiene una parte superior ultraligera ultratejida y una placa de suela blanda rediseñada que lo ayuda a llegar a la pelota más rápido y elegir la esquina inferior.', 49000, 3, 0, 'imagen-1668487672160-202824536.jpg'),
(18, 'Adrenaline', 'Firme', 'El nuevo Puma Adrenaline le ofrece un mejor ajuste y soporte para cualquier forma de pie al hacer giros bruscos y movimientos intrincados en el campo.Con una suela exterior ultraligera y reactiva y una parte superior de ingeniería de una pieza con tecnología NETFIT.', 32000, 3, 0, 'imagen-1668488005003-884049484.jpg'),
(19, 'One 5.1', 'Firme', 'El PUMA ONE 5.1 está diseñado para caber perfectamente en el pie, ser rápido en la cancha y tener una sensación excelente sobre la pelota. Está listo para darles a los jugadores la confianza que necesitan para jugar al máximo. Con suela RAPIDSPRINT ligera y reactiva con talón externo.', 32000, 3, 0, 'imagen-1668488217589-458343225.jpg'),
(20, 'Speedcage', 'Blando', 'Lleva tu juego al siguiente nivel con estos formidables botines. Construido para una velocidad y un control insuperables, el SPEEDCAGE es el más ligero del mercado. La parte superior ULTRACUT actualizada proporciona soporte de varias capas, mientras que la tecnología de hilo de carbono MATRYXEVO combinada con una microfibra actualizada con ventanas recortadas garantiza un soporte ultraligero durante el movimiento rápido hacia adelante.', 49000, 3, 0, 'imagen-1668488413836-20157763.jpg'),
(21, 'Premier III', 'Blando', 'El corte superior clásico y atemporal de las Premier III está fabricado en piel de canguro sintética de alta calidad y resistencia. El diseño anatómico se ajusta a tu pie como un guante para entregarte sujeción incomparable en conjunto con su cierre de cordones. Por su parte, la lengüeta doblada viene con una línea de corte en caso de que prefieras reducir materiales y disfrutar de un estilo más moderno.', 52000, 2, 0, 'imagen-1668489321382-342282910.jpg'),
(22, 'Zoom Elite', 'Firme', 'Con los Botines Nike Zoom Elite no hay dudas, te convertirás rápidamente en el capitán. Hechos en una parte superior de tejido Flyknit que genera un mejor control de la pelota y una suela con tacos ubicados estratégicamente para dominar el terreno. Además, gracias a su tecnología ACC, el estado del terreno no será un problema, se que hace que se adapten a distintas condiciones, tanto húmedas como secas.', 35000, 2, 0, 'imagen-1668489472998-132525855.jpg'),
(23, 'Mercurial Superfly 7', 'Firme', 'Los Botines Nike Mercurial Superfly 7 presentan un nuevo estilo con componentes especializados que te permiten jugar más rápido de principio a fin. Cuentan con un cuello elástico que proporcionan un soporte adicional y la innovadora placa proporciona una capacidad de respuesta instantánea para cortes más rápidos a altas velocidades.', 35000, 2, 0, 'imagen-1668489621044-716427535.jpg'),
(24, 'Phantom GT2 Elite ', 'Firme', 'Los Botines Nike Phantom Gt2 Elite están confeccionados en cuero sintético texturizado para un mayor agarre y durabilidad. El análisis con atletas en el Nike Sport Research Lab trajo como resultado una textura de agarre más gruesa y densa en el empeine como también en la punta para brindarte un mejor toque en pases, regates y tiros.', 35000, 2, 0, 'imagen-1668489764481-780038514.jpg');

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
(1, 'Mateo', 'Brena', 'matubrena@futbolxi.com', '$2b$10$doUFsQbfMhvtEdpJSBg21uSM2TPLF80wHJdPXFcD4gGL68iV3DlS2', 1, 'imagen-1668490118152-489197976.jpeg'),
(2, 'Jeremías', 'Rombolá', 'jere.rombola@futbolxi.com', '$2b$10$EYLVcPgh6dr1eabSAmzl4ePkgp0swvZaCEvV60y7jDpcVOOH6EA3e', 1, 'default.png'),
(3, 'Emilse', 'Diaz', 'Emily83_d@futbolxi.com', '$2b$10$EYLVcPgh6dr1eabSAmzl4ePkgp0swvZaCEvV60y7jDpcVOOH6EA3a', 1, 'default.png'),
(4, 'Mauricio', 'Duch', 'mauriciolionel.duch@futbolxi.com', '$2b$10$hgNHk07GuTUeVWzirz2TnOfqw.IxuFK4f06.wKHxO0KD6Dygd3PO6', 1, 'default.png'),
(5, 'Eduardo', 'Virgilio', 'eduvirgilio@gmail.com', '$2b$10$rqfEeBg0SZSeOWJRojsZpu/0iu5Z14UvTuzRa9UaOYGECEPfbixI.', 0, 'default.png'),
(6, 'Aylen', 'Martinez', 'aylenmartinez@gmail.com', '$2b$10$zEt8Rr8M68/rwKEdmYIBgO/r6ck44MdTKCcEzlBvvLGGg7yrGUZ2S', 0, 'default.png'),
(7, 'Gonzalo', 'Alcocer', 'gonzaalcocer@gmail.com', '$2b$10$c9qy0n19zWfSXOOuyqEKeObSaHaWH1/5dvKsfJwXisxnbnUVXXF9G', 0, 'default.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

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
