create table store (
	storeId int primary key auto_increment,
    storeName varchar(250) not null
)engine=InnoDB;
create table movcat(
	idmovie int not null,
    idcategory int not null,
    CONSTRAINT fk_movie_key FOREIGN KEY (idmovie)
		REFERENCES movies (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT fk_category_key FOREIGN KEY (idcategory)
		REFERENCES categories (id)
        ON UPDATE CASCADE ON DELETE CASCADE
)engine=InnoDB;