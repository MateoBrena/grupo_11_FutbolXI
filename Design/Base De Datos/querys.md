// CREANDO BASE DE DATOS //

CREATE DATABASE futbolxi

//-----------------------------------------------------------------------------------------------------------------------//

// CREANDO TABLAS //

CREATE TABLE products (
id INT PRIMARY KEY AUTO_INCREMENT  NOT NULL
nombre VARCHAR(200) NOT NULL
categoria VARCHAR(200) NOT NULL
descripcion VARCHAR(200) NOT NULL
precio INT NOT NULL
marca_id INT NOT NULL
)


CREATE TABLE users (
id INT PRIMARY KEY AUTO_INCREMENT  NOT NULL,
nombre VARCHAR(200) NOT NULL,
apellido VARCHAR(200) NOT NULL,
email VARCHAR(200) NOT NULL,
clave VARCHAR(200) NOT NULL,
admin boolean NOT NULL,
image VARCHAR(200)
)

CREATE TABLE imagen (
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
imagen VARCHAR(200) NOT NULL,
product_id INT NOT NULL,
FOREIGN KEY (product_id) REFERENCES products(id)
)

CREATE TABLE marcas(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(200) NOT NULL,
marcasIMG  INT NOT NULL
)



//-------------------------------------------------------------------------------------------------------------------//





// INSERTANDO DATOS EN USERS //

INSERT INTO users VALUES ( 4,"Mauricio", "Duch", "mauriciolionel.duch@gmail.com", "$2b$10$gXfm90WzDaLmBAEoryRzSu.NOI8vBIHben6pPkX6y5Q5TPYahB8Ae", true, "default.png")

INSERT INTO users VALUES ( 3,"Emilse", "Diaz", "Emily83_d@hotmail.com", "$2b$10$EYLVcPgh6dr1eabSAmzl4ePkgp0swvZaCEvV60y7jDpcVOOH6EA3a", true, "default.png")
INSERT INTO users VALUES ( 2,"Jeremías", "Rombolá", "jere.rombola@gmail.com", "$2b$10$EYLVcPgh6dr1eabSAmzl4ePkgp0swvZaCEvV60y7jDpcVOOH6EA3e", true, "default.png")

INSERT INTO users VALUES ( 1 ,"Mateo", "Brena", "matubrena@futbolxi.com", "$2b$10$doUFsQbfMhvtEdpJSBg21uSM2TPLF80wHJdPXFcD4gGL68iV3DlS2", true, "default.png")

//---------------------------------------------------------------------------------------------------------------------//


// INSERTANDO DATOS EN LA TABLA PRODUCTS //

ADIDAS

INSERT INTO products VALUES (NULL, "Nemezis", “Firme”,"Justo cuando tus rivales creen tener un plan para vos, hacés algo inesperado. Izquierda, derecha, zig, zag y listo. Redefiní la agilidad con estos botines adidas Nemeziz.1. El exterior en Tension Tape envuelve tu pie para crear la combinación perfecta de libertad y soporte. Diseñada para envolverte en magia en el terreno firme, la suela dividida se flexiona para adaptarse a tu juego radical.",
25000, 1,false)


INSERT INTO products VALUES (null, "X Speedflow 4", "Firme","Los Botines adidas X Speedflow 4 Versátil, livianos y frescos, cuentan con una suela flexible multiterreno que puede llevarse a canchas de césped natural seco o terreno duro. Están elaborados en parte con materiales reciclados y un exterior de sintético con cordones para mayor seguridad en tus pisadas.",38000, 1,false)


INSERT INTO products VALUES (null, "Predator 20.3", "Firme", "Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.",38000, 2,true)


INSERT INTO products VALUES (null, "Predator Edge.4", "Firme","Precisión. Potencia. Control. Cuando tenés ventaja, la cancha está llena de posibilidades. Descubrí el deporte rey desde un nuevo ángulo con los adidas Predator. El exterior Zone Skin de estos botines incorpora discretas secciones acanaladas que permiten diferentes tipos de contacto con la pelota. Un Power Facet le agrega peso al antepié para darle más impulso a los ataques. El cuello adaptable adidas PRIMEKNIT sujeta el pie en todo momento.",38000, 2,false)



NIKE

INSERT INTO products VALUES (null, "Phantom GT Elite", "Firme", "Los botines Nike Phantom GT Elite presentan un diseño basado en datos creados para favorecer tus ataques a la hora de pasar la mitad de cancha. La textura de agarre en la parte superior de Flyknit envuelve el pie con hilos elásticos para brindar un ajuste firme similar al de las medias, mientras que la terminación All Conditions Control (ACC) te brinda un toque confiable en condiciones húmedas y secas. El análisis con atletas en el Nike Sport Research Lab trajo como resultado una textura de agarre más gruesa y densa en el empeine como también en la punta para brindarte un mejor toque en pases, regates y tiros. El sistema Hyperquick combina un chasis mejorado con una placa de arco abierto para brindar una estabilidad ligera y los nuevos tapones crean una tracción dinámica para facilitar los rápidos cambios de dirección. Hechos para césped natural.",38000, 2,true)



INSERT INTO products VALUES (null, "Mercurial Superfly 8 Academy KM", "Firme", "Pocos son los futbolistas que se han ganado el derecho de jugar con sus propios botines. Los Botines Nike Mercurial Superfly 8 Acad KM Fg/Mg están diseñados para resaltar a uno de los grandes del Paris Saint-Germain, Kylian Mbappé, y para todos los chicos que sueñan convertirse en un astro como él. Su capellada en microfibra sintética se moldea a sus dedos del pie desde el primer uso dándoles golpes acertados y resiste al agua y al paso del tiempo. El calzado ayuda a ganar velocidad y anotar muchos goles con el respaldo que solo Nike puede dar.",38000, 2,true)


INSERT INTO products VALUES (null, "Mercurial Vapor 13", "Firme", "El calzado NIKE Mercurial Vapor 13, que se basa en la innovación de la placa en el antepié, agrega una placa versátil para múltiples superficies que brinda tracción en superficies de césped natural. El forro cómodo envuelve el pie y se siente como una segunda piel. El material sintético suave viene texturizado desde el talón hasta la puntera para darte el toque que necesitas y permitirte expresar tu creatividad a altas velocidades.",38000, 2,true)


INSERT INTO products VALUES (null, "Tiempo Legend 8", "Firme", "Los botines Nike Legend 8 fueron pensados para jugadores elegantes y tácticos. Confeccionados en cuero sintético texturizado y con una placa versátil para múltiples superficies que te permiten tener excelente tracción en césped natural. Su diseño y la textura de diamante moldeada y delgada te proporcionan una excelente sensación con la pelota a tus pies.", 38000, 2,true)

PUMA

INSERT INTO products VALUES (null, "Ultra-3.1", "Firme", "Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 3.1 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración",38000, 3,true)


INSERT INTO products VALUES (null, "Puma Future Z 4.3", "Firme", "Los Botines Puma Future Z 4.3 Fg/Ag están hechos para que los jugadores puedan lucir sus habilidades dentro de la cancha y correr la pelota como un profesional. La capellada diseñada específicamente para ajustarse a la forma de sus pies alcanza niveles impensados de confort para que puedan correr con seguridad. Las zonas con impresiones en la capellada mejoran el control de la pelota y la suela con tapones es perfecta para terrenos firmes"
38000, 3,true)


INSERT INTO products VALUES (null, "Ultra 4.2", "Firme", "Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 4.2 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración", 
38000, 3,false)


INSERT INTO products VALUES (null, "Ultra 4.2", "Firme", "Llevá tu juego al siguiente nivel con estos formidables botines de fútbol. Hechos para darte una velocidad y un control insuperables, los ULTRA 4.2 son los más livianos que encontrarás en el mercado. La nueva versión del empeine ULTRACUT brinda una sujeción multicapa, mientras que la tecnología con hilos de fibra de carbono MATRYXEVO combinada con la estructura con entramado de microfibra SPEEDCAGE garantiza una sujeción ultraliviana en los movimientos de aceleración", 
38000, 3,false)

INSERT INTO products VALUES (null, "King", "Firme", "El fútbol es rey en este relanzamiento de las clásicas KING Top para suelo firme. Fieles al diseño original, las KING Tops están elaboradas con materiales de última generación, como las punteras de K-Leather para un control absoluto del balón. La lengüeta plegada hacia fuera con el logotipo PUMA N.º 1 las convierte en unas botas elegantes y listas para el campo de juego.", 38000, 3,false)

//-----------------------------------------------------------------------------------------------------------------//
// INSERTANDO DATOS EN LA TABLA IMAGENES //


INSERT INTO imagen VALUES (null, "Adidas Nemeziz 19.jpg", 1), (null,"Adidas Nemeziz 19.2.jpg",1),(null,"Adidas Nemeziz 19.3.jpg",1)

INSERT INTO imagen VALUES (null,"Botines Adidas Predator Edge.4.jpg" , 4), (null,"Botines Adidas Predator Edge.4.2.jpg",4),(null,"Botines Adidas Predator Edge.4.3.jpg",4)

INSERT INTO imagen VALUES (null, "Botines adidas X Speedflow 4 Versátil.jpg", 3), (null,"Botines adidas X Speedflow 4 Versátil.2.jpg",3),(null,"Botines adidas X Speedflow 4 Versátil.3.jpg",3)

INSERT INTO imagen VALUES (null, "Botines Adidas Predator 20.3.jpg", 2), (null,"Botines Adidas Predator 20.3.2.jpg",2),(null,"Botines Adidas Predator 20.3.3.jpg",2)


//-----------------------------------------------------------------------------------------------------------------------//


INSERT INTO imagen VALUES (null,"Botines Nike Phantom GT Elite.jpg" , 5), (null,"Botines Nike Phantom GT Elite.2.jpg",5),(null,"Botines Nike Phantom GT Elite.3.jpg",5)

INSERT INTO imagen VALUES (null,"Botines Nike Mercurial Superfly 8 Academy KM.jpg", 6), (null,"Botines Nike Mercurial Superfly 8 Academy KM.2.jpg",6),(null,"Botines Nike Mercurial Superfly 8 Academy KM.3.jpg",6)

INSERT INTO imagen VALUES (null,"Botines Nike Mercurial Vapor 13 Elite FG.jpg", 7), (null,"Botines Nike Mercurial Vapor 13 Elite FG.2.jpg",7),(null,"Botines Nike Mercurial Vapor 13 Elite FG.3.jpg",7)

INSERT INTO imagen VALUES (null,"Botines Nike Tiempo Legend 8 Elite Fg.jpg", 8), (null,"Botines Nike Tiempo Legend 8 Elite Fg.2.jpg",8),(null,"Botines Nike Tiempo Legend 8 Elite Fg.3.jpg",8)








//-----------------------------------------------------------------------------------------------------------------------//



INSERT INTO imagen VALUES (null,"Botines Puma Ultra-3.1.jpg", 9), (null,"Botines Puma Ultra-3.1.2.jpg",9),(null,"Botines Puma Ultra-3.1.3.jpg",9)

INSERT INTO imagen VALUES (null,"Puma Future Z 4.3.jpg", 10), (null,"Puma Future Z 4.3.2.jpg",10),(null,"Puma Future Z 4.3.3.jpg",10)

INSERT INTO imagen VALUES (null,"Botines Puma Ultra 4.2.jpg", 11), (null,"Botines Puma Ultra 4.2.2.jpg",11),(null,"Botines Puma Ultra 4.2.3.jpg",11)
INSERT INTO imagen VALUES (null,"Botines Puma King.jpg", 12), (null,"default.jpg",12),(null,"default.jpg",12)



//-----------------------------------------------------------------------------------------------------------------------//

// INSERTANDO DATOS EN LA TABLA MARCAS //

INSERT INTO  marcas VALUES (null,”Adidas”, “logo-adidas-blanco.png”), (null,"Nike", “logo-nike-blanco.jpg”),(null,”Puma",”logo-puma-blanco.jpg”)

//--------------------------------------------------------------------------------------------------------------------//

Foreign Key 

ALTER TABLE products ADD FOREIGN KEY (marca_id) REFERENCES marcas(id)
