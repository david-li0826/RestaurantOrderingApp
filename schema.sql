create table MENU_ITEM (
	itemid         integer not null,
    name           varchar (30) not null,
    price          decimal (5, 2) not null,
    available      varchar (10) not null,
    category       varchar (30),
    discount       integer,
    description    text,
    primary key (itemid)
)

create table USER_INFO (
    userid         varchar (30) not null,
    name           varchar (30) not null,
    dateofbirth    date,
    phone          varchar (15),
    email          varchar (30),
    primary key (userid)
)

create table ORDER (
    orderid        integer not null AUTO_INCREMENT,
    status         varchar (10) not null,
    items          varchar (400) not null,
    userid         varchar (30),
    total          decimal (6, 2) not null,
    primary key (orderid),
    foreign key (userid)
)

create table LOG (
    orderid        integer not null,
    items          varchar (400) not null,
    userid         varchar (30),
    total          decimal (6, 2) not null,
    primary key (orderid)
    foreign key (userid)
)

create ORDER_ITEM (
    orderid        integer not null,
    itemid         integer not null,
    quantity       integer not null,
    price          decimal (5, 2) not null,
    primary key (orderid, itemid),
    foreign key (orderid) references ORDER,
    foreign key (itemid) references MENU_ITEM
)
