create table store (
	storeId int primary key auto_increment,
    storeName varchar(250) not null
)engine=InnoDB;
create table product(
	productId int primary key auto_increment,
    storeId int not null,
    CONSTRAINT fk_product_key FOREIGN KEY (storeId)
		REFERENCES store (storeId)
        ON UPDATE CASCADE ON DELETE CASCADE,
	productName varchar (250) not null,
    productPrice varchar (250) not null
)engine=InnoDB;