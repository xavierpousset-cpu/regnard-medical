CREATE TABLE `quoteRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`function` varchar(255) NOT NULL,
	`establishment` varchar(255) NOT NULL,
	`structureType` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20) NOT NULL,
	`estimatedNeed` varchar(255),
	`message` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `quoteRequests_id` PRIMARY KEY(`id`)
);
