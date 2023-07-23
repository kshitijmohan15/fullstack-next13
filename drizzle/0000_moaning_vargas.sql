CREATE TABLE `products` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`userId` varchar(191) NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`createdAt` timestamp DEFAULT (now())
);
